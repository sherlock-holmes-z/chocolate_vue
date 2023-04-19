<template>
    <div class="school">
        <h3>{{ name }}</h3>
        <h3>{{ addr }}</h3>
        <hr>
    </div>
</template>

<script>
export default {
    name: "SchoolVue",
    data() {
        return {
            name: 'chocolate school',
            addr: '上海市'
        }
    },
    mounted() {
        this.$bus.$on('sendStudentName', (studentName) => {
            console.log('@@School:' + studentName)
        })
    },
    beforeDestroy() {
        this.$bus.$off('sendStudentName')
    }

}
</script>

<style scoped>
.school {
    background-color: chocolate;
}
</style>