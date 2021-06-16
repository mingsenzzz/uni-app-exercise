<template>
  <view class="customizePopup">
    <view class="title">
      <view class="title1">合并明细</view>
      <view class="title2">实际金额以提交订单页金额为准</view>
    </view>
    <view class="content">
      <view class="eachItem" v-for="(item, index) in moneyItems" :key="index">
        <view>
          {{ item.text }}
          <text class="tag" v-show="item.tag">{{ item.tag }}</text>
          <view class="tip">{{ item.tip }}</view>
        </view>
        <view>￥{{ item.money }}</view>
      </view>
    </view>
    <view class="footer">
      <view> 合计 </view>
      <view class="allMoney"> ￥128 </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      moneyItems: [
        {
          text: "商品金额",
          money: 148,
        },
        {
          text: "配送费",
          tag: "首单免基础配送费",
          money: 0,
          originMoney: 5,
        },
        {
          text: "优惠券",
          tip: "商品优惠券：-￥20",
          money: 20,
          isDecrease: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.customizePopup {
  border-bottom: 2rpx solid #f0f0f0;
  .title {
    border-bottom: 2rpx solid #f0f0f0;
    padding: 16rpx 0;
    .title1 {
      color: #333;
      padding-bottom: 9rpx;
    }
    .title2 {
      color: #9e9e9ede;
      font-size: 24rpx;
    }
  }
  .content {
    padding: 20rpx 16rpx;
    .eachItem {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10rpx;
      text-align: left;
      .tag {
        border: 1px solid #9e9e9ee3;
        color: #9e9e9ee3;
        font-size: 22rpx;
        padding: 2rpx 8rpx;
        border-radius: 6rpx;
        margin-left: 12rpx;
      }
      .tip {
        color: #9e9e9ee3;
        font-size: 22rpx;
        padding: 2rpx 8rpx;
        margin-top: 8rpx;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    height: 100rpx;
    padding: 0 16rpx;
    line-height: 100rpx;
    border-top: 2rpx solid #f0f0f0;
    .allMoney {
      color: #f50;
    }
  }
}
</style>