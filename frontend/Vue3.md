vue3

```html
//直接使用CDN
<script src="https://unpkg.com/vue@next"></script>
```

```js
const app = Vue.createApp({
    //data属性
    data() {
        return {
            message: 'abcdefg',
            seen: false,
            todoArr: [1,2,3,4,5,6,7,8,9,0]
        }
    },
    //vue方法
    methods() {
        reverse() {
            this.message = this.message
                .split('')
                .reverse()
                .join('')
        }
    }
}).mount('#app');
```

```html
//v-bind单向绑定数据内容
<h1>{{message}}</h1>
//v-bind单向绑定attribute
<span :title='message'>标签头</span>
//v-on绑定事件
<span @click="reverse">{{message}}</span>
//v-model双向绑定
<input type="text" v-model="message" placeholder="请输入内容">
```

```html
//v-if判断展示问题
<span v-if="seen"></span>
//v-for循环展示渲染标签
<ol></ol>
<ul>
    <li v-for="todo in todoArr">{{todo}}</li>
</ul>
```

