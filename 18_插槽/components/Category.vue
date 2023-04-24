<template>
    <div>
        <h3>{{ title }}</h3>
        <slot>slot 没有数据时展示</slot>
    </div>
</template>

<script>
export default {
    name: "CategoryVue",
    props: ['title']
}
</script>

<style scoped>

</style>