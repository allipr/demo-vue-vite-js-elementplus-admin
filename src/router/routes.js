import Layout from "layouts/index.vue"
const routes = [
    // {path:'/',component:()=>import('views/home.vue')},
    {
        path: '/',
        name: 'Layout',
        component: Layout,
        children: [{
            path: "home",
            component: () => import("views/Home.vue"),
            name: "Home",
            meta: {
                title: "首页",
                icon: "el-icon-s-home"
            },
            children: [{
                path: ":id",
                component: () => import("views/Detail.vue"),
                name: "Detail",
                hidden: true,
                meta: {
                    title: "详情",
                    icon: "el-icon-s-home",
                    activeMenu: "/home",
                },
            }, ],
        }, ],
    }
]

export default routes