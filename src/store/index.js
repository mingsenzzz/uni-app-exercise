import Vue from "vue";
import Vuex from "vuex";
import cart from "./modules/cart/index";
import footerTabbar from "./modules/footerTabbar/index";
Vue.use(Vuex); //vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
  //各个模块
  modules: {
    cart,
    footerTabbar,
  },
});
export default store;
