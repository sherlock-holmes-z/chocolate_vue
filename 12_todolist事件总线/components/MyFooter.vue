<template>
    <div v-show="notNull">
        <label>
            <!--            <input type="checkbox" :checked="allDone" @click="footerClickAll">-->

            <input type="checkbox" v-model="selectAll">
        </label>
        <span>
          <span>完成:{{ doneNum }} / </span>
          <span>全部:{{ total }}</span>
      </span>
        <button @click="clear">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: "MyFooter",
    props: ['items', 'clickAll', 'clearDone'],
    methods: {
        clear() {
            this.clearDone()
        },
        footerClickAll() {
            this.clickAll(this.allDone)
        }
    },
    computed: {
        total() {
            return this.items.length
        },
        doneNum() {
            // pre初始值，可设置为0，每次的返回值作为下一次的初始值
            // current当前节点
            // return this.items.reduce((pre, current) => {
            //     return pre + (current.done ? 1 : 0)
            // }, 0);
            return this.items.reduce((pre, current) => pre + (current.done ? 1 : 0), 0);
        },
        allDone() {
            return this.total === this.doneNum && this.total > 0
        },
        notNull() {
            return this.total !== 0
        },
        // 计算属性完整写法，get为属性值，set中value也是属性值
        selectAll: {
            get() {
                return this.total === this.doneNum && this.total > 0
            },
            set(value) {
                console.log(value)
                this.clickAll(value)
            }
        }
    }
}
</script>

<style scoped>

</style>