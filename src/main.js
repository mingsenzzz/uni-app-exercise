import Vue from "vue";
import App from "./App";
import store from "./store";
import uView from "uview-ui";
import apis from "./request/index";
Vue.config.productionTip = false;

Vue.use(uView);
App.mpType = "app";

const app = new Vue({
  store,
  ...App,
});
Vue.use(apis, app);
app.$mount();
