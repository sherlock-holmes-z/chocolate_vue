<template>
    <div class="school">
        <h3>{{ name }}</h3>
        <h3>{{ myAge }}</h3>
        <button @click="addAge">age+1</button>
        <hr>
    </div>
</template>

<script>
export default {
    name: "SchoolVue",
    data() {
        return {
            myAge: this.age
        }
    },
    methods: {
        addAge() {
            this.myAge++
        }
    },

    // 简单声明接收，接收到的值修改会出错,最好使用data作为中转变量
    props: ['name', 'age']


    // 接收的同时对数据类型进行限制，数据类型不一致页面控制台会报错
    // props: {
    //     name: String,
    //     age: Number
    // },

    // 接收数据，同时指定类型，默认值，必要性
    // props: {
    //     name: {
    //         type: String,
    //         required: true
    //     },
    //     age: {
    //         type: Number,
    //         default: 99
    //     }
    // }

}
</script>

<style scoped>
.school {
    background-color: chocolate;
}
</style>