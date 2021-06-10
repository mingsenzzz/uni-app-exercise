<template>
  <view class="footerBar">
    <u-tabbar
      v-model="currentActiveTab"
      :list="tabBarList"
      @change="switchTabbar"
      active-color="rgb(254, 104, 105)"
      icon-size="40"
    />
  </view>
</template>

<script>
import { mapState } from "vuex";
//tabbar无法使用navigator的方式切换tabbar
export default {
  name: "children",
  data() {
    return {
      title: "Hello",
      currentActiveTab: 0,
    };
  },
  props: {
    onSwitchTabbar: Function,
  },

  methods: {
    switchTabbar(key) {
      this.onSwitchTabbar(key);
    },
  },

  computed: {
    ...mapState({
      tabBarList(state) {
        //饮料选中的个数，需要从store中的购物车中取，这样如果购物车发生改变，则菜单选中的个数也会同时更新
        const count = state.cart.addedProducts.length;
        return [
          {
            iconPath: "home",
            selectedIconPath: "home-fill",
            text: "首页",
            count: 2,
            isDot: true,
            // customIcon: true,
          },
          {
            iconPath: "shiwu-",
            selectedIconPath: "yinliao2",
            text: "饮料",
            count,
            customIcon: true,
          },
          {
            iconPath: "caidaniconwodehui",
            selectedIconPath: "account1",
            text: "账户",
            customIcon: true,
          },
        ];
      },
    }),
  },
};
</script>

<style lang='scss'>
.footerBar {
  height: 200rpx;
}
</style>
