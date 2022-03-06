import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ProjectList from '../views/ProjectList.vue'
import SkillList from '../views/SkillList.vue'
import StageList from '../views/StageList.vue'

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
  },
  {
    path: '/stage',
    name: 'StageList',
    component: StageList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
