<template>
    <div id="app">
        <h3>组件中读取state{{ $store.state.num }}</h3>

        <h3>组件中读取getters:{{ $store.getters.bigSum }}</h3>

        <!--        <h3>mapState读取num：{{ mapStateNum }}</h3>-->
        <h3>mapState简写num：{{ num }}</h3>
        <h3>mapGetter中读取bigNum：{{ bigSum }}</h3>
        <button @click="add">button</button>
        <button @click='add(addNum)'>actionsAdd</button>
        <button @click='actionsAdd(addNum)'>actionsAdd</button>
        <button @click='mutationsAdd(addNum)'>mutationsAdd</button>
    </div>
</template>

<script>

// 引入mapState
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";

export default {
    name: "App",
    data() {
        return {
            addNum: 1
        }
    },
    computed: {
        // ...mapState({mapStateNum: 'num'}),
        ...mapState(['num']),
        ...mapGetters(['bigSum'])
    },
    methods: {
        // add() {
        //     this.$store.dispatch("add", this.addNum) //调用action方法
        //
        //     // this.$store.commit('add', this.addNum) // 没有网络请求或其他业务逻辑时，可以直接调用mutations方法
        // },

        // mapActions与mapMutations使用时，传递参数需在模板中绑定事件时传参，否则参数是事件对象

        // 简写,生成与actions对话的方法，即包含$store.dispatch(xxx)函数
        ...mapActions(['add']),

        ...mapActions({actionsAdd: 'add'}),

        // 生成与mutations对话的方法，，即包含$store.commit(xxx)函数
        ...mapMutations({mutationsAdd: 'add'})
    },
    mounted() {
        console.log(this)
    }
}
</script>

<style scoped>

</style>