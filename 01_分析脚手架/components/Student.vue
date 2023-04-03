<template>
    <div>
        <h3>{{ name }}</h3>
        <h3>{{ age }}</h3>
    </div>
</template>

<script>
export default {
    name: "StudentVue",
    data() {
        return {
            name: "sherlock",
            age: 10
        }
    }
}
</script>

<style scoped>

</style>