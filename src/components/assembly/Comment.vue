<template>
  <div class="cmt-container">
    <hr />
    <textarea placeholder="请输入要评论的内容（做多输入120子）" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表品论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第{{id}}楼&nbsp;&nbsp;用户：&nbsp;&nbsp;发表时间：</div>
        <div class="cmt-body">用户很懒，什么都没有说</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore()">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: []
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      /*  this.$http.get("#"+this.id+"?pageindex=1").then(result =>{
        if(result.body.status===0){
          this.comments = result.body.message;
        }else{
          Toast("新闻信息加载失败")
        }
      }) */
      console.log("成功调用端口-getComments");
    },
    getMore() {
      console.log("getMore");
    }
  },
  //页面切换接收数据
  props: ["id"]
};
</script>

<style lang="scss" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
}
.cmt-list {
  margin: 5px 0;
  .cmt-item {
    font-size: 13px;
    .cmt-title {
      background-color: #ccc;
      line-height: 30px;
    }
    .cmt-body {
      line-height: 35px;
      text-indent: 2em;
    }
  }
}
</style>