<template>
  <view class="commodityInfo">
    <NavBar :navBarType="4" />
    <view class="content">
      <!-- 图片区域 -->
      <view class="picIntro">
        <image class="pic" :src="commodityInfo.icon" mode="" />
        <view class="specialPrice">
          <view class="side">
            <view>60日低价优选</view>
            <view> ￥41 </view>
          </view>
          <view class="side">
            <view>限时抢购</view>
            <view>距结束 08:12:14</view>
          </view>
        </view>
      </view>

      <!-- 价格和名称介绍，以及购物车添加 -->
      <view class="priceAndNameIntro">
        <view class="title"> 星冰云&茶云纵享套餐 </view>
        <view class="shortIntro">
          比利时黑巧慕斯星冰乐（大杯）+百香果桃桃茶云（大杯）温馨提示：图片仅供参考
        </view>
        <view class="discount">
          5.19折
          <view class="line" />
          限10份
        </view>
        <view class="priceAndAddToCart">
          <view class="price"> ￥41 ￥79 </view>
          <u-button
            class="addToCart"
            size="mini"
            shape="circle"
            type="success"
            @click="addToCart"
            >+ 加入购物车</u-button
          >
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import "./index.scss";
import NavBar from "../../common/navBar";
export default {
  data() {
    return {
      title: "Hello",
      commodityInfo: {},
    };
  },
  components: {
    NavBar,
  },
  onLoad({ id }) {
    //两个页面之间的交互方式
    /**
     * 1.通过url传入query参数（从onload生命周期中的参数中获取）
     * 2.通过发布订阅的方式
     */
    // const eventChannel = this.getOpenerEventChannel();
    // // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    // eventChannel.on("acceptDataFromOpenerPage", function (data) {
    //   //从 跳过来的界面，拿到传过来的数据
    //   console.log(data, "data");
    // });
    this.$u.request.getFoodDetail({ id }).then((response) => {
      if (response.code == "200") {
        this.commodityInfo = response.data || {};
      }
    });
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addOneProductToCartAction", {
        icon: "www.baidu.com/s?wd=%E9%AB%98%E8%80%83&sa=ire_dl_gh_logo_texing&rsv_dl=igh_logo_pc",
        name: "柠檬水",
        id: 22222,
      });
    },
  },
};
</script>

<style lang='scss'>
</style>
