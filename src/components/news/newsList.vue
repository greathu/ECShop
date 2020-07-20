<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link to="/home/newsinfo/22">
          <img
            class="mui-media-object mui-pull-left"
            src="../../image/shuijiao.jpg"
          />
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2012-12-12：12：12：12</span>
              <span>点击次数：0</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="../../image/muwu.jpg"
          />
          <div class="mui-media-body">
            <h1>木屋</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2012-12-12：12：12：12</span>
              <span>点击次数：0</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="../../image/cbd.jpg"
          />
          <div class="mui-media-body">
            <h1>CBD</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2012-12-12：12：12：12</span>
              <span>点击次数：0</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="../../image/cbd.jpg"
          />
          <div class="mui-media-body">
            <h1>CBD</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2012-12-12：12：12：12</span>
              <span>点击次数：0</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="../../image/cbd.jpg"
          />
          <div class="mui-media-body">
            <h1>CBD</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2012-12-12：12：12：12</span>
              <span>点击次数：0</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="../../image/cbd.jpg"
          />
          <div class="mui-media-body">
            <h1>CBD</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2012-12-12：12：12：12</span>
              <span>点击次数：0</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="../../image/cbd.jpg"
          />
          <div class="mui-media-body">
            <h1>CBD</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2012-12-12：12：12：12</span>
              <span>点击次数：0</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="../../image/cbd.jpg"
          />
          <div class="mui-media-body">
            <h1>CBD</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2012-12-12：12：12：12</span>
              <span>点击次数：0</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="../../image/cbd.jpg"
          />
          <div class="mui-media-body">
            <h1>CBD</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2012-12-12：12：12：12</span>
              <span>点击次数：0</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
    this.getNewsLsit();
  },
  methods: {
    getNewsLsit() {
      this.$http.get("#").then(result => {
        if (result.body.status === 0) {
          this.newslist = result.body.message;
          Toast("获取新闻数据成功");
        } else {
          Toast("获取新闻数据失败");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 15px;
    }
    .mui-ellipsis {
      font-size: 10px;
      color: blue;
      display: flex; //弹性盒子  设置主轴
      justify-content: space-between; //两端对齐
    }
  }
}
</style>
