<template>
    <div class="school">
        <h3>{{name}}</h3>
        <h3>{{age}}</h3>
        <hr>
    </div>
</template>

<script>
export default {
    name: "SchoolVue",
    data(){
        return{
            name:"sherlock",
            age:10
        }
    }
}
</script>

<style scoped>
.school {
    background-color: chocolate;
}
</style>