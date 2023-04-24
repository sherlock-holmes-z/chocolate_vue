<template>
    <div>
        <h3>{{ title }}</h3>
        <slot name="scopeSlot1" :games="games">this is scope slot 1</slot>
        <slot name="scopeSlot2" :games="games">this is scope slot 2</slot>
        <hr>
    </div>
</template>

<script>
export default {
    name: "ScopeCategory",
    props: ['title'],
    data() {
        return {
            games: ['lol', 'fly car', 'cross fire', 'dance']
        }
    }
}
</script>

<style scoped>

</style>