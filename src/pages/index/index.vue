<template>
  <view class="homePageWrap">
    <view class="homePageContent">
      <u-tabbar
        v-model="current"
        :list="tabBarList"
        active-color="rgb(254, 104, 105)"
        icon-size="40"
      />
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
      current: 0,
      tabBarList: [
        {
          iconPath: "shouye1",
          selectedIconPath: "shouye3",
          text: "首页",
          count: 2,
          isDot: true,
          customIcon: true,
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
