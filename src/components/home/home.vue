<template>
  <div id="home">
    <el-container>
      <el-header>头部</el-header>
      <el-container>
        <el-aside width="200px">左侧导航</el-aside>
        <el-main>
          <keep-alive>
            <!-- 这里是会被缓存的视图组件 -->
            <!-- $route.meta.keepAlive：如果是true，
            说明是缓存组件，通过keep-alive这个标签把缓存组件显示出来-->
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <!-- 这里是不被缓存的视图组件 -->
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </el-main>
      </el-container>
      <el-footer>底部版权信息</el-footer>
    </el-container>
  </div>
</template>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
</style>
