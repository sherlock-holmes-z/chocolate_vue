<template>
    <div class="student">
        <h3>{{ name }}</h3>
        <h3>{{ age }}</h3>
        <hr>
    </div>
</template>

<script>

export default {
    name: "StudentVue",
    data() {
        return {
            name: 'student',
            age: 19
        }
    }
}
</script>

<!-- scoped ：样式在局部生效，防止冲突-->
<style scoped>
.student {
    background-color: skyblue;
}
</style>