<template>
  <view class="productNumberController">
    <view class="box" @click="changeProductCount(false)">-</view>
    <input class="box input" :value="count" disabled="true" type="number" />
    <view class="box" @click="changeProductCount(true)">+</view>
  </view>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  props: {
    count: Number,
    product: Object,
    productId: [Number, String],
  },
  methods: {
    changeProductCount(bol) {
      if (this.product.count === 0 && !bol) return;
      this.$store.dispatch("addOrSubProductToCartAction", {
        product: this.product,
        isAdd: bol,
      });
    },
  },
  computed: {
    ...mapState({
      productsData(state) {
        return state.cart.addedProducts;
      },
    }),
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