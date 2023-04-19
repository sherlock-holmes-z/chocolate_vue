<template>
    <div class="school">
        <h3>{{ name }}</h3>
        <h3>{{ addr }}</h3>
        <hr>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name: "SchoolVue",
    data() {
        return {
            name: 'chocolate school',
            addr: '上海市'
        }
    },
    methods: {
        getStudentName(msgName, data) {
            console.log(msgName, data)
            this.name = data
        }
    },
    mounted() {
        // this.pubId = pubsub.subscribe('hello', function (msgName, data) {
        //     console.log('get hello message:', msgName, data)
        //     console.log(this) //function this在pubsub中，不是vue对象，是一个undefined
        // })

        // this.pubId = pubsub.subscribe('hello', (msgName, data) => {
        //     console.log('get hello message:', msgName, data)
        //     console.log(this) // 箭头函数，this为vc
        //     this.name = data
        // })

        // 直接调用vue的方法
        this.pubId = pubsub.subscribe('hello', this.getStudentName)
    },
    beforeDestroy() {
        pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style scoped>
.school {
    background-color: chocolate;
}
</style>