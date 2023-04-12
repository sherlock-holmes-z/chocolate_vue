<template>
    <div>
        <ul>
            <li>
                <label>
                    <!--                    直接修改props深层次数据，不建议使用，修改浅层次数据会出错-->
                    <!--                    <input-->
                    <!--                            type="checkbox"-->
                    <!--                            v-model="itemsData.done"-->
                    <!--                    >-->
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
    props: ['item', 'changeTodo', 'removeTodo'],
    data() {
        return {
            itemsData: this.item
        }
    },
    methods: {
        remove(id) {
            this.removeTodo(id)
        },
        itemDataChange(id) {
            this.changeTodo(id)
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