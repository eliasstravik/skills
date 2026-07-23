import unittest

from checks import normalize_block


class CheckTests(unittest.TestCase):
    def test_trim(self):
        self.assertEqual(normalize_block(" ok\n"), "ok")
