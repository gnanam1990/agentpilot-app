# AgentPilot

Natural-language interface for Kite Mainnet using Claude + MCP.

## Deployment

- **Production:** https://agentpilot-app.vercel.app
- **Host:** Vercel (`agentpilot-app`)
- **Status:** production URL verified; real chat/tool execution requires `ANTHROPIC_API_KEY` and MCP/backend env configuration
- **Last verified:** 2026-05-23

## Features

- Chat with Claude about Kite operations
- MCP tool integration for wallet, sessions, payments
- Tool call visualization
- Example prompts gallery
- Dark mode support

## Development

```bash
pnpm install
pnpm dev
```

Requires `ANTHROPIC_API_KEY` in `.env.local`.
