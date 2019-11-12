import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Project from '../views/Project.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/project/{slug}',
    name: 'project',
    component: Project
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
