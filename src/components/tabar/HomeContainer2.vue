<template>
  <div>
    <mt-swipe>
      <mt-swipe-item v-for="(item ,index) in lunbos" :key="index">
        <img :src="item.img" alt />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbos: []
    };
  },
  created() {
    this.getLunbo();
  },
  methods: {
    getLunbo() {
      this.$http
        .get("http://tools.ly522.com/Tools/dts/search.php?")
        .then(Response => {
          // 成功的回调函数
          console.log(Response.body);
          if (Response.body.status === 0) {
            this.lunbos = Response.body.message;
          } else {
            Toast("数据加载失败");
          }
        });
    }
  }
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
