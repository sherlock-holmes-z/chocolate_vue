<template>
    <div class="header">
        <input placeholder="chocolate input" type="text" v-model="inputItem" @keyup.enter="addItem"/>
    </div>
</template>

<script>
// npm i nanoid
import {nanoid} from 'nanoid'

export default {
    name: "MyHeader",
    props: ['appAdd'],
    data() {
        return {
            inputItem: ''
        }
    },
    methods: {
        addItem() {
            const item = {id: nanoid(), title: this.inputItem, done: false}
            console.log(item)
            this.appAdd(item)
            this.inputItem = ''
        }
    }
}
</script>

<style scoped>
.header {
    background-color: skyblue;
}
</style>