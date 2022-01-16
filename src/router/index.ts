import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ProjectList from '../views/ProjectList.vue'
import SkillList from '../views/SkillList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/project',
    name: 'ProjectList',
    component: ProjectList
  },
  {
    path: '/skill',
    name: 'SkillList',
    component: SkillList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
