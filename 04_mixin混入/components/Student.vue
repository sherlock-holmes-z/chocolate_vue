<template>
    <div class="student">
        <h3>{{ name }}</h3>
        <h3>{{ age }}</h3>
        <button @click="showName">button</button>
        <hr>
    </div>
</template>

<script>
// 引入mixin的js
import {myMixIn} from "@/mixin";

export default {
    name: "StudentVue",
    // 使用mixin,如果当前vue已存在mixin中的方法，mixin不会覆盖，对于不存在的属性方法，mixin会添加
    mixins: [myMixIn],
    data() {
        return {
            name: 'student',
            age: 19
        }
    },
    methods: {
        showName() {
            console.log('覆盖mixin方法')
        }
    }
}
</script>

<style scoped>
.student {
    background-color: beige;
}
</style>