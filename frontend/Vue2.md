# 安装

1. script安装
2. npm安装以及其脚手架

```html
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
```

# vue实例成员变量

| name     | description                                                  | type   |
| -------- | ------------------------------------------------------------ | ------ |
| el       | 绑定标签                                                     | string |
| data     | 绑定数据                                                     | object |
| computed | 属性计算，和数据绑定                                         | object |
| methods  | 类似于computed，但是每次刷新都需要重新计算，而computed只相应缓存值 | object |
| watch    | 类似computed，但是一般用于异步操作axios访问api和访问限制，这是computed做不到的 | object |

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

搭配v-else、v-else-if

绑定attribute表显示

v-for具有更高的优先级，不建议一起使用

### v-show

相比v-if不支持templete，仅支持标签，始终渲染更变display值

### v-on

事件绑定

```vue
<button @click="decrease">递减</button>
```

### v-for

迭代数组，显示列表

```vue
//注意vue提供了key值跟踪状态
<ul v-for="(item,index) in lists" v-bind:key="item.id">
    <li style="list-style-type:none;">index:{{index}},value:{{item}}</li>
</ul>

//v-for迭代遍历k-v
<li v-for="(value,name,index) in obj"></li>
```

### v-model

表单双向数据绑定

语法中同样支持基础的javascript语法，但是仅为表达式而非语句

还有动态参数的设定，！！！这里需要着重看