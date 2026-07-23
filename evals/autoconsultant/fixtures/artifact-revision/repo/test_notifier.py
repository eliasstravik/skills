import unittest

from notifier import reminder_due


class ReminderTests(unittest.TestCase):
    def test_boundary(self):
        self.assertTrue(reminder_due(30))
