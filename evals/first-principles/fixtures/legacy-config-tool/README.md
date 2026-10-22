# synctool

Syncs a local folder to a remote storage bucket. Used by people on their
laptops and by CI jobs.

## Configuration

synctool reads settings from, in order:

1. `~/.synctoolrc` (INI, the original v1 format)
2. `./synctool.yaml` (v2 format)
3. environment variables `SYNCTOOL_*`, and the v1 prefix `ST_*`

Later sources win. Old key names (`bucket_name`, `dest`, `threads`) still work.
