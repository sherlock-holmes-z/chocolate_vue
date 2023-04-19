import Vue from 'vue'

import App from './App.vue'

new Vue({
    render: c => c(App),
    beforeCreate() {
        // 定义全局事件总线
        Vue.prototype.$bus = this
    }
}).$mount("#app")