import Vue from 'vue'

import App from './App.vue'

import plugins from "@/plugins";

// 使用插件(可带参数)
Vue.use(plugins, 1, 2, 3)

new Vue({
    render: c => c(App)
}).$mount("#app")