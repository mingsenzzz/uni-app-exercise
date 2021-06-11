<template>
  <view class="oneProductWrap">
    <u-checkbox class="checkBox" wrap="true">
      <view class="cheboxLabel">
        <image :src="product.icon" class="image" />
        <view class="productInfo">
          <view class="left">
            <view class="nameAndKg">
              <view class="name">{{ product.name }}</view>
              <view class="kg">50g</view>
            </view>
            <view class="price"
              ><view class="number">￥12.9</view
              ><view class="bag">/袋子</view></view
            >
          </view>
          <view class="right">
            <ProductNumberController
              :productId="product.id"
              :count="product.count"
              :product="product"
            />
          </view>
        </view>
      </view>
    </u-checkbox>
  </view>
</template>

<script>
import ProductNumberController from "../productNumberController";
export default {
  data() {
    return {};
  },
  components: {
    ProductNumberController,
  },
  props: {
    product: Object,
  },
};
</script>

<style lang='scss'>
.oneProductWrap {
  background-color: #fff;
  border-radius: 10rpx;
  padding: 20rpx;
  margin-bottom: 20rpx;
  .checkBox {
    display: flex;
  }
  .cheboxLabel {
    width: 600rpx;
    display: flex;
  }
  .productInfo {
    display: flex;
    justify-content: space-between;
    width: 400rpx;
    margin-left: 30rpx;
    .left {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
    }
    .right {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 8rpx 0;
    }
    .price {
      display: flex;
      color: #9e9e9ee3;
      .number {
        font-size: 34rpx;
        color: rgb(254, 104, 105);
      }
      .bag {
        line-height: 66rpx;
        margin-left: 10rpx;
      }
    }
    .nameAndKg {
      .name {
        color: #333;
      }
      .kg {
        color: #9e9e9ee3;
        font-size: 26rpx;
      }
    }
  }
  .image {
    width: 170rpx;
    height: 170rpx;
    margin: 20rpx 10rpx 0 20rpx;
  }
}
</style>