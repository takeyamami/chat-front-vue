import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import Chat from '@/components/Chat'
import Login from '@/components/Login'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/',  component: Chat },
  { path: '/:id',  component: Chat },
  { path: '/login', component: Login }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

new Vue({
  vuetify,
  render: h => h(App),
  router: router
}).$mount('#app')
