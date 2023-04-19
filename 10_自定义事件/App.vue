<template>
    <div class="app">
        <h2 v-text="appTitle">{{ studentName }}</h2>
        <h3>{{ studentName }}</h3>
        <!--        通过父组件给子组件传递函数类型的props实现：子给父传递数据-->
        <SchoolVue :getSchoolName="getSchoolName"/>
        <!--        通过父组件给子组件绑定一个自定义事件实现：子给父传递数据-->
        <!--        <StudentVue @studentEvent="getStudentName" @otherEvent="doOtherEvent"/>-->
        <!--                <StudentVue @studentEvent.once="getStudentName"/>-->

        <!--        父组件使用ref给子组件绑定事件-->
        <StudentVue ref="student"/>

        <!--        不加native，@click会被认为是一个自定义组件，使用native表示原生组件用在整个Student组件上-->
        <!--        <StudentVue ref="student" @click.native="showInfo"/>-->
    </div>
</template>1

<script>
import SchoolVue from "./components/School.vue";
import StudentVue from "./components/Student.vue"

export default {
    name: "App",
    components: {
        SchoolVue,
        StudentVue
    },
    data() {
        return {
            appTitle: "h2  v-text title",
            studentName: ''
        }
    },
    methods: {
        getSchoolName(value) {
            console.log('school name:' + value)
        },
        getStudentName(value) {
            console.log('student name:' + value)
            this.studentName = value
        },
        doOtherEvent() {
            console.log("otherEvent")
        },
        showInfo() {
            alert('info')
        }
    },
    mounted() {
        // 通过ref给student绑定一个studentEvent事件，触发getStudentName()方法
        this.$refs.student.$on('studentEvent',this.getStudentName)

        // once触发一次
        // this.$refs.student.$once('studentEvent',this.getStudentName)

        // function函数中的this为事件绑定对象，即student,无法给app中属性赋值
        // this.$refs.student.$on('studentEvent', function (name) {
        //     console.log('student name:' + name)
        //     console.log(this)
        // })

        // 箭头函数中this为上级对象，即App
        this.$refs.student.$on('studentEvent', (name) => {
            console.log('student name:' + name)
            console.log(this)
            this.studentName = name
        })
    }
}
</script>

<!--app的样式可以被其vc组件使用，但不能加scope，否则只能自己使用-->
<style>
.redText {
    color: red;
}
</style>