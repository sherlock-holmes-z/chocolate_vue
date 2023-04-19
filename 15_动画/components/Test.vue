<template>
    <div id="Test">
<!--        appear初始渲染-->
        <transition appear>
            <h1 v-show="showFlag">hello</h1>
        </transition>
        <button @click="showFlag = !showFlag">showFlag</button>
    </div>
</template>

<script>
export default {
    name: "myTest",
    data() {
        return {
            showFlag: true
        }
    }

}
</script>

<style scoped>
h1 {
    background-color: yellow;
}

/*linear 匀速*/
.v-enter-active {
    animation: myTest 1s linear;
}

.v-leave-active {
    animation: myTest 1s reverse linear;
}

/*transition用命名，v替换为命名name*/
/*<transition name="hello">*/
/*.hello-enter-active {*/
/*    animation: myTest 1s linear;*/
/*}*/

/*.hello-leave-active {*/
/*    animation: myTest 1s reverse linear;*/
/*}*/

@keyframes myTest {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0px);
    }
}
</style>