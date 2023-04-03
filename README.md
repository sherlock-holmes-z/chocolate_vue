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

# 注意

    VUE不支持IE8及以下版本

### 配置文件
    vue inspect > output.js 输出配置文件


     