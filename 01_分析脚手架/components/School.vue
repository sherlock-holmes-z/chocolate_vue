<template>
    <div class="school">
        <h3>{{ name }}</h3>
        <h3>{{ address }}</h3>
    </div>
</template>

<script>
export default {
    name: "SchoolVue",
    data() {
        return {
            name: "this is my school",
            address: "thi way"
        }
    }
}
</script>

<style scoped>
.school{
    background-color: blanchedalmond;
}
</style>