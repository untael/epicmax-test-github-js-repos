import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import TableList from '../components/Library/LibraryList.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'TableList',
    component: TableList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
