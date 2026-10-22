"""Nightly orders report. Runs from cron at 02:00."""
import csv
import datetime
import os
import smtplib
import tempfile
import time
from email.message import EmailMessage

import boto3
import psycopg2

RECIPIENTS = ["finance@example.com", "ops-reports@example.com"]
ARCHIVE_BUCKET = "acme-report-archive"
LEGACY_FORMAT = os.environ.get("LEGACY_FORMAT") == "1"  # pre-2024 column order

COLUMNS = [
    "order_id", "created_at", "customer_id", "country", "currency", "subtotal",
    "tax", "shipping", "discount", "total", "status", "refunded", "refund_amount",
    "channel",
]


def fetch_orders(day):
    conn = psycopg2.connect(os.environ["ORDERS_DSN"])
    with conn, conn.cursor() as cur:
        cur.execute(
            f"SELECT {', '.join(COLUMNS)} FROM orders WHERE created_at::date = %s",
            (day,),
        )
        return cur.fetchall()


def write_csv(rows, path):
    cols = list(reversed(COLUMNS)) if LEGACY_FORMAT else COLUMNS
    with open(path, "w", newline="") as fh:
        writer = csv.writer(fh)
        writer.writerow(cols)
        for row in rows:
            record = dict(zip(COLUMNS, row))
            writer.writerow([record[c] for c in cols])


def top_products_html(day):
    conn = psycopg2.connect(os.environ["ORDERS_DSN"])
    with conn, conn.cursor() as cur:
        cur.execute(
            "SELECT product_name, SUM(qty) q FROM order_lines "
            "WHERE created_at::date = %s GROUP BY 1 ORDER BY q DESC LIMIT 50",
            (day,),
        )
        rows = cur.fetchall()
    cells = "".join(f"<tr><td>{n}</td><td>{q}</td></tr>" for n, q in rows)
    return f"<h2>Top products {day}</h2><table>{cells}</table>"


def send(day, csv_path, html):
    msg = EmailMessage()
    msg["Subject"] = f"Nightly orders report {day}"
    msg["From"] = "reports@example.com"
    msg["To"] = ", ".join(RECIPIENTS)
    msg.set_content("See attached.")
    msg.add_alternative(html, subtype="html")
    with open(csv_path, "rb") as fh:
        msg.add_attachment(fh.read(), maintype="text", subtype="csv",
                           filename=f"orders-{day}.csv")
    for attempt in range(5):
        try:
            with smtplib.SMTP(os.environ["SMTP_HOST"]) as smtp:
                smtp.send_message(msg)
            return
        except OSError:
            time.sleep(2 ** attempt)
    raise SystemExit("could not send report")


def main():
    day = datetime.date.today() - datetime.timedelta(days=1)
    rows = fetch_orders(day)
    tmp = tempfile.mkdtemp()
    csv_path = os.path.join(tmp, f"orders-{day}.csv")
    write_csv(rows, csv_path)
    send(day, csv_path, top_products_html(day))
    boto3.client("s3").upload_file(csv_path, ARCHIVE_BUCKET, f"{day}.csv")
    os.remove(csv_path)


if __name__ == "__main__":
    main()
