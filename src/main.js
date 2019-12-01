import Vue from 'vue'
import App from './App.vue'
import VueGoogleCharts from 'vue-google-charts'
import StackModal from '@innologica/vue-stackable-modal'

Vue.use(StackModal);
Vue.use(VueGoogleCharts);

export const eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
