import Vue from 'vue'

import App from './App.vue'

// 全局引入，vm和所有vc：Root,App，以及app下的vc都包含这些属性
// import {myMixIn, myMixIn2} from "@/mixin";
//
// Vue.mixin(myMixIn)
// Vue.mixin(myMixIn2)

new Vue({
    render: c => c(App)
}).$mount("#app")