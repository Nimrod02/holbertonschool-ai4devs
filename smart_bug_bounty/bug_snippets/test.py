#!/usr/bin/env python3

import os
import sys


def show_bug_files() -> None:
    """Print each non-markdown bug* file with a header and its contents."""
    try:
        entries = sorted(os.listdir("."))
    except OSError:
        sys.exit(1)

    for name in entries:
        if not name.startswith("bug"):
            continue
        if name.lower().endswith(".md"):
            continue

        if not os.path.isfile(name):
            continue

        # Header
        print(f"### FILE: {name}")

        # File contents
        try:
            with open(name, "r", encoding="utf-8", errors="ignore") as f:
                sys.stdout.write(f.read())
        except OSError:
            sys.exit(1)

        # Blank line after each file
        print()


def show_bug_descriptions() -> None:
    """Print the contents of bug_descriptions.md (like `cat bug_descriptions.md`)."""
    description_file = "bug_descriptions.md"
    try:
        with open(description_file, "r", encoding="utf-8", errors="ignore") as f:
            sys.stdout.write(f.read())
    except OSError:
        sys.exit(1)


def main() -> None:
    show_bug_files()
    show_bug_descriptions()


if __name__ == "__main__":
    main()

