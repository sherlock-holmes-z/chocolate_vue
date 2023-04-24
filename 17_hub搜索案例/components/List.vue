<template>
    <div>
        <h3 v-show="info.isFirst">welcome userInfo</h3>
        <h3 v-show="info.isLoading">wait a moment</h3>
        <h3 v-show="info.errMsg">{{ info.errMsg }}</h3>
        <ItemVue
                v-for="userInfo in info.userInfos"
                :key="userInfo.id"
                :userInfo="userInfo"
        >
        </ItemVue>
    </div>
</template>

<script>
import ItemVue from "@/components/Item.vue";

export default {
    name: "ListVue",
    components: {ItemVue},
    data() {
        return {
            info: {
                isFirst: true,
                userInfos: [],
                isLoading: false,
                errMsg: ''
            }
        }
    },
    mounted() {
        this.$bus.$on('searchUsersEvent', (objData) => {
            console.log('event receive success', objData)
            // this.info = objData

            // 合并数据，info中的属性不会丢失，而是使用objData中的值去覆盖（不存在的属性会新增）
            this.info = {...this.info, ...objData}
        })
    },
    beforeDestroy() {
        this.$bus.$off('getUsersEvent')
    }
}
</script>

<style scoped>

</style>