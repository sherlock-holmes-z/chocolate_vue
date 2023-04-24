<template>
    <div>
        <h1>Num</h1>
        <h3>{{ num }}</h3>
        <button @click="addActions(addNum)">加1</button>
        <button @click="addMutations(addNum2)">加2</button>
        <h4>person数量：{{ personList.length }}</h4>
        <h3>personNum与num和：{{ allNum }}</h3>
    </div>
</template>

<script>

import {mapState, mapActions, mapMutations,mapGetters} from "vuex";

export default {
    name: "numVue",
    data() {
        return {
            addNum: 1,
            addNum2: 2
        }
    },
    computed: {
        ...mapState('numOptions', ['num']),
        ...mapState('personOptions', ['personList']),

        ...mapGetters("numOptions", ['allNum'])
    },
    methods: {
        ...mapActions('numOptions', ['addActions']),
        ...mapMutations('numOptions', ['addMutations'])
    }
}
</script>

<style scoped>

</style>