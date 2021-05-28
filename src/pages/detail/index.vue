<template>
  <view class="content">
    <view>
      <u-navbar back-text="返回" title="剑未配妥"></u-navbar>
      <view class="content"> 详情 </view>
    </view>
    detail
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {
    const eventChannel = this.getOpenerEventChannel();
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on("acceptDataFromOpenerPage", function (data) {
      //从 跳过来的界面，拿到传过来的数据
      console.log(data, "data");
    });
  },
  methods: {},
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
