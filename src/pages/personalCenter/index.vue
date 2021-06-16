<template>
  <scroll-view class="personalCenterWrap">
    <view class="header-top">
      <view class="avatarAndName">
        <u-avatar :src="src" mode="square"></u-avatar>
        <text class="name"> EwH751125438 </text>
      </view>
      <u-icon name="kefu-ermai"></u-icon>
    </view>
    <view class="header-bottom">
      <view class="authority" v-for="(item, index) in authorities" :key="index">
        <view class="count">{{ item.count }}</view>
        <view class="text">{{ item.text }}</view>
      </view>
    </view>
    <FlexLineWithIcon :itemsData="itemsData" />
  </scroll-view>
</template>

<script>
import FlexLineWithIcon from "../../common/flexLineWithIcon";
export default {
  data() {
    return {
      src: "https://pic2.zhimg.com/50/0ce0bf71d14fceafb37ddcaf275e4652_720w.png?source=54b3c3a5",
      authorities: [
        {
          count: 0.0,
          text: "余额（元）",
        },
        {
          count: 0,
          text: "永辉卡（张）",
        },
        {
          count: 5,
          text: "红包礼券",
        },
        {
          count: 0,
          text: "积分商城",
        },
      ],
      itemsData: [
        {
          icon: "daizhifu-",
          text: "待支付",
        },
        {
          icon: "daishouhuo",
          text: "待收货",
        },
        {
          icon: "daipingjia",
          text: "待评价",
        },
        {
          icon: "tuikuan",
          text: "退款/售后",
        },
        {
          icon: "quanbudingdan",
          text: "全部订单",
        },
      ],
    };
  },
  onLoad() {},
  components: {
    FlexLineWithIcon,
  },
  methods: {},
};
</script>

<style lang="scss">
.personalCenterWrap {
  height: 100vh;
  background-color: #eff2f5;
  padding-top: 160rpx;
  width: 750rpx;
  box-sizing: border-box;
  .header-top {
    display: flex;
    background: #ffe2e7a8;
    padding: 24rpx 24rpx 12rpx;
    justify-content: space-between;
    .avatarAndName {
      display: flex;
      align-items: center;
      .name {
        margin-left: 16rpx;
      }
    }
  }
  .header-bottom {
    display: flex;
    justify-content: space-between;
    background: #ffe2e7a8;
    padding: 12rpx 24rpx 24rpx;
    border-radius: 0 0 30rpx 30rpx;
    .authority {
      text-align: center;
    }
    .text {
      color: #9e9e9ee6;
      font-size: 24rpx;
      margin-top: 8rpx;
    }
  }
}
</style>
