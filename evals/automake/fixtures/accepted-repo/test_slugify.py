import unittest

from slugify import normalize_slug


class NormalizeSlugTests(unittest.TestCase):
    def test_spaces(self):
        self.assertEqual(normalize_slug("  Harbor Signal  "), "harbor-signal")

    def test_repeated_separators(self):
        self.assertEqual(normalize_slug("Harbor---Signal"), "harbor-signal")
        self.assertEqual(normalize_slug("Harbor__Signal"), "harbor-signal")
        self.assertEqual(normalize_slug("Harbor -_- Signal"), "harbor-signal")


if __name__ == "__main__":
    unittest.main()
