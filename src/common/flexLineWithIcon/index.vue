<template>
  <view class="flexLineWrap">
    <view class="flexItem" v-for="(item, index) in itemsData" :key="index">
      <u-icon
        :name="item.icon"
        custom-prefix="custom-icon"
        class="icon"
      ></u-icon>
      <view class="text">{{ item.text }}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    itemsData: Array,
  },
};
</script>

<style lang="scss">
.flexLineWrap {
  height: 146rpx;
  padding: 24rpx;
  background-color: #fff;
  border-radius: 16rpx;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  margin: 24rpx;
  .flexItem {
    .icon {
      font-size: 54rpx;
      margin-bottom: 6rpx;
      color: #333;
    }
    .text {
      font-size: 26rpx;
      color: #333333c4;
    }
  }
}
</style>