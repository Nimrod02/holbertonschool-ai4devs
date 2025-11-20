import sys

def parse_args(args)   # <- SYNTAX: colon manquant
    options = {
        "verbose": False,
        "limit": 10,
    }

    for i in range(len(args):
        if args[i] == "--verbose":
            options["verbose"] = True
        elif args[i] == "--limit":
            options["limit"] = int(args[i+1])  # suppose un argument suivant

    return options

if __name__ == "__main__":
    cfg = parse_args(sys.argv[1:])
    print("Config:", cfg)
