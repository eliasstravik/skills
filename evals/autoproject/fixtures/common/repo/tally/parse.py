import csv


def rows(path):
    with open(path, newline="") as f:
        header = next(csv.reader(f))
        for line in f:
            values = next(csv.reader([line]))
            yield {header[i]: values[i] for i in range(len(header))}
