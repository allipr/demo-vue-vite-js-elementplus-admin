<template>
    <div class="app-wrapper">
        <!-- 左侧:侧边栏 -->
        <div class="sidebar-container"></div>
        <!-- 右侧:内容容器 -->
        <div class="main-container">
            <!-- 顶部导航栏 -->
            <navbar></navbar>
            <!-- 下部内容区 -->
            <app-main></app-main>
        </div>

    </div>
</template>

<script setup>
import AppMain from "./components/AppMain.vue"
import Navbar from "./components/Navbar.vue";
</script>

<style lang="scss" scoped>
@import "styles/mixin.scss"
.app-wrapper{
    @inclue clearfix;
    position: relative;
    height: 100%;
    width: 100%;
}
</style>