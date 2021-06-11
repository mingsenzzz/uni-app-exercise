const actions = {
  addOrSubProductToCartAction({ commit, state }, { product, isAdd }) {
    commit("addOrSubProductToCartMutation", { product, isAdd });
  },
};

export default actions;
