<template>
    <div>
        <ul>
            <li>
                <label>
                    <input
                            type="checkbox"
                            :checked="itemsData.done"
                            @change="itemDataChange(itemsData.id)"
                    >
                    <span>{{ itemsData.title }}</span>
                </label>
                <button @click="remove(itemsData.id)">remove choose</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MyItem",
    // 声明接收item对象
    props: ['item'],
    data() {
        return {
            itemsData: this.item
        }
    },
    methods: {
        remove(id) {
            this.$bus.$emit('removeTodoEvent',id)
        },
        itemDataChange(id) {
            this.$bus.$emit('changeTodoEvent',id)
        }
    }
}
</script>

<style scoped>

li button {
    display: none;
}

li:hover {
    background-color: yellow;
}

li:hover button {
    display: block;
}
</style>