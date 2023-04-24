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

export default {
    name: "PersonVue",
    data() {
        return {
            personName: ''
        }
    },
    computed: {
        personList() {
            return this.$store.state.personOptions.personList
        },
        allNum() {
            return this.$store.getters["numOptions/allNum"]
        }
    },
    methods: {
        addPerson(personName) {
            console.log(this.$store.getters)
            this.$store.dispatch("personOptions/addPerson", personName)
            // this.$store.commit("personOptions/ADD_PERSON", personName)
            this.personName = ''
        }
    }
}
</script>

<style scoped>

</style>