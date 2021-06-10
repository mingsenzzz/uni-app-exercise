<template>
  <view class="cartWrap">
    <view class="deleteProduct"> 删除 </view>
    <view class="products">
      <u-checkbox-group @change="onCheckboxChange">
        <OneProduct
          v-for="product in productsData"
          :product="product"
          :key="product.id"
        />
      </u-checkbox-group>
    </view>
  </view>
</template>

<script>
import OneProduct from "../../components/oneProduct";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: { OneProduct },
  methods: {
    onCheckboxChange(keys) {
      console.log(keys, "keys");
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
.cartWrap {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #eff2f5;
  padding: 24rpx;
  width: 750rpx;
}
</style>