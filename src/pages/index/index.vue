<template>
  <view class="homePageWrap">
    <view class="homePageContent">
      <u-avatar
        class="userAvatar"
        size="large"
        :src="require('../../static/avatar.jpg')"
        @click="this.test"
      />
      <view class="userName">
        <text class="title">{{ title }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
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
