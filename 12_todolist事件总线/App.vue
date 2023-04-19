<template>
    <div id="app">
        <MyHeader :appAdd="appAdd"></MyHeader>
        <MyList
                :items="items"
        ></MyList>
        <MyFooter
                :items="items"
                :clickAll="clickAll"
                :clearDone="clearDone"
        ></MyFooter>
    </div>
</template>

<script>
import MyHeader from "@/components/MyHeader.vue";
import MyList from "@/components/MyList.vue";
import MyFooter from "@/components/MyFooter.vue";

export default {
    name: "App",
    components: {
        MyHeader,
        MyList,
        MyFooter
    },
    data() {
        return {
            //  ||前为null，使用过后面
            items: JSON.parse(localStorage.getItem('items')) || []
        }
    },
    watch: {
        items: {
            deep: true,
            handler(value) {
                localStorage.setItem('items', JSON.stringify(value))
            }
        }
    },
    methods: {
        appAdd(obj) {
            this.items.unshift(obj)
        },
        changeTodo(id) {
            console.log('change:' + id)
            this.items.forEach((item) => {
                if (item.id === id) {
                    item.done = !item.done
                }
            })
        },
        removeTodo(id) {
            if (confirm("sure remove?")) {
                console.log('remove:' + id)
                this.items = this.items.filter((item) => {
                    return item.id !== id
                })
            }
        },
        clickAll(value) {
            this.items.forEach(item => item.done = value)
        },
        clearDone() {
            this.items = this.items.filter(item => !item.done)
        },
    },
    mounted() {
        this.$bus.$on('changeTodoEvent', this.changeTodo)
        this.$bus.$on('removeTodoEvent', this.removeTodo)
    },
    beforeDestroy() {
        this.$bus.$off(['changeTodoEvent', 'removeTodoEvent'])
    }
}
</script>

<style scoped>

</style>