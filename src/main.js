// modules
import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
// global css style
import './helper/style/reset.scss'
import './helper/style/global.scss'
import '../public/fontface.css'
// components
import App from './App.vue'
import routes from './routes'

Vue.config.productionTip = false
Vue.config.performance = process.env.NODE_ENV !== 'production'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
 })

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')