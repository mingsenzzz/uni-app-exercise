<template>
  <scroll-view class="cartComWrap">
    <scroll-view class="cartWrap">
      <!-- <view class="deleteProduct"> 删除 </view> -->
      <view class="products">
        <u-checkbox-group label-disabled="true">
          <OneProduct
            v-for="product in productsData"
            :product="product"
            :key="product.id"
          />
        </u-checkbox-group>
      </view>
    </scroll-view>
    <view class="cartOperationsWrap" v-if="currentActiveTab == 1">
      <CartOperations :productsData="productsData" />
    </view>
  </scroll-view>
</template>

<script>
import OneProduct from "../../components/oneProduct";
import CartOperations from "../../components/cartOperations";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: { OneProduct, CartOperations },
  methods: {},
  props: {
    currentActiveTab: Number,
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
.cartComWrap {
  position: relative;
  padding-top: 140rpx;
}
.cartWrap {
  background-color: #eff2f5;
  padding: 24rpx;
  width: 750rpx;
  height: 100vh;
  box-sizing: border-box;
}
.cartOperationsWrap {
  position: fixed;
  bottom: 48px;
  width: 100%;
  border-bottom: 2rpx solid #f0f0f0;
  background-color: #fff;
}
</style>