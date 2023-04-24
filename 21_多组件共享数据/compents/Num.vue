<template>
    <div>
        <h1>Num</h1>
        <h3>{{ num }}</h3>
        <button @click="addActions(addNum)">加1</button>
        <button @click="addMutations(addNum2)">加2</button>
        <h4>{{ personList.length }}</h4>
    </div>
</template>

<script>

import {mapState, mapActions, mapMutations} from "vuex";

export default {
    name: "numVue",
    data() {
        return {
            addNum: 1,
            addNum2: 2
        }
    },
    computed: {
        ...mapState(['num', 'personList'])
    },
    methods: {
        ...mapActions(['addActions']),
        ...mapMutations(['addMutations'])
    }
}
</script>

<style scoped>

</style>