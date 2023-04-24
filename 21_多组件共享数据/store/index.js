// 引入Vue核心库
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
import {nanoid} from "nanoid";

// 应用vuex插件
Vue.use(Vuex)

// 响应组件中用户的动作
const actions = {
    addActions(context, param) {
        context.commit('addMutations', param)
    },
    addPerson(context, personName) {
        const p = {id: nanoid(), name: personName}
        context.commit('ADD_PERSON', p)
    }
}
// 修改state中数据
const mutations = {
    addMutations(state, param) {
        state.num += param
    },
    ADD_PERSON(state, personObj) {
        state.personList.unshift(personObj)
    }
}
// 保存具体的数据
const state = {
    num: 1,
    personList: [{id: 1, name: 'zhangsan'}]
}


const getters = {
    // 当state中的数据需要加工再使用时
    allNum(state) {
        return state.num + state.personList.length
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})


