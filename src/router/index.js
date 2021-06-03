// 1.引入路由
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
// 2.创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes:routes,
})
// 3.导出路由
export default router