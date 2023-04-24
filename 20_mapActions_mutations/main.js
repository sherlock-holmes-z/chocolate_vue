import Vue from 'vue'
import App from "@/App.vue";

// 引入store配置项
import store from "@/store";

new Vue({
    render: c => c(App),
    store
}).$mount('#app')