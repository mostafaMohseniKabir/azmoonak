import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify)

export default new Vuetify({
  rtl: true,
  icons: {
    iconfont: 'mdi',
  },
})
