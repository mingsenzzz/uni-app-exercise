<template>
  <view class="productNumberController">
    <view class="box" @click="decreaseProduct">-</view>
    <input class="box input" :value="count" disabled="true" type="number" />
    <view class="box" @click="increaseProduct">+</view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    count: Number,
    id: Number,
  },
  methods: {
    increaseProduct() {},
    decreaseProduct() {},
  },
};
</script>

<style lang='scss'>
.productNumberController {
  display: flex;
  .box {
    width: 40rpx;
    height: 40rpx;
    box-sizing: content-box;
    font-size: 34rpx;
    background-color: #fff;
    text-align: center;
    line-height: 40rpx;
    border: 2rpx solid rgba(238, 238, 238, 0.616);
  }
  .input {
    min-height: 36rpx;
    max-width: 50rpx;
  }
}
</style>