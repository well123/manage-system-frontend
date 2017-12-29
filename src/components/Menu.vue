<template>
  <div class="el-aside el-aside-style">
    <el-menu class="el-menu-vertical" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse">
      <el-menu-item @click="changeCollapse()" index="1">
        <template>
          <i :class="[!isCollapse?'el-icon-arrow-left':'el-icon-arrow-down']"></i>
          <span slot="title">{{!isCollapse?'':'展开'}}</span>
        </template>
      </el-menu-item>
      <el-submenu v-for="(menu,menuIndex) in menuList" :index="''+(menuIndex + 1)" :key="menuIndex">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{menu.name}}</span>
        </template>
        <el-menu-item v-for="(child,childIndex) in menu.children" @click="pushTo(child)" :index="menuIndex+'-'+childIndex" :key="childIndex">{{child.name}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style>
  .el-aside-style {
    overflow-y: auto;
    overflow-x: visible;
  }
  .el-menu-vertical {
    height: 100%;
    text-align: left;
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
  }
</style>

<script>
  export default {
    data () {
      return {
        isCollapse: false,
        menuList: []
      }
    },
    mounted () {
      this.initMenuList()
    },
    methods: {
      changeCollapse () {
        this.isCollapse = !this.isCollapse
      },
      initMenuList () {
        this.$axios.get('getMenuList').then(response => {
          this.menuList = response.data
        })
      },
      pushTo (route) {
        this.$store.commit('addTag', {
          name: route.name,
          path: route.routeName
        })
        this.$router.push(route.routeName)
      }
    }
  }
</script>
