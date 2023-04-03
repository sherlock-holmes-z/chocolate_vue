<template>
    <div class="app">
        <!--        ref:用来给元素或子组件注册信息-->
        <h2 v-text="appTitle" ref="title"></h2>
        <SchoolVue ref="schoolVue"/>
        <SchoolVue/>
        <button @click="showDOM" ref="btn">getDocument</button>
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
            appTitle: "v-text title"
        }
    }
}
</script>

<style scoped>
.app {
    background-color: gray;
}
</style>