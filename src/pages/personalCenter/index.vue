<template>
  <scroll-view class="personalCenterWrap">
    <view class="header">
      <view class="avatarAndName">
        <u-avatar :src="src" mode="square"></u-avatar>
        <text class="name"> EwH751125438 </text>
      </view>
      <u-icon name="kefu-ermai"></u-icon>
    </view>
  </scroll-view>
</template>

<script>
export default {
  data() {
    return {
      src: "https://pic2.zhimg.com/50/0ce0bf71d14fceafb37ddcaf275e4652_720w.png?source=54b3c3a5",
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style lang="scss">
.personalCenterWrap {
  height: 100vh;
  background-color: #eff2f5;
  padding: 24rpx;
  padding-top: 160rpx;
  width: 750rpx;
  box-sizing: border-box;
  .header {
    display: flex;
    background: #fff;
    padding: 24rpx;
    justify-content: space-between;
    .avatarAndName {
      display: flex;
      align-items: center;
      .name {
        margin-left: 16rpx;
      }
    }
  }
}
</style>
