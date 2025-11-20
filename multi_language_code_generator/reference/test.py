#!/usr/bin/env python3
"""Verify reference/tests contains at least 10 files."""

import sys
from pathlib import Path

REFERENCE_TESTS_DIR = Path(".") / "tests"
MIN_TEST_FILES = 10


def count_files(directory: Path) -> int:
    if not directory.is_dir():
        return 0

    total = 0
    try:
        for path in directory.rglob("*"):
            if path.is_file():
                total += 1
    except OSError:
        return 0
    return total


def main() -> None:
    test_count = count_files(REFERENCE_TESTS_DIR)
    status = "GO" if test_count >= MIN_TEST_FILES else "NO GO"
    print(f"reference/tests files: {test_count}; {status}")
    sys.exit(0 if status == "GO" else 1)


if __name__ == "__main__":
    main()

