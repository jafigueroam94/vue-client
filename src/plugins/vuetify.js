import Vue from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa'
  },
  theme: {
    themes: {
      dark: {
        primary: '#ed544d',
        secondary: '#424242',
        accent: '#f7be3e',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    },
    dark: true
  }
})
