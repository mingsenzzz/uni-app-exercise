<template>
  <view class="homePageContent">
    <NavBar :navBarType="currentActiveTab" />
    <!-- 主页 -->
    <HomePage v-show="currentActiveTab == 0" />

    <!-- 购物车页面 -->
    <CartPage
      :currentActiveTab="currentActiveTab"
      v-show="currentActiveTab == 1"
    />

    <!-- 个人中心 -->
    <PersonalCenter v-show="currentActiveTab == 2" />

    <FooterBar :onSwitchTabbar="onSwitchTabbar" />
  </view>
</template>

<script>
import FooterBar from "../../common/footerBar";
import HomePage from "../homePage/index";
import PersonalCenter from "../personalCenter";
import CartPage from "../cart";
import NavBar from "../../common/navBar";
let that = void 0;
export default {
  name: "parent",
  data() {
    return {
      title: "Hello111",
      currentActiveTab: 2,
    };
  },
  components: {
    FooterBar,
    HomePage,
    CartPage,
    NavBar,
    PersonalCenter,
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
  computed: {},
};
</script>

<style lang='scss'>
.homePageContent {
  display: flex;
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
