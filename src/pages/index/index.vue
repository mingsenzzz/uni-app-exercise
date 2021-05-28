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
  justify-content: center;
  text-align: center;
}
.homePageContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .userAvatar {
    text-align: center;
    margin-bottom: 36rpx;
  }
  .userName {
    font-size: 36rpx;
  }
}
</style>
