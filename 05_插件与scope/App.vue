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

<!--app的样式可以被其vc组件使用，但不能加scope，否则只能自己使用-->
<style>
.redText {
    color: red;
}
</style>