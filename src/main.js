import Vue from "vue";

import './styles/main.scss';
import InfiniteLoading from 'vue-infinite-loading';
import store from "./store";

import App from "./App.vue";


Vue.use(InfiniteLoading, {});

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
