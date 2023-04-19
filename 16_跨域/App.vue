<template>
    <div id="app">
        <button @click="getInfo">getInfo</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "App",
    methods: {
        getInfo() {
            axios.get('http://localhost:8080/vue/get')
                .then(
                    response => {
                        console.log(response.data)
                    },
                    error => {
                        console.log(error.message)
                    }
                )
        }
    }
}
</script>

<style scoped>

</style>