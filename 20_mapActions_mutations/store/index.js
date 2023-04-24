// 引入Vue核心库
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'

// 应用vuex插件
Vue.use(Vuex)

// 响应组件中用户的动作
const actions = {
    add(context, param) {
        console.log('action add:' + param)
        context.commit('add', param)
    },

}
// 修改state中数据
const mutations = {
    add(state, param) {
        console.log('mutations add:' + param)
        state.num += param
        console.log(state.num)
    }
}
// 保存具体的数据
const state = {
    num: 1
}


const getters = {
    // 当state中的数据需要加工再使用时
    bigSum(state) {
        return state.num * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})


