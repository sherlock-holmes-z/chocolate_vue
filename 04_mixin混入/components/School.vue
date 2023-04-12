<template>
    <div class="school">
        <h3>{{ name }}</h3>
        <h3>{{ addr }}</h3>
        <button @click="showName">button</button>
        <hr>
    </div>
</template>

<script>
// 引入多个
import {myMixIn, myMixIn2} from "@/mixin";

export default {
    name: "SchoolVue",
    data() {
        return {
            name: 'chocolate school',
            addr: 'asdfadikugbf'
        }
    },
    mixins: [myMixIn, myMixIn2]
}
</script>

<style scoped>
.school {
    background-color: chocolate;
}
</style>