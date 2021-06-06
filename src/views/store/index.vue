<template>
  <h1><span>状态管理</span></h1>
  <el-container style="height: 500px; border: 1px solid #eee">
    <!-- 左侧边栏 -->
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu>
        <el-menu-item index="1-1">
          <router-link to="/store/state">State</router-link>
        </el-menu-item>
        <el-menu-item index="1-1">
          <router-link to="/store/mutations">Mutations</router-link>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 右侧容器 -->
    <el-container>
      <!-- 头部 -->
      <el-header style="text-align: right; font-size: 12px">
        <span>vuex</span>
      </el-header>
      <!-- 内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script></script>

<style lang="scss" scoped></style>