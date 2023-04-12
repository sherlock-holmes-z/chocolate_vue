# chocolate_vue

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# 笔记

### 注意

    VUE不支持IE8及以下版本

### babel.config.js

    babel控制文件，ES6->ES5

### package.json

    "serve": "vue-cli-service serve",  运行
    "build": "vue-cli-service build",  构建
    "lint": "vue-cli-service lint"     语法检查(几乎不用)

### package-lock.json

    包版本控制文件

# 结构

### main.js

    执行npm run serve后，直接运行main.js

### ./src/assets文件夹

    放页面中的静态资源

### ./src/components文件夹

    自己写的组件

### App.vue

    与./src同级，管理其他components

### ./public

### ./node_modules

### 为什么不引入完整版vue

    1.因为完整版vue包含模板解析啊，占vue的三分之一，而webpack中已经可以解析vue文件为js，所以是为了vue项目打包更小
    2.vue。runtime.XXX.js只包含核心功能，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容

### 配置文件

    vue inspect > output.js 输出配置文件

### props

    // 简单声明接收，接收到的值修改会出错,最好使用data作为中转变量
    props: ['name', 'age']

    // 接收的同时对数据类型进行限制，数据类型不一致页面控制台会报错
    props: {
        name: String,
        age: Number
    },

    // 接收数据，同时指定类型，默认值，必要性
    props: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            default: 99
        }
    }

### mixin(混入)
C
    把多个组件共用的配置提取成一个混入对象,有全局混入和局部混入


     