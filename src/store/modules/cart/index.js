import actions from "./actions";
import mutations from "./mutations";
const state = {
  addedProducts: [
    {
      name: "吉得利花椒50g",
      icon: "https://cdn.uviewui.com/uview/common/classify/1/2.jpg",
      id: 21321321,
      count: 1,
    },
    {
      name: "花椒1kg",
      icon: "https://cdn.uviewui.com/uview/common/classify/1/2.jpg",
      id: 4234423321,
      count: 4,
    },
    {
      name: "富昌白胡椒粉 40g",
      icon: "https://cdn.uviewui.com/uview/common/classify/1/7.jpg",
      id: 32132111,
      count: 3,
    },
  ],
  selectedProductsMap: {},
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
