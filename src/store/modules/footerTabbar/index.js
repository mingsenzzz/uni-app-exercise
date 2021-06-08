const state = {
  tabBarList: [
    {
      iconPath: "home",
      selectedIconPath: "home-fill",
      text: "首页",
      count: 2,
      isDot: true,
      // customIcon: true,
    },
    {
      iconPath: "shiwu-",
      selectedIconPath: "yinliao2",
      text: "饮料",
      count: 0,
      customIcon: true,
    },
    {
      iconPath: "caidaniconwodehui",
      selectedIconPath: "account1",
      text: "账户",
      customIcon: true,
    },
  ],
};

const mutations = {
  changeTabBarMutation(state, data) {
    console.log(data, "data");
  },
};

const actions = {
  changeTabBarAction({ commit, state }, data) {
    commit(changeTabBarMutation, data);
  },
};
