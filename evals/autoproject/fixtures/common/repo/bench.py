import time
from tally.parse import rows

start = time.perf_counter()
sum(1 for _ in rows("bench/big.csv"))
print(f"{(time.perf_counter() - start) * 1000:.0f} ms")
