<template>
    <div class="app">
        <h2 v-text="appTitle"></h2>
<!--        v-bind代表传入的是表达式，18会被解析为Number，而不是String-->
        <SchoolVue name="sherlock" :age="18" />
    </div>
</template>

<script>
import SchoolVue from "./components/School.vue";

export default {
    name: "App",
    components: {
        SchoolVue,
    },
    data() {
        return {
            appTitle: "h2  v-text title"
        }
    }
}
</script>

<style scoped>
.app {
    background-color: gray;
}
</style>