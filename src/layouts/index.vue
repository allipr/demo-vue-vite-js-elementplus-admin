<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                Aside
                <sidebar class="sidebar-container"></sidebar>
            </el-aside>
            <el-container>
                <el-header>
                    Header
                    <navbar />
                </el-header>
                <el-main>
                    Main
                    <app-main />
                </el-main>
            </el-container>
        </el-container>
    </div>

</template>

<script setup>
    import Sidebar from "./components/Sidebar/index.vue";
    import AppMain from "./components/AppMain.vue";
    import Navbar from "./components/Navbar.vue";
</script>

<style lang="scss" scoped>
    el-container {
        height: 500px;
        border: 1px solid #eee;
        // color: red
    }
</style>