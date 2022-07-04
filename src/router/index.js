import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import LoginPage from '../views/LoginPage.vue'
import Todolist from '../views/Todolist.vue'
import Calendar from '../views/Calendar.vue'
import Projects from '../views/Projects.vue'
import Team from '../views/Team.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/test',
    name: 'Test',
    component: Test 
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/todo',
    name: 'TodoList',
    component: Todolist
  },
  {
    path: '/todo/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router