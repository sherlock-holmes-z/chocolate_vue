<template>
    <div class="app">
        <h2 v-text="appTitle"></h2>
        <SchoolVue/>
        <StudentVue></StudentVue>
    </div>
</template>

<script>
import SchoolVue from "./components/School.vue";
import StudentVue from "./components/Student.vue"

export default {
    name: "App",
    components: {
        SchoolVue,
        StudentVue
    },
    data() {
        return {
            appTitle: "h2  v-text title"
        }
    }
}
</script>

<style>
.app {
    background-color: gray;
}
</style>