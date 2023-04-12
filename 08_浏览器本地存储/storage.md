### WebStorage

    1. 存储格式都是字符串，一般支持5M左右（不同浏览器不一样）
    2. 浏览器端通过window.sessionStorage或Window.localStorage属性实现本地存储机制
    3.相关API:
        setItem(k,v),getItem(k),removeItem(k),clear()

1. sessionStorage存储的内容会随着浏览器的关闭而消失
2. localStorage存储内容需要手动清除
3. getItem(k)的值获取不到会返回null
4. JSON.parse(null)的值还是null
    

        