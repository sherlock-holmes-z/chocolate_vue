<template>
    <div>
        <MyItem
                v-for="item in items"
                :key="item.id"
                :item="item"
        ></MyItem>
    </div>
</template>

<script>
import MyItem from "@/components/MyItem.vue";

export default {
    name: "MyList",
    props: ['items'],
    components: {
        MyItem
    }
}
</script>

<style scoped>

</style>