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
Vue.filter("dataFormat", function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
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
  router
});
