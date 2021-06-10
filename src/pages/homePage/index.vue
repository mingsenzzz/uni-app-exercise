<template>
  <view class="homePageContent">
    <Swapper />
    <FoodClassification />
  </view>
</template>

<script>
import Swapper from "../../components/swipper";
import FoodClassification from "../../components/foodClassification";
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  components: {
    Swapper,
    FoodClassification,
  },
  onLoad() {},
  methods: {},
};
</script>

<style>
.homePageContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
