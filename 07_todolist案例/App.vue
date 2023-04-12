<template>
    <div id="app">
        <MyHeader :appAdd="appAdd"></MyHeader>
        <MyList
                :items="items"
                :changeTodo="changeTodo"
                :removeTodo="removeTodo"></MyList>
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
            items: [
                {id: '1', title: 'smoke', done: true},
                {id: '2', title: 'drink', done: false},
                {id: '3', title: 'dance', done: true},
                {id: '4', title: 'play', done: false}
            ]
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
    }
}
</script>

<style scoped>

</style>