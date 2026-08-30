<script setup>
import { computed, reactive, ref } from 'vue'
import { useTasksStore } from '../stores/tasks'

const store = useTasksStore()
const formVisible = ref(false)
const newTask = reactive({ title: '', project: 'Product', priority: 'Medium' })

const priorityStyle = {
  High: 'bg-rose-400/10 text-rose-300 ring-rose-400/20',
  Medium: 'bg-amber-400/10 text-amber-200 ring-amber-400/20',
  Low: 'bg-sky-400/10 text-sky-200 ring-sky-400/20',
}

const completionCopy = computed(() => store.completionRate >= 60 ? 'Strong momentum. Keep it going.' : 'A few focused wins will move the needle.')

function submitTask() {
  if (store.addTask(newTask)) {
    newTask.title = ''
    newTask.project = 'Product'
    newTask.priority = 'Medium'
    formVisible.value = false
  }
}
</script>

<template>
  <section class="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
    <div>
      <p class="text-sm font-medium text-violet-300">Monday, September 24</p>
      <h1 class="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Your workspace</h1>
      <p class="mt-2 text-sm text-slate-500">Small steps, visible momentum.</p>
    </div>
    <button class="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-400 px-4 py-2.5 text-sm font-semibold text-violet-950 transition hover:-translate-y-0.5 hover:bg-violet-300" type="button" @click="formVisible = !formVisible">
      <span class="text-lg leading-none">+</span>{{ formVisible ? 'Close form' : 'New task' }}
    </button>
  </section>

  <form v-if="formVisible" class="mb-6 grid gap-3 rounded-2xl border border-violet-300/15 bg-violet-400/[0.06] p-4 sm:grid-cols-[1fr_140px_130px_auto]" @submit.prevent="submitTask">
    <label class="sr-only" for="task-title">Task title</label>
    <input id="task-title" v-model="newTask.title" class="min-w-0 rounded-lg border border-white/10 bg-[#11152a] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-600 focus:border-violet-300/60" placeholder="What needs to happen?" autofocus />
    <select v-model="newTask.project" class="rounded-lg border border-white/10 bg-[#11152a] px-3 py-2.5 text-sm text-slate-300 outline-none focus:border-violet-300/60">
      <option>Product</option><option>Growth</option><option>Research</option>
    </select>
    <select v-model="newTask.priority" class="rounded-lg border border-white/10 bg-[#11152a] px-3 py-2.5 text-sm text-slate-300 outline-none focus:border-violet-300/60">
      <option>High</option><option>Medium</option><option>Low</option>
    </select>
    <button class="rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#111426] hover:bg-violet-100" type="submit">Add</button>
  </form>

  <section class="grid gap-4 md:grid-cols-3">
    <article class="rounded-2xl border border-white/8 bg-white/[0.035] p-5">
      <div class="flex items-center justify-between"><span class="text-sm text-slate-400">Open tasks</span><span class="grid h-8 w-8 place-items-center rounded-lg bg-sky-400/10 text-sky-300">↗</span></div>
      <p class="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white">{{ store.openCount }}</p>
      <p class="mt-2 text-xs text-slate-500">Across 3 active projects</p>
    </article>
    <article class="rounded-2xl border border-white/8 bg-white/[0.035] p-5">
      <div class="flex items-center justify-between"><span class="text-sm text-slate-400">Completed</span><span class="grid h-8 w-8 place-items-center rounded-lg bg-emerald-400/10 text-emerald-300">✓</span></div>
      <p class="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white">{{ store.completedCount }}</p>
      <p class="mt-2 text-xs text-slate-500">Finished at your own pace</p>
    </article>
    <article class="relative overflow-hidden rounded-2xl border border-violet-300/12 bg-gradient-to-br from-violet-500/20 to-sky-500/10 p-5">
      <div class="flex items-center justify-between"><span class="text-sm text-violet-100">Completion</span><span class="text-sm font-medium text-violet-200">{{ store.completionRate }}%</span></div>
      <div class="mt-6 h-2 overflow-hidden rounded-full bg-black/15"><div class="h-full rounded-full bg-gradient-to-r from-violet-300 to-sky-300 transition-all duration-500" :style="{ width: `${store.completionRate}%` }" /></div>
      <p class="mt-3 text-xs text-violet-100/65">{{ completionCopy }}</p>
    </article>
  </section>

  <section class="mt-8 rounded-2xl border border-white/8 bg-[#12162b]/70 p-4 shadow-2xl shadow-black/10 sm:p-6">
    <div class="flex flex-col gap-4 border-b border-white/8 pb-5 sm:flex-row sm:items-center sm:justify-between">
      <div><h2 class="font-display text-xl font-semibold tracking-tight text-white">Tasks</h2><p class="mt-1 text-sm text-slate-500">Click a circle to mark a task complete.</p></div>
      <div class="flex max-w-full gap-2 overflow-x-auto pb-1">
        <button v-for="filter in store.filters" :key="filter" class="shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium transition" :class="store.activeFilter === filter ? 'bg-white text-[#111426]' : 'bg-white/5 text-slate-400 hover:text-white'" type="button" @click="store.activeFilter = filter">{{ filter }}</button>
      </div>
    </div>

    <div class="mt-3 divide-y divide-white/7">
      <article v-for="task in store.visibleTasks" :key="task.id" class="group flex items-center gap-3 py-4 first:pt-2">
        <button class="grid h-5 w-5 shrink-0 place-items-center rounded-full border transition" :class="task.complete ? 'border-emerald-400 bg-emerald-400 text-emerald-950' : 'border-slate-600 hover:border-violet-300'" type="button" :aria-label="`Mark ${task.title} ${task.complete ? 'incomplete' : 'complete'}`" @click="store.toggleTask(task.id)">
          <svg v-if="task.complete" class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="m5 12 4 4L19 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </button>
        <div class="min-w-0 flex-1"><h3 class="truncate text-sm font-medium transition" :class="task.complete ? 'text-slate-600 line-through' : 'text-slate-200 group-hover:text-white'">{{ task.title }}</h3><p class="mt-1 text-xs text-slate-500">{{ task.project }} · {{ task.due }}</p></div>
        <span class="hidden rounded-md px-2 py-1 text-[11px] font-medium ring-1 sm:block" :class="priorityStyle[task.priority]">{{ task.priority }}</span>
        <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full text-[9px] font-bold text-white" :class="task.color">{{ task.initials }}</span>
      </article>
      <p v-if="!store.visibleTasks.length" class="py-10 text-center text-sm text-slate-500">Nothing here yet. Add a task or choose another view.</p>
    </div>
  </section>
</template>
