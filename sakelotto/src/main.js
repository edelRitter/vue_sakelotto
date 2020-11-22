import Vue from 'vue'
import App from './App.vue'
import VueSocialSharing from 'vue-social-sharing'
import Multiselect from 'vue-multiselect'

Vue.config.productionTip = false
Vue.use(VueSocialSharing);

Vue.component('multiselect', Multiselect)

new Vue({
  render: h => h(App),
}).$mount('#app')