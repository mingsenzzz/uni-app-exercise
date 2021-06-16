<template>
  <view class="cartOperationsContainer">
    <CustomizePopup v-show="selectedProductsPopVisible" />
    <view class="cartOperationsWrap">
      <u-checkbox v-model="getProductsSelectedStatus">全选</u-checkbox>
      <view class="moneyAndBuyWrap">
        <view class="moneyAndText">
          <view class="top">
            <text class="count">已选2件，</text>
            <text class="text">合计：</text>
            <text class="money">￥666.22</text>
          </view>
          <view class="checkDetail" @click="changePopVisible"> 查看明细 ^</view>
        </view>
        <view class="buyBtn">结算</view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapState } from "vuex";
import CustomizePopup from "../customizePopup";
export default {
  data() {
    return {
      selectedProductsPopVisible: false,
    };
  },
  components: {
    CustomizePopup,
  },
  props: {
    productsData: Array,
  },
  methods: {
    changePopVisible() {
      this.selectedProductsPopVisible = !this.selectedProductsPopVisible;
    },
  },
  computed: {
    ...mapState({
      productsSelectedStatus(state) {
        const MAP = state.cart.selectedProductsMap;
        //判断是否购物车中的商品全都已经选中
        const r = this.productsData.every((item) => {
          return MAP[item.id] == true;
        });
        return r;
      },
    }),
    getProductsSelectedStatus: {
      get: function () {
        return this.productsSelectedStatus;
      },
      set: function (bol) {
        //直接将全选的状态赋值给每一项的选中状态
        const obj = {};
        this.productsData.forEach((item) => {
          obj[item.id] = bol;
        });
        this.$store.commit("updateSelectedMapMutation", obj);
      },
    },
  },
};
</script>

<style lang='scss'>
.cartOperationsWrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20rpx 16rpx;
  .moneyAndBuyWrap {
    display: flex;
    .moneyAndText {
      text-align: right;
      .count {
        color: #9e9e9ebf;
        font-size: 26rpx;
      }
      .text {
        font-size: 26rpx;
      }
      .money {
        color: #f50;
      }
    }
    .checkDetail {
      color: #f50;
      font-size: 26rpx;
      margin-top: 6rpx;
    }
  }
  .buyBtn {
    width: 176rpx;
    height: 70rpx;
    background-color: #f50;
    color: #fff;
    line-height: 70rpx;
    border-radius: 38rpx;
    margin-left: 24rpx;
  }
}
</style>