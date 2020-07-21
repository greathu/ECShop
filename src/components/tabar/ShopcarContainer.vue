<!---->
<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!--商品列表区域-->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img src="../../image/22.png" alt />
            <div class="info">
              <h1>华为（HUAWEI）荣耀6Plus 16g双核版</h1>
              <p>
                <span class="price">￥2499</span>
                <numbox></numbox>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!--结算区域-->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner jiesuan">
            <div class="left">
              <p>总计（不含运费）</p>
              <p>
                已勾选商品
                <span class="red"></span>46件，总价
                <span class="red">￥2499</span>
              </p>
            </div>
            <mt-button>去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../assembly/Shopcar_Numbox.vue";
export default {
  data() {
    return {
      goodslist: []
    };
  },
  methods: {
    getGoodsList() {
      var ids = [];
      this.$store.state.car.forEach(item => {
        ids.push(item.id);
      });
      /* 判断是否有购买的点击购买按钮，如果没有直接返回 */
      if (ids.length < 0) {
        return;
      }
      /* this.$http.get("#"+ids.join(".")).then(result=>
      if(result.body.status ===0){
        this.goodlist =result.body.message;
      }
      }) */
    }
  },
  components: {
    numbox
  }
};
</script>
<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
      height: 60px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>
