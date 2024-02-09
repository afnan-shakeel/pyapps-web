import { createRouter, createWebHistory } from 'vue-router'
import LoginVue from './pages/Login.vue'
import LoginLayoutVue from './layouts/LoginLayout.vue'
import SessionLayoutVue from './layouts/SessionLayout.vue'
import DashboardVue from './pages/Dashboard.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: LoginVue,
      meta: { layout: LoginLayoutVue }
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: DashboardVue,
      meta: { layout: SessionLayoutVue }
    }


  ],
})