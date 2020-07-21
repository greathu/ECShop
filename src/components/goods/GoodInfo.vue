<!---->
<template>
  <div class="goodinfo-container">
    <!--小球动画-->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballFlage" ref="ball"></div>
    </transition>

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
            市场价格：
            <del>￥2499</del>&nbsp;&nbsp; 销售价格：
            <span class="now_preice">￥2299</span>
          </p>
          <p>
            购买数量：
            <!--获取子组件中的数据定义，但后添加函数，读取数据-->
            <numbox @getcount="getSelectCount" :max="8"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
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
      lunbotu: [],
      selectCount: 1,
      ballFlage: false
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
    },
    getSelectCount(count) {
      this.selectCount = count;
      console.log("子组件中传递过来的数据：" + this.selectCount);
    },
    addToShopCar() {
      /* 小球显示效果 */
      this.ballFlage = !this.ballFlage;
      /* 
      {id:this.id,count:this.selectCount,price:goodif.sell_price,selected:true}
       */
      var goodinfo = {
        id: 22,
        count: this.selectCount,
        price: 249,
        selected: true
      };
      /*  console.log(this.$store); */
      /* 提交传递到main.js里面 */
      this.$store.commit("addToCat", goodinfo);
    },
    /* 小球动画效果 el表示小球数据 */
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      /* 获取小球的位置 */
      var ballPosition = this.$refs.ball.getBoundingClientRect();
      /*  console.log(ballPosition); */
      /* 验证位置是否获取成功 获取需要到达的位置 */
      var bagde = document.getElementById("badge").getBoundingClientRect();
      /*  验证位置是否获取成功  console.log(bagde); */
      var xDist = bagde.left - ballPosition.left;
      var yDist = bagde.top - ballPosition.top;
      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = "all 0.5s ease-out";
      done();
    },
    afterEnter(el) {
      this.ballFlage = !this.ballFlage;
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
  /* 小球定义 */
  .ball {
    width: 15px;
    height: 15px;
    background-color: red;
    /* 方块变圆 */
    border-radius: 50%;
    /* 自己定位 */
    position: absolute;
    top: 390px;
    left: 152px;
    /* 显示图层 */
    z-index: 99;
    /* 位置调试 */
  }

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
