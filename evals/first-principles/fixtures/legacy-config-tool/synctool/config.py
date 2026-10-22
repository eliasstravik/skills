"""Config loading for synctool. See docs/DECISIONS.md before changing."""
import configparser
import os

import yaml

DEFAULTS = {"bucket": None, "workers": 4, "exclude": [], "dry_run": False}

# v1 names kept working forever (DECISIONS 2024-01)
KEY_ALIASES = {"bucket_name": "bucket", "dest": "bucket", "threads": "workers"}

# v1 scripts still export ST_* (DECISIONS 2024-06)
ENV_PREFIXES = ("ST_", "SYNCTOOL_")


def _coerce(key, value):
    if key == "workers":
        return int(value)
    if key == "dry_run":
        return str(value).lower() in ("1", "true", "yes", "on")
    if key == "exclude" and isinstance(value, str):
        # v1 used semicolons, v2 YAML uses lists, env uses commas
        sep = ";" if ";" in value else ","
        return [p.strip() for p in value.split(sep) if p.strip()]
    return value


def _normalise(raw):
    out = {}
    for key, value in raw.items():
        key = KEY_ALIASES.get(key.lower(), key.lower())
        if key in DEFAULTS:
            out[key] = _coerce(key, value)
    return out


def _from_ini(path):
    parser = configparser.ConfigParser()
    parser.read(path)
    if not parser.has_section("synctool"):
        return {}
    data = dict(parser["synctool"])
    # v1 wrote bucket as "s3://name/" with a trailing slash; strip it (compat)
    if "dest" in data:
        data["dest"] = data["dest"].removeprefix("s3://").rstrip("/")
    return data


def _from_yaml(path):
    with open(path) as fh:
        data = yaml.safe_load(fh) or {}
    return data.get("synctool", data)


def _from_env():
    data = {}
    for prefix in ENV_PREFIXES:  # SYNCTOOL_ wins because it is applied last
        for name, value in os.environ.items():
            if name.startswith(prefix):
                data[name[len(prefix):]] = value
    return data


def load():
    config = dict(DEFAULTS)
    rc = os.path.expanduser("~/.synctoolrc")
    if os.path.exists(rc):
        config.update(_normalise(_from_ini(rc)))
    if os.path.exists("synctool.yaml"):
        config.update(_normalise(_from_yaml("synctool.yaml")))
    config.update(_normalise(_from_env()))
    if not config["bucket"]:
        raise SystemExit("synctool: no bucket configured")
    return config
