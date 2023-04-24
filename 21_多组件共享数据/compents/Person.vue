<template>
    <div>
        <h1>Person</h1>
        <input type="text" placeholder="请输入姓名" v-model="personName">
        <button @click="addPerson(personName)">加人</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
        </ul>
        <h3>Num模块数字和为：{{ allNum }}</h3>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from "vuex";

export default {
    name: "PersonVue",
    data() {
        return {
            personName: ''
        }
    },
    computed: {
        ...mapState(['personList']),
        ...mapGetters(['allNum'])
    },
    methods: {
        ...mapActions(['addPerson'])

    }
}
</script>

<style scoped>

</style>