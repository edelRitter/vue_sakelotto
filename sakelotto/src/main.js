import Vue from 'vue'
import App from './App.vue'
import VueSocialSharing from 'vue-social-sharing'
import Multiselect from 'vue-multiselect'
import VueAnalytics from 'vue-analytics'
import VueAdsense from 'vue-adsense';

Vue.config.productionTip = false

Vue.use(VueSocialSharing);

// Google Adsense 用
Vue.component('adsense', VueAdsense);
// Google Analytics 用
Vue.use(VueAnalytics, {
  id: 'G-KH9VX4GVFJ'
});

Vue.component('multiselect', Multiselect)

new Vue({
  render: h => h(App),
}).$mount('#app')
