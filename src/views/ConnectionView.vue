<script setup>
import { isSupabaseConfigured } from '../lib/supabase'

const steps = [
  { number: '01', title: 'Create a Supabase project', text: 'Start a project in the Supabase dashboard, then open its Connect panel.' },
  { number: '02', title: 'Add its browser-safe credentials', text: 'Copy .env.example to .env.local and fill in the project URL and publishable key.' },
  { number: '03', title: 'Build your shared data', text: 'Use the exported supabase client in src/lib/supabase.js for auth, tables, storage, and realtime.' },
]
</script>

<template>
  <section class="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
    <div>
      <p class="text-sm font-medium text-violet-300">Supabase integration</p>
      <h1 class="mt-3 font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">Your data can live beyond this browser.</h1>
      <p class="mt-5 max-w-lg text-base leading-7 text-slate-400">Orbit works immediately with local storage. Add Supabase when you want accounts, a shared workspace, realtime updates, or a database behind your project.</p>
      <div class="mt-8 inline-flex items-center gap-3 rounded-xl border px-4 py-3" :class="isSupabaseConfigured ? 'border-emerald-300/20 bg-emerald-400/10' : 'border-amber-300/15 bg-amber-400/[0.07]'">
        <span class="h-2 w-2 rounded-full" :class="isSupabaseConfigured ? 'bg-emerald-300' : 'bg-amber-300'" />
        <span class="text-sm font-medium" :class="isSupabaseConfigured ? 'text-emerald-200' : 'text-amber-100'">{{ isSupabaseConfigured ? 'Supabase is configured' : 'Local demo mode' }}</span>
      </div>
    </div>

    <div class="rounded-2xl border border-white/8 bg-[#12162b]/70 p-5 sm:p-7">
      <div v-for="(step, index) in steps" :key="step.number" class="relative flex gap-5" :class="index < steps.length - 1 ? 'pb-9' : ''">
        <div v-if="index < steps.length - 1" class="absolute left-[19px] top-10 h-[calc(100%_-_1.75rem)] w-px bg-white/10" />
        <span class="z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-violet-400/12 text-xs font-bold text-violet-200 ring-1 ring-violet-300/15">{{ step.number }}</span>
        <div class="pt-1"><h2 class="text-base font-semibold text-white">{{ step.title }}</h2><p class="mt-2 text-sm leading-6 text-slate-500">{{ step.text }}</p></div>
      </div>
      <div class="mt-3 rounded-xl border border-white/8 bg-black/20 p-4 font-mono text-xs leading-6 text-slate-400">
        <p class="text-slate-500"># .env.local</p>
        <p><span class="text-violet-300">VITE_SUPABASE_URL</span>=your-project-url</p>
        <p><span class="text-violet-300">VITE_SUPABASE_PUBLISHABLE_KEY</span>=your-publishable-key</p>
      </div>
    </div>
  </section>

  <section class="mt-10 rounded-2xl border border-sky-300/10 bg-gradient-to-r from-sky-400/[0.08] to-violet-400/[0.08] p-6 sm:p-8">
    <h2 class="font-display text-xl font-semibold text-white">A secure-by-default starting point</h2>
    <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-400">Only Vite variables prefixed with <code class="rounded bg-white/7 px-1.5 py-0.5 text-sky-200">VITE_</code> are exposed to the browser. Never put a Supabase service-role key in this frontend project.</p>
  </section>
</template>
