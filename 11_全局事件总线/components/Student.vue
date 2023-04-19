<template>
    <div class="student">
        <h3>{{ name }}</h3>
        <h3>{{ age }}</h3>
        <button @click="sendName">sendStudentName</button>
        <hr>
    </div>
</template>

<script>

export default {
    name: "StudentVue",
    data() {
        return {
            name: 'zhangsan',
            age: 19
        }
    },
    methods: {
        sendName() {
            this.$bus.$emit('sendStudentName', this.name)
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