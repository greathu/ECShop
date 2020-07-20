<template>
  <div>
    <ul class="mui-table-view mui-media" v-for="item in items" :key="item.id">
      <li class="mui-table-view-cell mui-media">
        <router-link :to="'/home/newsinfo/' + item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url" />
          <div class="mui-media-body">
            <h1>{{ item.title }}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{ item.add_time | dataFormat }}</span>
              <span>点击次数：{{ item.click }}</span>
            </p>
          </div>
        </router-link>
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
