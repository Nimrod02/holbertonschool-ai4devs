import sys

def parse_args(args):
    """
    Parses --verbose and --limit <int>.
    Raises on unknown flags or missing values (why: avoid silent misconfig).
    """
    options = {"verbose": False, "limit": 10}
    i = 0
    while i < len(args):
        a = args[i]
        if a == "--verbose":
            options["verbose"] = True
            i += 1
        elif a == "--limit":
            if i + 1 >= len(args):
                raise SystemExit("error: --limit requires an integer")
            try:
                options["limit"] = int(args[i + 1])
            except ValueError:
                raise SystemExit("error: --limit requires an integer")
            i += 2
        else:
            raise SystemExit(f"error: unknown arg {a}")
    return options

if __name__ == "__main__":
    cfg = parse_args(sys.argv[1:])
    print("Config:", cfg)