import Vue from 'vue'
import App from './App.vue'
// import vueRouter from "vue-router"
Vue.config.productionTip = false
import Register from "./pages/Register.vue"
import List from "./pages/Listuser.vue"
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const routes = [
  {path:'/',component:Register},
  {path:"/list",component:List}
]
const router = new VueRouter({routes})
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
