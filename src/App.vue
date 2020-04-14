<template>
  <div id="app">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu index="1">
            <template slot="title">文章管理</template>
            <el-menu-item index="/">文章列表</el-menu-item>
            <el-menu-item index="AddArticle">添加文章</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">标签管理</template>
            <el-menu-item index="TagList">标签列表</el-menu-item>
            <el-menu-item index="AddTag">添加标签</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">相册管理</template>
            <el-menu-item index="PhotoList">相册列表</el-menu-item>
            <el-menu-item index="AddPhoto">添加相册</el-menu-item>
          </el-submenu>
        </el-menu>
        <div class="content">
        <router-view></router-view>
        </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content{
  margin: 1%;
}
</style>
