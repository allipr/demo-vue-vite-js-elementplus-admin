//

// 全局引入element-plus
import ElementPlus from 'element-plus';//导入组件
import 'element-plus/lib/theme-chalk/index.css';//导入样式

export default function (app) {
    //全局
    app.use(ElementPlus)
}