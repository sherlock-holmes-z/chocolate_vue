const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // 方式一：开启代理服务器
    // 缺点：1.只能配置一个代理；
    //      2.不能控制走不走代理（public文件夹下的资源也属于8080）
    // devServer: {
    //   proxy: 'http://localhost:8081'
    // }

    devServer: {
        proxy: {
            // 需要转发的请求地址前缀
            '/vue': {
                target: 'http://localhost:8081', // 请求地址
                pathRewrite: {'^/vue': 'vue'}, // 前缀替换
                //   ws: true, 用于支持webSocket
                changeOrigin: false // 默认true，true时伪装请求来源和请求地址一样,false不伪装（用于控制请求头中的值）
            }

            // '/api': {
            //   target: 'http://localhost:8081',
            //   ws: true,
            //   changeOrigin: true
            // },
            // '/foo': {
            //   target: '<other_url>'
            // }
        }
    }
})
