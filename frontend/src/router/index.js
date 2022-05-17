import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'

import StudentsView from '../views/StudentsView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: { loginRedirect : true},
  },
  {
    path: '/logout',
    name: 'Logout',
    component: LogoutView,
    meta : { loginRequired: true }
  },
  {
    path: '/students',
    name: 'StudentsView',
    component: StudentsView,
    meta : { loginRequired: true },
    
  },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// global route guard

router.beforeEach((to, from, next) => {
  console.log("Global Guard")
  if (!store.state.isAuthenticated && to.meta.loginRequired){
    next({ name: "Login" })
  } else if (store.state.isAuthenticated && to.meta.loginRedirect) {
    next({name: "home"})
  } else {
    next()  
  } 
  
})

export default router
