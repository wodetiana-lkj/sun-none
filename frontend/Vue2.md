## 安装

1. script安装
2. npm安装以及其脚手架

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
```

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