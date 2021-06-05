import { createApp } from 'vue'
import App from './App.vue'
// 路由
import router from './router'
// 状态

// 全局样式
import 'styles/index.scss'

// UI
import ElementPlus from 'plugins/element-plus'

const app = createApp(App)
    .use(router)
    .use(ElementPlus)
    .mount('#app')
