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
      
      /*
      check if token exists in local storage then send get request to validate the
      user with corresponding token if user exists ,login user again
      else if corresponding token is invalid logout the user 
      */
      onStart(context) {
        let token = localStorage.getItem('token')
        if (token){
           axios.defaults.headers.common['Authorization'] = "Token " + token

          axios
                .get('/api/auth/users/me/')
                .then(response =>  {
                      context.commit('login', token)

                })
                .catch(error => {
                   context.commit('logout')

                })

        } 
      },
  },
  modules: {
  }
})
