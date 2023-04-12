export default {
    install(Vue, a, b, c) {
        // 可接受参数
        console.log(a, b, c)
        // 添加一个全局过滤器
        Vue.filter('mySlice', function (value) {
                return value.slice(0, 4) + ' =》 filter'
            }
        )


        // 全局自定义指令
        Vue.directive("fbind", {
            // 指令与元素成功绑定时执行
            bind(element, binding) {
                element.value = binding.value
            },
            // 指令所在元素被插入页面时执行
            inserted(element) {
                element.focus()
            },
            // 指令所模板被重新解析时
            update() {

            }
        })

        // 混入
        Vue.mixin({
            data() {
                return {
                    x: "xxx",
                    y: "yyy"
                }
            }
        })

        // 给vue的prototype添加一个hello方法
        Vue.prototype.hello = () => {
            alert('hello')
        }
    }
}