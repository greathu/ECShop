// 导入 Vue
import Vue from "vue";

// 导入完全mint-ui
import Mint from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(Mint);

// 到入
import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css";

//按需导入mint-ui

// 导入Vuex
import Vuex from "vuex";
Vue.use(Vuex);


var car = JSON.parse(localStorage.getItem("car") || '[]')
/* 共用的数据  state为数据源 */
var store = new Vuex.Store({
  state: {
    car: car
  },
  /* 逻辑处理 */
  mutations: {
    addToCat(state, goodinfo) {
      /* 1.car[]  已存在改商品信息，更新购买数量。
         2.car[]  不存在改商品信息，直接把商品放入到数组中。
         第一步：遍历数组
       */
      var flag = false
      state.car.some(item => {
        if ((item.id == goodinfo.id)) {
          //商品已经存在
          item.count += parseInt(goodinfo.count)
          flag = true;
          return true;
        }
      })
      //商品在数组中不存在
      if (!flag) {
        //自己放入
        state.car.push(goodinfo)
      }
      /* 格式转化 */
      localStorage.setItem("car", JSON.stringify(state.car))
    }
  },
  getters: {
    getAllCount(state) {
      var count = 0;
      state.car.forEach(item => {
        count += item.count
      })
      return count;
    }
  }
})

// 导入vue-router  ->使用路由功能
import VueRouter from "vue-router";
Vue.use(VueRouter);
import router from "./router/router";

//导入Vue-Resource
import VueResource from "vue-resource";
Vue.use(VueResource);
//设置全局链接地址  -->后面设置链接的时候可以不用写链接地址了
Vue.http.options.root = "#";

// 导入开始组件
import App from "./App.vue";

Vue.config.productionTip = false;

//导入时间处理器
import Moment from "moment";
//时间过滤器 =>全局过滤器
Vue.filter("dataFormat", function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return Moment(dataStr).format(pattern);
});

//导入缩略图功能 =》预览使用
import VuePreview from "vue-preview";
Vue.use(VuePreview);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  data: {
    msg: ""
  },
  methods: {},
  render: c => c(App),
  router,
  store
});
