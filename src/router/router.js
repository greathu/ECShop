// 第一步：引入router
import VueRouter from 'vue-router'
// 第二步：引入需要跳转的页面
import HomeContainer from "../components/tabar/HomeContainer.vue"
import MemberContainer from "../components/tabar/MemberContainer.vue"
import SearchContainer from "../components/tabar/SearchContainer.vue"
import ShopcarContainer from "../components/tabar/ShopcarContainer.vue"

//设置新闻资讯路由
import newsList from "../components/news/newsList.vue"
import NewsInfo from "../components/news/NewsInfo.vue"
//图片分享
import PhotoList from "../components/photos/PhotoList.vue"
import PhotoInfo from "../components/photos/PhotoInfo.vue"
// 商品购买
import GoodList from "../components/goods/GoodList.vue"
import GoodInfo from "../components/goods/GoodInfo.vue"

var router = new VueRouter({
  routes: [{
    path: "/",
    redirect: "/home"
  }, {
    path: "/home",
    component: HomeContainer
  }, {
    path: "/member",
    component: MemberContainer
  }, {
    path: "/search",
    component: SearchContainer
  }, {
    path: "/shopcar",
    component: ShopcarContainer
  }, {
    path: "/home/newslist",
    component: newsList
  }, {
    path: "/home/NewsInfo/:id",
    component: NewsInfo
  }, {
    path: "/home/photolist",
    component: PhotoList
  }, {
    path: "/home/photoinfo/:id",
    component: PhotoInfo
  }, {
    path: "/home/goodlist",
    component: GoodList
  }, {
    path: "/home/goodinfo/:id",
    component: GoodInfo
  }],
  // 设置路由点击在哪里，添加那个类
  linkActiveClass: "mui-active"

})
export default router
