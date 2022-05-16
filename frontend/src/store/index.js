import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    isAuthenticated: false,
    token: '',
  },
  getters: {
  },
  mutations: {
    login(state, token){
          state.isAuthenticated = true
          state.token = token
          localStorage.setItem("token", token)
          axios.defaults.headers.common['Authorization'] = "Token " + token

    },
    logout(state){
          state.isAuthenticated = false
          state.token = ""
          localStorage.removeItem("token")
          axios.defaults.headers.common['Authorization'] = ""

    },
  },
  actions: {
  },
  modules: {
  }
})
