<template>
    <div>
        <ul>
            <li>
                <label>
                    <input
                            type="checkbox"
                            :checked="itemData.done"
                            @change="itemDataChange(itemData.id)"
                    >
                    <span v-show="!itemData.isEdit">{{ itemData.title }}</span>
                    <input type="text" ref="inputTitle" :value="itemData.title" v-show="itemData.isEdit"
                           @blur="handlerBlur($event)">
                </label>
                <button @click="changeItem(itemData)" v-show="!itemData.isEdit">修改选项</button>
                <button @click="remove(itemData.id)">删除选项</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MyItem",
    // 声明接收item对象
    props: ['item'],
    data() {
        return {
            itemData: this.item
        }
    },
    methods: {
        remove(id) {
            this.$bus.$emit('removeTodoEvent', id)
        },
        itemDataChange(id) {
            this.$bus.$emit('changeTodoEvent', id)
        },
        changeItem(itemData) {
            if (Object.prototype.hasOwnProperty.call(itemData, "isEdit")) {
                console.log("have isEdit")
                itemData.isEdit = true
            } else {
                console.log("no isEdit")
                this.$set(this.itemData, 'isEdit', true)
            }
            // 当前面的DOM更新结束后执行回调
            this.$nextTick(function () {
                this.$refs.inputTitle.focus()
            })
        },
        // 失去焦点回调
        handlerBlur(e) {
            this.itemData.isEdit = false
            if (!e.target.value.trim()) {
                return alert('can\'t empty')
            }
            this.itemData.title = e.target.value
            this.$bus.$emit('blurEvent', this.itemData)
        }
    }
}
</script>

<style scoped>

li button {
    display: none;
}

li:hover {
    background-color: yellow;
}

li:hover button {
    display: block;
}
</style>