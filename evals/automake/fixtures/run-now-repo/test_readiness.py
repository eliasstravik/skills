import unittest

from readiness import readiness


class ReadinessTests(unittest.TestCase):
    def test_ready(self):
        self.assertEqual(readiness(), "ready")


if __name__ == "__main__":
    unittest.main()
