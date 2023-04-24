<template>
    <div>
        <input type="text" v-model="keyword">
        <button @click="getInfo">getInfo</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "SearchVue",
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        getInfo() {
            if (!this.keyword) {
                alert('keyWord cannot empty')
                this.$bus.$emit('searchUsersEvent', {isLoading: false, errMsg: 'keyWord cannot empty', userInfos: []})
                return
            }
            this.$bus.$emit('searchUsersEvent', {isFirst: false, isLoading: true, errMsg: '', userInfos: [],test:1})
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`)
                .then(
                    response => {
                        console.log("event search success")
                        this.$bus.$emit('searchUsersEvent', {
                            isLoading: false,
                            errMsg: '',
                            userInfos: response.data.items
                        })
                    },
                    error => {
                        console.log("fail")
                        console.log(error.message)
                        this.$bus.$emit('searchUsersEvent', {isLoading: false, errMsg: error.message, userInfos: []})
                    }
                )
        }
    }
}
</script>

<style scoped>

</style>