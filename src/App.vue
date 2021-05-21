<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style lang="scss" rel="stylesheet/scss">
/*每个页面公共css */
@import "uview-ui/index.scss";
/* icons */
@import "./static/icons/index.css";
</style>
