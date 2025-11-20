#!/usr/bin/env python3

import sys
from pathlib import Path

REFERENCE_TESTS_DIR = Path(".") / "tests"


def main() -> None:
    if not REFERENCE_TESTS_DIR.is_dir():
        sys.exit(1)

    for path in sorted(REFERENCE_TESTS_DIR.rglob("*")):
        if not path.is_file():
            continue
        rel_path = path.relative_to(Path("."))
        print(f"### FILE: {rel_path}")
        try:
            with path.open("r", encoding="utf-8", errors="ignore") as handle:
                sys.stdout.write(handle.read())
        except OSError:
            sys.exit(1)
        print()

    sys.exit(0)


if __name__ == "__main__":
    main()
