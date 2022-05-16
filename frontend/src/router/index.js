import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import store from '../store'


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
    meta: { loginRedirect : true },

  },
  {
    path: '/logout',
    name: 'Logout',
    component: LogoutView,
    meta : { loginRequired: true }
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


// route protecting

router.beforeEach((to, from) => {
  
  if (to.meta.loginRequired && !store.state.isAuthenticated) {
    
    return {
      path: '/login'
      // query: { redirect: to.fullPath },
    }
  } else if (to.meta.loginRedirect && store.state.isAuthenticated){
    return {
      path: '/'
    }
  }
})


export default router
