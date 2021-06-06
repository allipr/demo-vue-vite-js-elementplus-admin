<template>
  <div class="common-layout">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <sidebar class="sidebar-container"></sidebar>
      </el-aside>
      <!-- 内容容器 -->
      <el-container>
        <!-- 顶部导航栏 -->
        <el-header>
          <navbar />
        </el-header>
        <!-- 内容区 -->
        <el-main>
          <app-main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
    import Sidebar from './components/Sidebar/index.vue'
    import AppMain from './components/AppMain.vue'
    import Navbar from './components/Navbar.vue'
</script>

<style lang="scss" scoped>
    el-container {
        height: 500px;
        border: 1px solid #eee;
        // color: red
    }
</style>