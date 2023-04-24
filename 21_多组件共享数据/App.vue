<template>
    <div id="app">
        <NumVue></NumVue>
        <hr>
        <PersonVue></PersonVue>
    </div>
</template>

<script>

import NumVue from "@/compents/Num.vue";
import PersonVue from "@/compents/Person.vue";

export default {
    name: "App",
    components: {PersonVue, NumVue},

}
</script>

<style scoped>

</style>