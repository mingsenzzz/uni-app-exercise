const mutations = {
  addOneProductToCartMutation(state, data) {
    state.addedProducts = [...state.addedProducts, data];
  },
};

export default mutations;
