<script setup>
import { computed, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)
const navigation = [
  { label: 'Overview', to: '/' },
  { label: 'Workspace', to: '/workspace' },
  { label: 'Connection', to: '/connection' },
]

const pageLabel = computed(() => route.meta.label ?? 'Orbit')

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <div class="min-h-screen overflow-x-hidden bg-[#0d1020] text-slate-100">
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div class="absolute -left-40 top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-violet-600/20 blur-[120px]" />
      <div class="absolute -right-52 top-48 h-[30rem] w-[30rem] rounded-full bg-sky-500/15 blur-[120px]" />
    </div>

    <header class="sticky top-0 z-30 border-b border-white/8 bg-[#0d1020]/75 backdrop-blur-xl">
      <div class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <RouterLink class="group flex items-center gap-3" to="/" @click="closeMenu">
          <span class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-400 to-sky-400 shadow-lg shadow-violet-500/20 transition group-hover:scale-105">
            <svg class="h-5 w-5 text-[#101426]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" aria-hidden="true">
              <path d="m7.4 12.8 3 3 6.8-7.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20 12a8 8 0 1 1-3-6.2" stroke-linecap="round" />
            </svg>
          </span>
          <span class="font-display text-lg font-semibold tracking-tight text-white">orbit</span>
        </RouterLink>

        <nav class="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          <RouterLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-400 transition hover:text-white"
            active-class="bg-white/8 text-white"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <div class="flex items-center gap-3">
          <span class="hidden text-sm text-slate-500 sm:inline">{{ pageLabel }}</span>
          <RouterLink to="/workspace" class="hidden rounded-lg bg-white px-3.5 py-2 text-sm font-semibold text-[#101426] transition hover:bg-violet-100 sm:inline-flex">
            Open workspace
          </RouterLink>
          <button class="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-300 md:hidden" type="button" aria-label="Toggle menu" @click="menuOpen = !menuOpen">
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
            </svg>
          </button>
        </div>
      </div>
      <nav v-if="menuOpen" class="border-t border-white/8 px-5 py-3 md:hidden" aria-label="Mobile navigation">
        <RouterLink v-for="item in navigation" :key="item.to" :to="item.to" class="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300" active-class="bg-white/8 text-white" @click="closeMenu">
          {{ item.label }}
        </RouterLink>
      </nav>
    </header>

    <main class="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <RouterView />
    </main>

    <footer class="mx-auto flex max-w-7xl items-center justify-between border-t border-white/8 px-5 py-7 text-xs text-slate-500 sm:px-8">
      <span>Built with Vue + Supabase</span>
      <span>Made for focused work.</span>
    </footer>
  </div>
</template>
