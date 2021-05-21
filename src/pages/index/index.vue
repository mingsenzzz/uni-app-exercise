<template>
  <view class="homePageWrap">
    <u-icon
      name="shouye2"
      custom-prefix="custom-icon"
      size="30"
      color="#888888"
    ></u-icon>
    <view class="homePageContent">
      <u-tabbar v-model="current" :list="tabBarList" />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
      tabBarList: [
        {
          iconPath: "shouye2",
          selectedIconPath: "home-fill",
          text: "首页",
          count: 2,
          isDot: true,
          customIcon: true,
        },
        {
          iconPath: "photo",
          selectedIconPath: "photo-fill",
          text: "放映厅",
          customIcon: false,
        },
      ],
    };
  },
  onLoad() {
    this.test();
  },
  methods: {
    jumpToDetail() {
      uni.navigateTo({
        url: "/pages/detail/index",
      });
    },
    test() {
      this.$u.request.getUserInfo().then((res) => {
        console.log(res, "res");
      });
    },
  },
};
</script>

<style lang='scss'>
.homePageWrap {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 50%;
}
.homePageContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .userAvatar {
    text-align: center;
    margin-bottom: 36rpx;
  }
  .userName {
    font-size: 36rpx;
  }
}
</style>
