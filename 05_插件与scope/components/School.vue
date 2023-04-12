<template>
    <div class="school">
        <h3>{{ name | mySlice }}</h3>
        <h3 class="redText">{{ addr }}</h3>
        <input type="text" v-fbind="name" >
        <hr>
    </div>
</template>

<script>
export default {
    name: "SchoolVue",
    data() {
        return {
            name: 'chocolate school',
            addr: 'asdfadikugbf'
        }
    }
}
</script>

<style scoped>
.school {
    background-color: chocolate;
}
</style>