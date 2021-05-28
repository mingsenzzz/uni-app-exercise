const baseUrl = "/food";

export default (vm) => {
  let getFoodDetail = (params = {}) =>
    vm.$u.get(`${baseUrl}/getFoodDetail`, params);
  return {
    getFoodDetail,
  };
};
