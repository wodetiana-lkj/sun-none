```vue
const TodoItem = {
	templete: `<li>this is a todo item</li>`
}

const app = Vue.createApp({
	components: {
		TodoItem
	}
}).mount('#app');

<ol>
    <todo-item></todo-item>
</ol>
```

每一个component都拥有属于自己的组件实例，同一个组件可能被多个实例渲染

在一个应用中所有组件实例将共享同一个应用实例

createApp()为应用实例

.mount()返回的是根组件实例



生命周期

create()

mounted()

updated()

unmounted()

![实例的生命周期](https://v3.cn.vuejs.org/images/lifecycle.svg)

v-once可以限定一次性插值

v-html对html文本重新渲染

对Mustache表达式的js表达式的支持进行尝试书写

```vue
{{message + 1}}
{{message?true:false}}
{{message.split('').reverse().join('')}}
{{<div v-bind:id="'list-' + id"></div><div v-bind:id="'list-' + id"></div>}}
v-bind:[]=""//动态设置attribute值，[]中为javascript表达式
//动态的attribute值大小写不区分，不能使用''等拼接，仅可以访问有限的全局变量表不能访问用户定义的全局变量
```
