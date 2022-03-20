# 安装

1. script安装
2. npm安装以及其脚手架

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
```

# vue实例成员变量

| name     | description                            | type   |
| -------- | -------------------------------------- | ------ |
| el       | 绑定标签                               | string |
| data     | 绑定数据                               | object |
| computed | 属性计算，和数据绑定                   | object |
| methods  | 类似于computed但是不会随着绑定数据更新 | object |

//todo 这里需要注意computed、methods、watch三种不同的方式在更新渲染时做出的反应和更新数据时的反应

# vue基本语法

## 数据的单向绑定

### v-bind

```vue
<span>{{message}}</span>
<span v-bind:title="message"></span>

```

### v-html

使用与v-bind相同，但是回显排版为html，但是需要嵌入到span行标签当中

### v-if

绑定attribute表显示

### v-on

事件绑定

```vue
<button @click="decrease">递减</button>
```

### v-for

迭代数组，显示列表

```vue
<ul v-for="(item,index) in lists">
    <li style="list-style-type:none;">index:{{index}},value:{{item}}</li>
</ul>
```





语法中同样支持基础的javascript语法，但是仅为表达式而非语句

还有动态参数的设定，！！！这里需要着重看