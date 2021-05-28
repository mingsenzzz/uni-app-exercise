const baseUrl = "companymanager/companyh5";

export default (vm) => {
  let getUserInfo = (params = {}) =>
    vm.$u.post(`${baseUrl}/wechatbind`, params);
  return {
    getUserInfo,
  };
};
