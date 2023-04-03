/*
   该文件是整个项目的入口文件
 */

// 引入简版Vue，不具有模板解析器
import Vue from 'vue'

// 引入完整版vue
// import Vue from 'vue/dist/vue'

// 引入App组件，它是所有组件的父组件
import App from './App.vue'

// 关闭vue生产提示
Vue.config.productionTip = false

// 创建vue实例对象
// new Vue({
//     // 将App组件放入容器中
//     render: h => h(App),
// }).$mount('#app')

new Vue({
    el: '#app',
    // render(createElement){
    //     console.log(typeof createElement)
    //     return createElement('h3','render create element')
    // }

    // render(createElement){
    //     console.log(typeof createElement)
    //     return createElement(App)
    // }

    render: h => h(App)
})


// 不会被解析成功
// 因为import Vue from 'vue'引入的是一个残缺的vue.runtime.esm.js，不具有模板解析器
// 完整版为vue/dist/vue
// new Vue({
//     el: "#app",
//     template: `
//       <App></App>`,
//     components: {
//         App
//     }
// })
