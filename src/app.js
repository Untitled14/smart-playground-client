import 'element-ui/lib/theme-chalk/index.css'
import 'vuelayers/lib/style.css'
import '@src/styles/app.css'

import Vue from 'vue'
import VueLayers from 'vuelayers'
import ElementUi from 'element-ui'
import elementLocale from 'element-ui/lib/locale/lang/en';

import Router from '@src/scripts/router'
import PopUp from '@src/components/popup'
import App from '@src/App.vue'

Vue.use(ElementUi, { locale: elementLocale })
Vue.use(VueLayers, {
  dataProjection: 'EPSG:4326'
})
Vue.use(PopUp)


new Vue({
  el: '#app',
  template: '<app/>',
  components: { App },
  router: Router
})
