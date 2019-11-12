import './scss/_bulma.scss'
import './scss/_helpers.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PrismicVue from 'prismic-vue'
import linkResolver from './link-resolver'

Vue.config.productionTip = false

Vue.use(PrismicVue, {
  endpoint: 'https://calecodes.prismic.io/api/v2',
  linkResolver
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
