import Layout from "layouts/index.vue";
const routes = [
    // {path:'/',component:()=>import('views/home.vue')},
    {
        path: "/",
        name: "Layout",
        component: Layout,
        children: [{
            path: "home",
            component: () =>
                import ("views/Home.vue"),
            name: "Home",
            meta: {
                title: "首页",
                icon: "el-icon-s-home",
            },
            children: [{
                path: ":id",
                component: () =>
                    import ("views/Detail.vue"),
                name: "Detail",
                hidden: true,
                meta: {
                    title: "详情",
                    icon: "el-icon-s-home",
                    activeMenu: "/home",
                },
            }, ],
        }, ],
    },
    // 组件
    {
        path: "/component",
        name: "component",
        component: () =>
            import ("views/component/index.vue"),
    },
    // 组合api
    {
        path: "/composition",
        name: "composition",
        component: () =>
            import ("views/composition/index.vue"),
        children: [{
            path: "ref",
            name: "ref",
            component: () =>
                import ("views/composition/data/Ref.vue"),
        }, ],
    },
    // 状态管理 store vuex
    {
        path: "/store",
        name: "store",
        component: () =>
            import ("views/store/index.vue"),
        children: [{
                path: "state",
                name: "state",
                component: () =>
                    import ("views/store/State.vue"),
            },
            {
                path: "mutations",
                name: "mutations",
                component: () =>
                    import ("views/store/Mutations.vue"),
            },
        ],
    },
];

export default routes;