// 引入Vue核心库
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'


import numOptions from './num'
import personOptions from './person'

// 应用vuex插件
Vue.use(Vuex)


export default new Vuex.Store({
    // 配置对象
    modules: {
        numOptions,
        personOptions
    }
})


