<script setup>
import { RouterLink } from 'vue-router'

const features = [
  { icon: '◌', title: 'One clear picture', text: 'Keep priorities, projects, and momentum in one calm workspace.' },
  { icon: '↗', title: 'Move with intent', text: 'Turn your next right move into a visible, finishable task.' },
  { icon: '✦', title: 'Ready to grow', text: 'Connect Supabase when you are ready to make your data collaborative.' },
]
</script>

<template>
  <section class="grid items-center gap-14 py-6 lg:grid-cols-[1.03fr_.97fr] lg:py-16">
    <div class="max-w-2xl">
      <div class="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/15 bg-violet-400/10 px-3 py-1.5 text-xs font-medium text-violet-200">
        <span class="h-1.5 w-1.5 rounded-full bg-violet-300" />
        Your work, in orbit
      </div>
      <h1 class="font-display text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
        Make progress feel<br class="hidden sm:block" /> beautifully obvious.
      </h1>
      <p class="mt-7 max-w-xl text-lg leading-8 text-slate-400">
        Orbit is a focused home for the work that matters. Plan your day, see your momentum, and leave the noise behind.
      </p>
      <div class="mt-9 flex flex-wrap items-center gap-3">
        <RouterLink to="/workspace" class="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#111426] shadow-xl shadow-white/10 transition hover:-translate-y-0.5 hover:bg-violet-100">
          Explore workspace
        </RouterLink>
        <RouterLink to="/connection" class="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/10">
          Connect Supabase
        </RouterLink>
      </div>
      <div class="mt-10 flex items-center gap-4 text-sm text-slate-500">
        <div class="flex -space-x-2">
          <span class="grid h-7 w-7 place-items-center rounded-full border-2 border-[#0d1020] bg-violet-400 text-[9px] font-bold text-violet-950">A</span>
          <span class="grid h-7 w-7 place-items-center rounded-full border-2 border-[#0d1020] bg-sky-400 text-[9px] font-bold text-sky-950">M</span>
          <span class="grid h-7 w-7 place-items-center rounded-full border-2 border-[#0d1020] bg-rose-400 text-[9px] font-bold text-rose-950">J</span>
        </div>
        Designed for small teams with big momentum.
      </div>
    </div>

    <div class="relative mx-auto w-full max-w-xl">
      <div class="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-transparent to-sky-400/15 blur-2xl" />
      <div class="rounded-2xl border border-white/10 bg-[#161a31]/90 p-4 shadow-2xl shadow-black/30 backdrop-blur sm:p-5">
        <div class="flex items-center justify-between border-b border-white/8 pb-4">
          <div class="flex items-center gap-2.5">
            <span class="h-2.5 w-2.5 rounded-full bg-rose-400" /><span class="h-2.5 w-2.5 rounded-full bg-amber-300" /><span class="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span class="rounded-md bg-white/5 px-2 py-1 text-[10px] font-medium tracking-wide text-slate-400">SEPTEMBER 24</span>
        </div>
        <div class="mt-5 grid gap-4 sm:grid-cols-[1.12fr_.88fr]">
          <div class="rounded-xl border border-white/8 bg-[#11152a] p-4">
            <div class="flex items-center justify-between"><span class="text-xs font-medium text-slate-400">Today’s focus</span><span class="text-xs text-violet-300">3 of 5</span></div>
            <p class="mt-4 text-base font-semibold text-white">Polish the onboarding flow</p>
            <div class="mt-4 h-1.5 overflow-hidden rounded-full bg-white/8"><div class="h-full w-3/5 rounded-full bg-gradient-to-r from-violet-400 to-sky-400" /></div>
            <div class="mt-4 flex items-center justify-between text-xs text-slate-500"><span>Product</span><span>Today</span></div>
          </div>
          <div class="rounded-xl border border-violet-300/10 bg-violet-400/8 p-4">
            <span class="text-xs font-medium text-violet-200">Weekly pulse</span>
            <div class="mt-3 flex items-end gap-1.5"><span class="h-8 w-3 rounded-sm bg-violet-500/40" /><span class="h-12 w-3 rounded-sm bg-violet-500/60" /><span class="h-7 w-3 rounded-sm bg-violet-500/40" /><span class="h-16 w-3 rounded-sm bg-sky-400" /><span class="h-10 w-3 rounded-sm bg-violet-500/50" /><span class="h-14 w-3 rounded-sm bg-violet-400/80" /></div>
            <p class="mt-3 text-2xl font-semibold tracking-tight text-white">78<span class="text-sm text-slate-400">%</span></p>
            <p class="text-[11px] text-emerald-300">↑ 12% from last week</p>
          </div>
        </div>
        <div class="mt-4 space-y-2.5 rounded-xl border border-white/8 bg-white/[0.025] p-3">
          <div v-for="task in ['Review launch metrics', 'Prepare interview guide', 'Share product update']" :key="task" class="flex items-center gap-3 rounded-lg px-1 py-1.5">
            <span class="h-4 w-4 rounded-full border border-slate-500" /><span class="flex-1 text-xs text-slate-300">{{ task }}</span><span class="h-5 w-5 rounded-full bg-sky-400/80" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="grid gap-4 border-t border-white/8 py-12 sm:grid-cols-3">
    <article v-for="feature in features" :key="feature.title" class="rounded-xl p-4 transition hover:bg-white/[0.035]">
      <span class="grid h-9 w-9 place-items-center rounded-lg bg-white/7 text-lg text-violet-300">{{ feature.icon }}</span>
      <h2 class="mt-5 text-sm font-semibold text-white">{{ feature.title }}</h2>
      <p class="mt-2 text-sm leading-6 text-slate-500">{{ feature.text }}</p>
    </article>
  </section>
</template>
