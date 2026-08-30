import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'

const storageKey = 'orbit-workspace-tasks'
const starterTasks = [
  { id: 1, title: 'Polish the onboarding flow', project: 'Product', priority: 'High', complete: false, due: 'Today', initials: 'AR', color: 'bg-violet-500' },
  { id: 2, title: 'Review launch metrics', project: 'Growth', priority: 'Medium', complete: false, due: 'Tomorrow', initials: 'KM', color: 'bg-sky-500' },
  { id: 3, title: 'Share the weekly product update', project: 'Product', priority: 'Low', complete: true, due: 'Done', initials: 'AR', color: 'bg-violet-500' },
  { id: 4, title: 'Prepare the customer interview guide', project: 'Research', priority: 'High', complete: false, due: 'Thu', initials: 'JN', color: 'bg-emerald-500' },
]

function getInitialTasks() {
  try {
    const stored = localStorage.getItem(storageKey)
    return stored ? JSON.parse(stored) : starterTasks
  } catch {
    return starterTasks
  }
}

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref(getInitialTasks())
  const activeFilter = ref('All')

  const filters = ['All', 'Product', 'Growth', 'Research', 'Completed']
  const completedCount = computed(() => tasks.value.filter((task) => task.complete).length)
  const openCount = computed(() => tasks.value.length - completedCount.value)
  const completionRate = computed(() => tasks.value.length ? Math.round((completedCount.value / tasks.value.length) * 100) : 0)
  const visibleTasks = computed(() => {
    if (activeFilter.value === 'All') return tasks.value
    if (activeFilter.value === 'Completed') return tasks.value.filter((task) => task.complete)
    return tasks.value.filter((task) => task.project === activeFilter.value)
  })

  function toggleTask(id) {
    const task = tasks.value.find((item) => item.id === id)
    if (task) task.complete = !task.complete
  }

  function addTask({ title, project, priority }) {
    const normalizedTitle = title?.trim()
    if (!normalizedTitle) return false

    tasks.value.unshift({
      id: Date.now(),
      title: normalizedTitle,
      project: project || 'Product',
      priority: priority || 'Medium',
      complete: false,
      due: 'This week',
      initials: 'YO',
      color: 'bg-orange-400',
    })
    return true
  }

  watch(tasks, (value) => {
    localStorage.setItem(storageKey, JSON.stringify(value))
  }, { deep: true })

  return {
    tasks,
    activeFilter,
    filters,
    completedCount,
    openCount,
    completionRate,
    visibleTasks,
    toggleTask,
    addTask,
  }
})
