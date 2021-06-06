import { createApp } from 'vue'
import App from './App.vue'
// 路由
import router from './router'
// 状态
import store from './store'
// 全局样式
import 'styles/index.scss'

// UI
import ElementPlus from 'plugins/element-plus'

const app = createApp(App).use(router).use(store).use(ElementPlus).mount('#app')