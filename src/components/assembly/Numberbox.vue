<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="5"
      @change="countChanged()"
      ref="numbox"
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button" disabled="">
      +
    </button>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChanged() {
      /*      console.log(this.$refs.numbox.values);
      获取的数值，在向父组件传递
       */
      this.$emit("getcount", parseInt(5));
    }
  }
};
</script>
<style lang="scss" scoped></style>
