import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader version "^2.1.1" ,

Vue.use(Vuetify)
Vuetify.config.silent = true

export default ctx => {
  const vuetify = new Vuetify({
    theme: {
      dark: true // From 2.0 You have to select the theme dark or light here
    },
    icons: {
      iconfont: 
      'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
  })
 
  ctx.app.vuetify = vuetify
  ctx.$vuetify = vuetify.framework
}