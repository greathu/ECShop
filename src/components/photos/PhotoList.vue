<template>
  <div>
    <!--顶部选择滑块区-->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div
          class="mui-scroll"
          style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;"
        >
          <!--  <a :class="['mui-control-item',item.id==0?'mui-active':'']"  
          v-for:"item in cates" 
          :key="item.index"
          >推荐
          </a> -->
          <a class="mui-control-item">热点 </a>
          <a class="mui-control-item">北京 </a>
          <a class="mui-control-item">社会 </a>
          <a class="mui-control-item">科技 </a>
          <a class="mui-control-item">科技 </a>
          <a class="mui-control-item">金融 </a>
        </div>
      </div>
    </div>
    <!--显示区域-->
    <ul class="photo-list ">
      <router-link tag="li" :to="'/home/photoinfo/' + 22">
        <img src="../../image/cbd.jpg" />
        <div class="info">
          <h1 class="info-title">
            标题
          </h1>
          <div class="info-body">
            介绍
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.min.js";
import Vue from "vue";
export default {
  data() {
    return {
      cates: [], //类别
      list: [] //图片数组
      /* rootPath:Vue.http.option.root */
    };
  },
  created() {
    this.getAllcatepory(), this.getPhotoListByCateId(0);
  },
  methods: {
    getAllcatepory() {
      /* this.$http.get("#").then(result =>{
        if(result.body.status===0){
          result.body.message.unshift({title:"全部",id=0})
          this.cates = result.body.message；
        }
      }) 
       */
      console.log("调用函数获取类型");
    },
    getPhotoListByCateId(cateId) {
      /* this.$http.get("#"+cateId).then(result =>{
        if(result.body.status===0){
          this.lsit = result.body.message；
        }
      }) 
       */
      console.log("调用函数获取类型");
    }
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-x;
}

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative; // 设置图片显示位置
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      color: white;
      text-align: left;
      position: absolute; //定位字体位置
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      max-height: 85px;
      .info-title {
        font-size: 15px;
      }
      .info-body {
        font-size: 12px;
      }
    }
  }
}
</style>

<!-- 
  1.拷贝sliderhtml结构 data-scroll="1"删除  fullscrenn删除
  2.mounted()生命周期函数中初始化控件 
  3.应为类名重复问题导致tabbar失效，将tabbar中原先的样式拷贝出来，重命名
  -->
