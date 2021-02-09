import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'To-Do',
    component: () => import('../views/ToDoList.vue')
  },
  {
    path: '/add-list',
    name: 'AddList',
    component: () => import('../views/AddList.vue')
  },
  {
    path: '/edit/:id',
    name: 'EditItem',
    component: () => import('../views/EditItem.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
