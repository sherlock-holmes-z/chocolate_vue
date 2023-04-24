<template>
    <div id="app">
        <!--        默认插槽-->
        <CategoryVue title="默认插槽">
            <img src="../src/assets/1.png" alt='' style="width: 50px"/>
        </CategoryVue>
        <CategoryVue title="OTHER">
            <ul>
                <li v-for='(a,index) in list' :key="index">{{ a }}</li>
            </ul>
        </CategoryVue>

        <!--        具名插槽-->
        <NameCategory title="具名插槽">
            <!--            只有template可以用v-slot-->
            <template v-slot:nameSlot3>
                <h4> this is slot3</h4>
            </template>

            <img slot="nameSlot2" src="../src/assets/1.png" alt='' style="width: 50px"/>
            <h4 slot="nameSlot1">this is slot1</h4>
        </NameCategory>


<!--        v-slot:scopeSlot1="data" 指定具名插槽scopeSlot1与子组件值对象data-->
        <ScopeCategory title="作用域插槽1">
            <template v-slot:scopeSlot1="data">
                <h4 v-for='g in data.games' :key="g">{{ g }}</h4>
            </template>
        </ScopeCategory>
        <ScopeCategory title="作用域插槽2">
            <template v-slot:default="data">
                <h4 v-for='g in data.games' :key="g">{{ g }}</h4>
            </template>
        </ScopeCategory>
        <ScopeCategory title="作用域插槽3">
            <template v-slot:scopeSlot2="{games}">
                <h4 v-for='g in games' :key="g">{{ g }}</h4>
            </template>
        </ScopeCategory>
    </div>
</template>

<script>
import CategoryVue from "@/components/Category.vue";
import NameCategory from "@/components/NameCategory.vue";
import ScopeCategory from "@/components/ScopeCategory.vue";


export default {
    name: "App",
    components: {CategoryVue, NameCategory, ScopeCategory},
    data() {
        return {
            list: ['sleep', 'eat', 'beat']
        }
    }
}
</script>

<style scoped>

</style>