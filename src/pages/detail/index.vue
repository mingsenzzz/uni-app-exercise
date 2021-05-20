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
  onLoad() {},
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
