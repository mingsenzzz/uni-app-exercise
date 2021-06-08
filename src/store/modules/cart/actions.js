const actions = {
  addOneProductToCartAction({ commit, state }, data) {
    commit("addOneProductToCartMutation", data);
  },
};

export default actions;
