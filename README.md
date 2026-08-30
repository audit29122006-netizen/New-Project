# Orbit workspace

A polished Vue workspace starter with local task state and a Supabase-ready client.

## Stack

- Vue 3 + Vite
- JavaScript
- Tailwind CSS v4 (Vite plugin)
- Pinia
- Vue Router
- Vue DevTools (Vite plugin)
- Supabase JavaScript client

## Run it

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Vite. The workspace is usable immediately and persists its demo tasks in browser local storage.

## Connect Supabase

1. Copy `.env.example` to `.env.local`.
2. In your Supabase project's **Connect** panel, copy the project URL and publishable key.
3. Add them to `.env.local`, then restart the dev server.

The client is exported from `src/lib/supabase.js`. The browser only receives `VITE_` variables, so never add a service-role key to this project.
