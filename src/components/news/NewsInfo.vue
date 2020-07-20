<template>
  <div>
    <div class="newsinfo-container">
      <h3 class="title">新闻详情{{ id }}</h3>
      <p class="subtitle">
        <span>发表时间：2012-12-12：12：12：12</span>
        <span>点击次数：0</span>
      </p>
      <hr />
      <div class="content" v-html="newsinfo.conter"></div>
    </div>
    <!--评论模块-->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
//导入子组件
import comment from "../assembly/Comment.vue";

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: { conter: "<div>我在这里谢谢</div>" }
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      console.log("发送请求部分");
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>
<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 10px 0;
    color: red;
  }
  .subtitle {
    font-size: 10px;
    color: blue;
    display: flex; //弹性盒子  设置主轴
    justify-content: space-between; //两端对齐
  }
}
</style>
