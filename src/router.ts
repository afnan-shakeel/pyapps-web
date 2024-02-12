import { createRouter, createWebHistory } from 'vue-router'
import LoginVue from './pages/Login.vue'
import UserManagementVue from './pages/UserManagement.vue'
import DashboardVue from './pages/Dashboard.vue'

import LoginLayoutVue from './layouts/LoginLayout.vue'
import SessionLayoutVue from './layouts/SessionLayout.vue'

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
    },
    {
      name: 'User Management',
      path: '/user-management',
      component: UserManagementVue,
      meta: { layout: SessionLayoutVue }
    }


  ],
})