<template>
    <div class="school">
        <h3>{{ name }}</h3>
        <h3>{{ addr }}</h3>
        <button @click="schoolName">点击</button>
        <button @click="doDeath">销毁vc</button>
        <hr>
    </div>
</template>

<script>
export default {
    name: "SchoolVue",
    props: ['getSchoolName'],
    data() {
        return {
            name: 'chocolate school',
            addr: '上海市'
        }
    },
    methods: {
        schoolName() {
            this.getSchoolName(this.name)
        },
        doDeath(){
            this.$destroy()
        }
    }

}
</script>

<style scoped>
.school {
    background-color: chocolate;
}
</style>