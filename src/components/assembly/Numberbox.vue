<template>
  <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      id="test"
      class="mui-input-numbox"
      type="number"
      value="1"
      @change="countChanged()"
      ref="numbox"
    />
    <button class="mui-btn mui-btn-numbox-plus" type="button" disabled>+</button>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  mounted() {
    mui(".mui-numbox").numbox();
    /*  console.log(this.max); */
  },
  methods: {
    countChanged() {
      /* 获取组件中的数字 */
      console.log(this.$refs.numbox.value);
      /*   获取的数值，在向父组件传递 */
      this.$emit("getcount", parseInt(this.$refs.numbox.value));
    }
  },
  props: ["max"]
  /* 根据数据传输的 监听数据传递过后 */
  /*   watch: {
    max: function(newVal, oldVal) {
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newVal);
    }
  } */
};
</script>
<style lang="scss" scoped></style>
