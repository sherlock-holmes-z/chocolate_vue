import Vue from 'vue'

import App from './App.vue'


new Vue({
    render: c => c(App),
    // mounted() {
    //     setTimeout(() => {
    //         // 销毁VM整个组件事件失效
    //         this.$destroy()
    //     }, 3000)
    // }
}).$mount("#app")