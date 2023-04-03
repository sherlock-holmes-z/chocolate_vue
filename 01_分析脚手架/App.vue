<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <School></School>
        <Student></Student>
    </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from './components/School.vue'

export default {
    name: 'App',
    components: {
        Student,
        School
        // HelloWorld
    }
}
</script>

<style>

</style>
