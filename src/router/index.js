import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import AddReport from '../views/AddReport.vue'
import ListReports from '../views/ListReports.vue'

const routes = [
  {
    path: '/',
    component: LoginView
  },
  {
    path: '/register',
    component: RegisterView,
  },
  {
    path: '/add_report',
    component: AddReport
  },
  {
    path: '/list_reports',
    component: ListReports
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
