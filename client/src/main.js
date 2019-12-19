import Vue from 'vue';
import vSelect from 'vue-select'
import App from './App.vue';
import router from './router';
import 'vue-select/dist/vue-select.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bulma/css/bulma.css';

Vue.config.productionTip = false;
Vue.component('v-select', vSelect)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
