<template>
  <h1><span>组合API</span></h1>
  <el-container style="height: 500px; border: 1px solid #eee">
    <!-- 左侧边栏 -->
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '3']">
        <el-submenu index="1">
          <template #title><i class="el-icon-message"></i>响应式数据</template>
<el-menu-item-group>
    <template #title>基础类型</template>
    <el-menu-item index="1-1">
        <router-link to="/composition/ref">Ref</router-link>
    </el-menu-item>
    <el-menu-item index="1-2">
        <router-link to="/store/mutations">reactive</router-link>
    </el-menu-item>
</el-menu-item-group>
<el-menu-item-group title="分组2">
    <template #title>复杂类型</template>
    <el-menu-item index="1-3">选项3</el-menu-item>
</el-menu-item-group>
</el-submenu>
</el-menu>
</el-aside>
<!-- 右侧容器 -->
<el-container>
    <!-- 头部 -->
    <el-header style="text-align: right; font-size: 12px">
        <span>composition API</span>
    </el-header>
    <!-- 内容 -->
    <el-main>
        <router-view></router-view>
    </el-main>
</el-container>
</el-container>
</template>

<script>
    export default {
        name: "name",
    };
</script>

<style lang="scss" scoped></style>