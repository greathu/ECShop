<!---->
<template>
  <div class="goodinfo-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!--轮播图区域块-->
          <swripter-box></swripter-box>
          <!--   <swripter-box :lunbos="lunbos"></swripter-box>  传递数据形式-->
        </div>
      </div>
    </div>
    <!--商品购买区域-->
    <div class="mui-card">
      <div class="mui-card-header">华为（HUAWEI）荣耀6Plus 16g双核版</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!--商品购买区域-->
          <p class="price">
            市场价格：<del>￥2499</del>&nbsp;&nbsp; 销售价格：<span
              class="now_preice"
              >￥2299</span
            >
          </p>
          <p>购买数量：<numbox></numbox></p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!--商品参数-->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!--商品购买区域-->
          <p>商品货号：</p>
          <p>库存数量：</p>
          <p>上架时间：</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        <mt-button type="danger" size="large" plain>商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import Swripter from "../assembly/Swriper.vue";
import Numbox from "../assembly/Numberbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: []
    };
  },
  methods: {
    getLunbotu() {
      this.$http.get("").then(Response => {
        // 成功的回调函数
        console.log(Response.body);
        if (Response.body.status === 0) {
          this.lunbos = Response.body.message;
        } else {
          Toast("数据加载失败");
        }
      });
    }
  },
  components: {
    "swripter-box": Swripter,
    Numbox
  }
};
</script>
<style lang="scss" scoped>
.goodinfo-container {
  background-color: #eee;
  overflow: hidden;
  .now_preice {
    color: red;
    font-size: 15px;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
}
</style>
