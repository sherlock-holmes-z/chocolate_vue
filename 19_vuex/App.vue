<template>
    <div id="app">
        <h3>组件中读取state{{ $store.state.num }}</h3>

        <h3>组件中读取getters:{{ $store.getters.bigSum }}</h3>

        <h3>mapState读取num：{{ mapStateNum }}</h3>
        <h3>mapState简写num：{{ num }}</h3>
        <h3>mapGetter中读取bigNum：{{ bigSum }}</h3>
        <button @click="add">button</button>
    </div>
</template>

<script>

// 引入mapState
import {mapState} from "vuex";
import {mapGetters} from "vuex";

export default {
    name: "App",
    data() {
        return {
            addNum: 1
        }
    },
    computed: {
        ...mapState({mapStateNum: 'num'}),
        ...mapState(['num']),
        ...mapGetters(['bigSum'])
    },
    methods: {
        add() {
            this.$store.dispatch("add", this.addNum) //调用action方法

            // this.$store.commit('add', this.addNum) // 没有网络请求或其他业务逻辑时，可以直接调用mutations方法
        }
    },
    mounted() {
        console.log(this)
    }
}
</script>

<style scoped>

</style>