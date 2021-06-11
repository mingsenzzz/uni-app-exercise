const mutations = {
  addOrSubProductToCartMutation(state, { product, isAdd }) {
    //先判断是新增，还是只加数量
    const isHas = state.addedProducts.findIndex((item) => {
      return item.id == product.id;
    });
    if (isHas > -1) {
      //数量加一 或者减 一
      product = {
        ...product,
        count: isAdd ? product.count + 1 : product.count - 1,
      };
      state.addedProducts.splice(isHas, 1, product);
    } else {
      //购物车加1
      state.addedProducts.unshift(product);
    }
  },
  updateSelectedMapMutation(state, { key, value }) {
    //如果对对象操作，最好赋值新的，因为如果是新增属性的话，则无法监听到变化
    state.selectedProductsMap = {
      ...state.selectedProductsMap,
      key: value,
    };
  },
};

export default mutations;
