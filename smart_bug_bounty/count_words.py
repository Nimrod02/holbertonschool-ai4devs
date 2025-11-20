#!/usr/bin/env python3

import sys


def count_words(path: str) -> int:
    try:
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            text = f.read()
    except OSError:
        # If the file can't be read, treat it as failure.
        sys.exit(1)
    return len(text.split())


def main() -> None:
    wc = count_words("reflection.md")
    if 400 <= wc <= 600:
        sys.exit(0)
    sys.exit(1)


if __name__ == "__main__":
    main()
