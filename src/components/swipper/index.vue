<template>
  <view class="swripperWrap">
    <u-swiper
      :list="imgsList"
      autoplay
      circular
      class="swiper"
      height="250"
    ></u-swiper>
  </view>
</template>

<script>
export default {
  name: "swapper",
  data() {
    return {
      imgsList: [],
    };
  },
  onReady() {
    this.getSwapperImgsList();
  },
  methods: {
    getSwapperImgsList() {
      setTimeout(() => {
        this.imgsList = [
          {
            image: "https://cdn.uviewui.com/uview/swiper/1.jpg",
            title: "昨夜星辰昨夜风，画楼西畔桂堂东",
          },
          {
            image: "https://cdn.uviewui.com/uview/swiper/2.jpg",
            title: "身无彩凤双飞翼，心有灵犀一点通",
          },
          {
            image: "https://cdn.uviewui.com/uview/swiper/3.jpg",
            title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
          },
        ];
      }, 200);
    },
  },
  watch: {
    imgsList(v) {
      console.log(v, "v");
    },
  },
};
</script>

<style lang='scss'>
.swripperWrap {
  width: 100vw;
  height: 250rpx;
  .swiper {
    height: 250rpx;
  }
}
</style>
