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

