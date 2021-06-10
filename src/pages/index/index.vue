<template>
  <view class="homePageWrap">
    <view class="homePageContent">
      <!-- 主页 -->
      <HomePage v-show="currentActiveTab == 0" />

      <FooterBar :onSwitchTabbar="onSwitchTabbar" />
    </view>
  </view>
</template>

<script>
import FooterBar from "../../common/footerBar";
import HomePage from "../homePage/index";
let that = void 0;
export default {
  name: "parent",
  data() {
    return {
      title: "Hello111",
      currentActiveTab: 0,
    };
  },
  components: {
    FooterBar,
    HomePage,
  },
  onLoad() {
    // this.test();
  },
  mounted() {
    that = this;
  },
  methods: {
    test() {
      this.$u.request.getUserInfo().then((res) => {
        console.log(res, "res");
      });
    },
    onSwitchTabbar(key) {
      that.currentActiveTab = key;
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
