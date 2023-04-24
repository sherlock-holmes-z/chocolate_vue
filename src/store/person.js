import {nanoid} from "nanoid";

// person相关配置
export default {
    namespaced: true,
    state: {
        personList: [{id: 1, name: 'zhangsan'}]
    },
    actions: {
        addPerson(context, personName) {
            const p = {id: nanoid(), name: personName}
            context.commit('ADD_PERSON', p)
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            state.personList.unshift(personObj)
        }
    }
}