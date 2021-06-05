# vue-vite-js

> ## 项目准备

- 构建项目

```shell
npm init @vitejs/app projectName --template vue
```

- 切换目录

```shell
cd projectName
```

- 安装依赖

```shell
npm install
```

- 运行项目

```shell
npm run dev
```



## 插件使用



### 使用UI库

> npm install element-plus --save

#### 1、安装依赖

```npm
npm install element-plus --save
```

#### 2、全局引用

##### 2.1、普通方式

- main.js

```js
import { createApp } from 'vue'
import App from './App.vue'
// 1、全局引入element-plus
import ElementPlus from 'element-plus';//导入组件
import 'element-plus/lib/theme-chalk/index.css';//导入样式
// 2、使用UI
createApp(App)
    .use(ElementPlus)//使用组件
    .mount('#app')
```

- 调试 HelloWorld.vue

```vue
<template>
  <el-button type="danger">危险按钮</el-button>
</template>
```

##### 2.2、改进方式

- src/plugins/element-plus.js

```js
// 全局引入element-plus
import ElementPlus from 'element-plus';//导入组件
import 'element-plus/lib/theme-chalk/index.css';//导入样式

export default function (app) {
    //全局
    app.use(ElementPlus)
}
```

- src/main.js

```js
import { createApp } from 'vue'
import App from './App.vue'

// UI
import ElementPlus from 'plugins/element-plus'

const app = createApp(App)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
```



#### 3、按需引用

### 路由Router





查看包信息

```shell
npm info vue-router
```



#### 1、安装依赖

> 切换至项目根目录

```shell
npm install vue-router@4 -S
# 或者
npm i vue-router@next -S
```

#### 2、创建路由

> /src/router/index.js

```js
// 1.引入依赖
#导入路由插件
import { createRouter, createWebHashHistory } from 'vue-router'
#导入路由配置文件
import routes from './routes'
// 2.创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes:routes,
})
// 3.导出路由
export default router
```



#### 3、配置路由

> /src/router/routes.js

```js
const routes=[
    {path:'/',component:()=>import('views/home.vue')}
]

export default routes
```



#### 4、挂载路由

/src/main.js

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')
```

#### 5、使用路由

> /src/App.vue

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + Vite25" /> -->
  <router-view></router-view>
  <comp></comp>
</template>
```



### 状态管理Vuex

#### 1、安装

```shell
npm i vuex@next -S
```



### 样式组织sass

> /src/styles目录保存各种样式

#### 1、安装依赖

```shell
npm i sass -D
```

#### 2、组织样式 index.scss

> `index.scss`作为出口，组织这些样式，同时编写一些全局样式

```scss
// 全局样式入口

// 1.导入样式
@import './element-ui.scss';
@import './mixin.scss';
@import './sidebar.scss';
@import './transition.scss';
@import './variable.scss';

// 2.定义样式

// 来自:src/App.vue <style>……</style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    // 来自:src/components/HelloWorld.vue  <style scoped>……</style>
    a {
        color: #42b983;
    }
  }
```

#### 3、导入样式 main.js

> 在`main.js`中导入



```js
import { createApp } from 'vue'
import App from './App.vue'
// 路由
import router from './router'
// 状态

// 全局样式
import 'styles/index.scss'

createApp(App)
    .use(router)
    .mount('#app')
```



### 模拟数据Mock

#### 1、安装插件

- [mock][mock][^mock]

```shell
npm i vite-plugin-mock -D
```

- [mockjs][mockjs][^mockjs]

```shell
npm i mockjs -S
```

- cross-env

```shell
npm i cross-env -D
```

#### 2、引入插件

> vite.config.js

```js
//引入
import { viteMockServe } from 'vite-plugin-mock'

//配置
export default defineConfig({
  plugins: [vue(),viteMockServe({
    supportTs:false
  })]
})
```

#### 3、

> /package.json

```json
 //修改前
"scripts": {
    "dev": "vite",
  },
//修改后
  "scripts": {
    "dev": "cross-env NODE_ENV=development vite",
  },
```



#### 4、创建mock

> /mock/user.js

```js
export default [
    {
      url: '/api/getUsers',
      method: 'get',
      response: () => {
        console.log('body>>>>>>>>');
        return {
          code: 0,
          message: 'ok',
          data: ['tom','jerry'],
        };
      },
    },
  ];
```



#### 5、测试mock



```vue
<script setup>
//请求mock api
fetch("/api/getUsers").then((res)=>res.json()).then((data)=>{
  console.log(data);
})
</script>
```












- [x] 

------

[mock]:https://github.com/anncwb/vite-plugin-mock/blob/main/README.zh_CN.md	"模拟数据"
[^mock]:模拟数据，此插件运行需要安装mockjs
[mockjs]:http://mockjs.com/

[^mockjs]: 
