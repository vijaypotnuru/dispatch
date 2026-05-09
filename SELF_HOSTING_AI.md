# Self-Hosting Setup (for AI Agents)

This document is designed for AI agents to execute. Follow these steps exactly to deploy a local Dispatch instance and connect to it.

## Prerequisites

- Docker and Docker Compose installed
- Homebrew installed (for CLI)
- At least one AI agent CLI on PATH: `claude` or `codex`

## Install

```bash
# Install CLI + provision self-host server
curl -fsSL https://raw.githubusercontent.com/vijaypotnuru/dispatch/main/scripts/install.sh | bash -s -- --with-server

# Configure CLI for localhost, authenticate, and start daemon
dispatch setup self-host
```

Wait for the server output `✓ Dispatch server is running and CLI is ready!` before running `dispatch setup self-host`.

**Expected result:**
- Frontend at http://localhost:3000
- Backend at http://localhost:8080
- `dispatch` CLI installed and configured for localhost

## Alternative: Manual Setup

```bash
git clone https://github.com/vijaypotnuru/dispatch.git
cd dispatch
make selfhost
brew install vijaypotnuru/tap/dispatch
dispatch setup self-host
```

The `dispatch setup self-host` command will:
1. Configure CLI to connect to localhost:8080 / localhost:3000
2. Open a browser for login — use verification code `888888` with any email
3. Discover workspaces automatically
4. Start the daemon in the background

## Verification

```bash
dispatch daemon status
```

Should show `running` with detected agents.

## Stopping

```bash
# Stop the daemon
dispatch daemon stop

# Stop all Docker services
cd dispatch
make selfhost-stop
```

## Custom Ports

If the default ports (8080/3000) are in use:

1. Edit `.env` and change `PORT` and `FRONTEND_PORT`
2. Run `make selfhost`
3. Run `dispatch setup self-host --port <PORT> --frontend-port <FRONTEND_PORT>`

## Troubleshooting

- **Backend not ready:** `docker compose -f docker-compose.selfhost.yml logs backend`
- **Frontend not ready:** `docker compose -f docker-compose.selfhost.yml logs frontend`
- **Daemon issues:** `dispatch daemon logs`
- **Health checks:** `curl http://localhost:8080/health` for liveness, `curl http://localhost:8080/readyz` for dependency-aware readiness
