<template>
  <div class="photoinfo-container">
    <h3>标题</h3>
    <p class="subtitle">
      <span>发表时间：</span>
      <span>点击次数:0次</span>
    </p>
    <hr />
    <!--缩图-->
    <div class="thumbs">
      <vue-preview :slides="slide1" class="imgprev"></vue-preview>
    </div>
    <!--图片内容-->
    <div class="contents">
      我在马路边，边我在马路边，边我在马路边
      ，边我在马路边，边我在马路边，边我在马路边，边
      我在马路边，边我在马路边，边我在马路边
      ，边我在马路边，边我在马路边，边我在马路边，边
      我在马路边，边我在马路边，边我在马路边
      ，边我在马路边，边我在马路边，边我在马路边，边
    </div>
    <!--评论组件-->
    <comment-box></comment-box>
  </div>
</template>

<script>
//导入子组件
import comment from "../assembly/Comment.vue";

export default {
  data() {
    return {
      slide1: [
        {
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture3",
          title: "Image Caption 3",
          w: 1200,
          h: 900
        }
      ],
      id: this.$route.params.id,
      photoinfo: {}, //获取的是数据模块，不是json类型的
      list: [] //获取的数据类型是json模块的
    };
  },
  created() {
    this.getPhotoInfo();
    this.getthumbs();
  },
  methods: {
    getPhotoInfo() {
      /* this.$http.get("#").then(result =>{
        if(result.body.status===0){
          result.body.message.unshift({title:"全部",id=0})
          this.photoinfo = result.body.message；
        }
      })
       */
      console.log("调用getPhotoInfo");
    },
    getthumbs() {
      /* this.$http.get("#").then(result =>{
        if(result.body.status===0){
             result.body.message.forEach(item =>{
                 item.src = this.rootPath + item.src;  //添加IP地址  重新处理
                 item.msrc =item.src;
                 item.w=600;
                 item.h=400
                              })
          this.list = result.body.message[0];
        }
      })
       */
      console.log("获取图片");
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>

<style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: blue;
    font-size: 15px;
    margin: 15px 0;
    text-align: center;
  }
  .subtitle {
    display: flex;
    justify-content: space-between; //弹性布局，两端对其
    font-size: 13px;
  }
  .contents {
    font-size: 13px;
    line-height: 30px;
  }
}
</style>
<style lang="scss">
.thumbs {
  .imgprev {
    .my-gallery {
      figure {
        display: inline-block;
        margin: 15px;
      }
      img {
        width: 85px;
        height: 60px;
      }
    }
  }
}
</style>
