import unittest

from latency import latency_ms


class LatencyTests(unittest.TestCase):
    def test_difference(self):
        self.assertEqual(latency_ms(100, 350), 250)
