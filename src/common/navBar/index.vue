<template>
  <u-navbar
    :back-text="navBarConfig.backText"
    :title="navBarConfig.title"
    :is-back="navBarConfig.isBack"
    v-show="navBarConfig.showNavBar"
  ></u-navbar>
</template>

<script>
import BarTypeConfig from "./barTypeConfig";
export default {
  data() {
    return {};
  },
  props: {
    navBarType: Number,
  },
  computed: {
    navBarConfig() {
      const { navBarType } = this;
      return BarTypeConfig[navBarType];
    },
  },
};
</script>

<style lang='scss'>
.navbarWrap {
  height: 100rpx;
}
</style>