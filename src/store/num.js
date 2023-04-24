import personOptions from './person'
// num相关配置
export default {
    namespaced: true, // 开启命名空间
    actions: {
        addActions(context, param) {
            context.commit('addMutations', param)
        },
    },
    mutations: {
        addMutations(state, param) {
            state.num += param
        },
    },
    state: {
        num: 1,
    },
    getters: {
        allNum(state) {
            // 配置中的state只是局部的state
            return state.num + personOptions.state.personList.length
        }
    }
}