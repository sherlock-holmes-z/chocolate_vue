<template>
    <div class="app">
        <h2 v-text="appTitle"></h2>
        <!--        通过父组件给子组件传递函数类型的props实现：子给父传递数据-->
        <SchoolVue :getSchoolName="getSchoolName"/>
        <!--        通过父组件给子组件绑定一个自定义事件实现：子给父传递数据-->
<!--        <StudentVue @studentEvent="getStudentName"/>-->
<!--                <StudentVue @studentEvent.once="getStudentName"/>-->

<!--        父组件使用ref给子组件绑定事件-->
        <StudentVue ref="student"/>
    </div>
</template>

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
            appTitle: "h2  v-text title"
        }
    },
    methods: {
        getSchoolName(value) {
            console.log('school name:' + value)
        },
        getStudentName(value) {
            console.log('student name:' + value)
        }
    },
    mounted() {
        // 通过ref给student绑定一个studentEvent事件，触发getStudentName()方法
        // this.$refs.student.$on('studentEvent',this.getStudentName)

        // once触发一次
        this.$refs.student.$once('studentEvent',this.getStudentName)

    }
}
</script>

<!--app的样式可以被其vc组件使用，但不能加scope，否则只能自己使用-->
<style>
.redText {
    color: red;
}
</style>