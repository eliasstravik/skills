# Decisions

- 2023-04 — Config lives in `~/.synctoolrc` (INI). Keep INI support forever:
  users have these files and we promised not to break them.
- 2024-01 — Added `synctool.yaml` for per-project config. Old INI key names
  are aliased so nobody has to edit their rc file.
- 2024-06 — Renamed the env prefix to `SYNCTOOL_`, but kept `ST_` because CI
  scripts written for v1 still export it.
- 2025-02 — Spent three weeks getting merge precedence right across the four
  sources. Do not rework it; extend it.
