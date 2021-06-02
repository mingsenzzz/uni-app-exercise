<template>
  <view class="homePageWrap">
    <view class="homePageContent">
      <Swapper />
      <FoodClassification />
      <FooterBar />
    </view>
  </view>
</template>

<script>
import Swapper from "../../components/swipper";
import FoodClassification from "../../components/foodClassification";
import FooterBar from "../../common/footerBar";
export default {
  data() {
    return {
      title: "Hello",
      current: 0,
    };
  },
  components: {
    Swapper,
    FoodClassification,
    FooterBar,
  },
  onLoad() {
    this.test();
  },
  methods: {
    test() {
      this.$u.request.getUserInfo().then((res) => {
        console.log(res, "res");
      });
    },
  },
};
</script>

<style lang='scss'>
.homePageWrap {
  display: flex;
  text-align: center;
  padding-top: 50rpx;
  height: 100vh;
}
.homePageContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  .userAvatar {
    text-align: center;
    margin-bottom: 36rpx;
  }
  .userName {
    font-size: 36rpx;
  }
}
</style>
