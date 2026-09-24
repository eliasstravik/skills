from tally.parse import rows


def test_rows(tmp_path):
    p = tmp_path / "a.csv"
    p.write_text("region,amount\nnorth,3\n")
    assert list(rows(p)) == [{"region": "north", "amount": "3"}]
