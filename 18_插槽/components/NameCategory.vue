<template>
    <div>
        <h3>{{ title }}</h3>
        <slot name="nameSlot1"></slot>
        <slot name="nameSlot2"></slot>
        <slot name="nameSlot3"></slot>
    </div>
</template>

<script>
export default {
    name: "NameCategoryVue",
    props: ['title']
}
</script>

<style scoped>

</style>