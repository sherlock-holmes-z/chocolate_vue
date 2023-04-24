<template>
    <div id="app">
        <SearchVue></SearchVue>
        <ListVue></ListVue>
    </div>
</template>

<script>
import SearchVue from "@/components/Search.vue";
import ListVue from "@/components/List.vue";

export default {
    name: "App",
    components: {ListVue, SearchVue},
}
</script>

<style scoped>

</style>