import { createRouter, createWebHistory } from 'vue-router'
import ConnectionView from '../views/ConnectionView.vue'
import HomeView from '../views/HomeView.vue'
import WorkspaceView from '../views/WorkspaceView.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { label: 'Overview' } },
    { path: '/workspace', name: 'workspace', component: WorkspaceView, meta: { label: 'Workspace' } },
    { path: '/connection', name: 'connection', component: ConnectionView, meta: { label: 'Connection' } },
  ],
})

export default router
