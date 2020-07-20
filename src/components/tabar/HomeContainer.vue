<template>
  <div>
    <!-- 轮播图设置区-->
    <swripter-box></swripter-box>
    <!-- 九宫格设置区-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../image/menu1.png" />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../image/menu2.png" />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodlist">
          <img src="../../image/menu3.png" />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../image/menu4.png" />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../image/menu5.png" />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../image/menu6.png" />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import Swripter from "../assembly/Swriper.vue";
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
    "swripter-box": Swripter
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  img {
    width: 100%;
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #ffffff;
  border: 0;
  img {
    width: 60px;
  }
}
.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
  border: 0;
}
</style>
