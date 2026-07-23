import unittest

from src.queue_summary import summarize


class SummaryTests(unittest.TestCase):
    def test_total(self):
        self.assertEqual(summarize([{"id": "q-1"}]), {"total": 1})
