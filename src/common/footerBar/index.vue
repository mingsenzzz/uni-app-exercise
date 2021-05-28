<template>
  <view class="footerBar">
    <u-tabbar
      v-model="current"
      :list="tabBarList"
      active-color="rgb(254, 104, 105)"
      icon-size="40"
    />
  </view>
</template>

<script>
//tabbar无法使用navigator的方式切换tabbar
export default {
  data() {
    return {
      title: "Hello",
      current: 0,
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
          count: 2,
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
  },
  methods: {},
};
</script>

<style lang='scss'>
.footerBar {
  height: 200rpx;
}
</style>
