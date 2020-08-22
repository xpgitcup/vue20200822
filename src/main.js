import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//需要按需引入，先引入vue并引入element-ui
import AFTableColumn from 'af-table-column'

// 一些不太明白的定义
import {
  postKeyValueRequestJson,
  postKeyValueRequest,
  putKeyValueRequest,
  postRequest,
  putRequest,
  deleteRequest,
  getRequest
} from "./utils/api";

Vue.prototype.postRequest = postRequest;
Vue.prototype.postKeyValueRequestJson = postKeyValueRequestJson;
Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.putKeyValueRequest = putKeyValueRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.getRequest = getRequest;

// axios.defaults.baseURL = 'http://localhost:8000'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(AFTableColumn)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
