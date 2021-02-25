# Installation

## For Linux (via [Nix](https://github.com/NixOS/nix))

The [default.nix](./default.nix) file declaratively defines the development environment. Load this environment by running [nix-shell](https://nixos.org/nixos/nix-pills/developing-with-nix-shell.html) in the root source directory.

`npm` and `npx` should now be available in the shell environment.

# Development

To run the app:
- `docker-compose up --build`
- Open a browser to `https://localhost/`

To wipe the persistent state of the app:
- `docker-compose down`

# Production

- `mkdir -p data/server/traefik`
- `touch data/server/traefik/acme.json`
- `docker-compose --env-file=.prod.env up --build`
