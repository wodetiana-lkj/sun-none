# vue-router

## 基础使用

1. 搭配vue项目使用，`npm install vue-router`
2. 声明router插件并使用，`Vue.use(VueRouter)`
3. 创建一个router，`new VueRouter({routes})`
4. 根据路由需求配置路由，example:地址、组件、元信息、重定向地址等
5. 注册到vue容器，`new Vue(router)`



## 跳转

`this.$router.push({name,params:{},query:{}})`



## 问题

- Vue-router默认采用的是hash模式，url后缀会带有#，可切换为history模式
- 声明式导航和编程式导航的区别，`<router-link></router-link>`，编程式导航采用的是$router.push|replace方法
- 