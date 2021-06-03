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

### 路由vue-router





查看包信息

```shell
npm info vue-router
```



#### 1、安装路由

> 切换至项目根目录

```shell
npm install vue-router@4
```

2、导入路由

/src/main.js

```js
import {createRouter,createWebHashHistory} from 'vue-router'
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
