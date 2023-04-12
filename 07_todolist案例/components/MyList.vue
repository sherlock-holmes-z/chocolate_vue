<template>
    <div>
        <MyItem
                v-for="item in items"
                :key="item.id"
                :item="item"
                :changeTodo="changeTodo"
                :removeTodo="removeTodo"
        ></MyItem>
    </div>
</template>

<script>
import MyItem from "@/components/MyItem.vue";

export default {
    name: "MyList",
    props: ['items', 'changeTodo', 'removeTodo'],
    components: {
        MyItem
    }
}
</script>

<style scoped>

</style>