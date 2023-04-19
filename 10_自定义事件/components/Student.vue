<template>
    <div class="student">
        <h3>{{ name }}</h3>
        <h3>{{ age }}</h3>
        <button @click="getStudentName">点击</button>
        <button @click="unbindEvent">解绑studentEvent</button>
        <button @click="doDeath">销毁vc</button>
        <hr>
    </div>
</template>

<script>

export default {
    name: "StudentVue",
    data() {
        return {
            name: 'zhangsan',
            age: 19
        }
    },
    methods: {
        getStudentName() {
            // 触发Student组件实例身上的studentEvent事件
            this.$emit('studentEvent', this.name)
            this.$emit('otherEvent')
        },
        unbindEvent() {
            this.$off('studentEvent') // 解绑事件
            // this.$off(['studentEvent', 'otherEvent'])
            // this.$off()
        },
        doDeath() {
            // 销毁当前组件vc实例，所有自定义事件也不会生效
            this.$destroy()
        }

    }
}
</script>

<!-- scoped ：样式在局部生效，防止冲突-->
<style scoped>
.student {
    background-color: skyblue;
}
</style>