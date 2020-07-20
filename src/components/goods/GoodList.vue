<template>
  <div class="goods-list">
    <router-link class="goods-item" :to="'/home/goodinfo/' + 22">
      <img src="../../image/cbd.jpg" />
      <h1 class="title">手机华为</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥500</span>
          <span class="old">￥600</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩25件</span>
        </p>
      </div>
    </router-link>
    <div class="goods-item">
      <img src="../../image/cbd.jpg" />
      <h1 class="title">苹果手机</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥500</span>
          <span class="old">￥600</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩25件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="../../image/cbd.jpg" />
      <h1 class="title">小米手机</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥500</span>
          <span class="old">￥600</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩25件</span>
        </p>
      </div>
    </div>
    <!--最下面的点击事件-->
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    // data 是往自己组件内部，挂载一些私有数据的
    return {
      pageindex: 1, // 分页的页数
      goodslist: [] // 存放商品列表的数组
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      /* // 获取商品列表
      this.$http
        .get("api/getgoods?pageindex=" + this.pageindex)
        .then(result => {
          if (result.body.status === 0) {
            //this.goodslist = result.body.message;
            this.goodslist = this.goodslist.concat(result.body.message);
          }
        }); */
    },
    getMore() {
      this.pageindex++;
      this.getGoodsList();
    },
    goDetail(id) {
      //实现导航
      //console.log(this);
      //this.$router.push("/home/goodinfo/" + id);
      //this.$router.push({path:"/home/goodinfo/" + id});
      /*    this.$router.push({ name: "goodinfo", params: { id } }); */
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap; //允许自动换行
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
