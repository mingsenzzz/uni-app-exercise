const actions = {
  addOrSubProductToCartAction({ commit, state }, { product, isAdd }) {
    commit("addOrSubProductToCartMutation", { product, isAdd });
  },
  updateSelectedMapAction({ commit, state }, data) {
    commit("updateSelectedMapMutation", data);
  },
};

export default actions;
