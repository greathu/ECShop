<template>
  <div>
    <mt-swipe>
      <mt-swipe-item>
        <img src="../../image/avatar.jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../image/avatar (1).jpg" alt />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../image/avatar (2).jpg" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  //  props: [lunbo],   接收数据
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item {
  &:nth-child(1) {
    background-color: red;
  }
  &:nth-child(2) {
    background-color: yellow;
  }
  &:nth-child(3) {
    background-color: blue;
  }
}
</style>
