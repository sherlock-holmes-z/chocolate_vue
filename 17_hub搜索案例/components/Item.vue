<template>
    <div>
        <ul>
            <li>
                <label>
                    <span>{{ userInfo }}</span>
                    <a :href="userInfo.html_url">
                        <img :src="userInfo.avatar_url" style="width: 100px" >
                    </a>
                    <p>{{ userInfo.login }}</p>
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "ItemVue",
    props: ['userInfo']
}
</script>

<style scoped>

</style>