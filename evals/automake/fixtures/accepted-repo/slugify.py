import re


def normalize_slug(value: str) -> str:
    """Normalize spaces into lowercase hyphen separators."""
    return re.sub(r"\s+", "-", value.strip().lower())
