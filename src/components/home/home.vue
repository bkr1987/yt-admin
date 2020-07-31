<template>
  <div id="home">
    <el-container>
      <el-header style="background:#091f42">
        <div class="imgBox">
          <img src="https://192.168.2.221/static/img/yingtai_logo.png" alt="Logo" />
        </div>
        <div class="left fl" style="display: flex">
          <h3>网络安全威胁感知系统NTDS</h3>
          <!-- v-if="init" -->
          <template>
            <el-tabs v-model="tab_change" @tab-click="click_change_route">
              <!-- v-if="(menu_permission == 'ntds'||menu_permission == 'all')&&roleId != 3" -->
              <el-tab-pane label="威胁检测" name="威胁检测"></el-tab-pane>
              <!-- v-if="(menu_permission == 'asset'||menu_permission == 'all')&&roleId != 3" -->
              <el-tab-pane label="资产管理" name="资产管理"></el-tab-pane>
              <el-tab-pane label="控制中心" name="控制中心"></el-tab-pane>
            </el-tabs>
          </template>
        </div>
      </el-header>
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

<script>
export default {
  data() {
    return {
      //当前页面
      tab_change: '威胁检测',
      home_path: '/'
    }
  },
  methods: {
    //切换资产和NTDS
    click_change_route(event) {
      // console.log(event)
      // this.roleId = localStorage.getItem('roleId')
      // localStorage.setItem('top_title', event.name)
      if (event.name == '威胁检测') {
        this.$router.push({ path: this.home_path })
      } else if (event.name == '资产管理') {
        this.$router.push({ path: '/assetsOverview' })
      } else if (event.name == '控制中心') {
        this.$router.push({ path: '/userManage' })
        // if (this.roleId == 2) {
        //   this.$router.push({ path: '/exportManage' })
        // } else {
        //   this.$router.push({ path: '/userManage' })
        // }
      }
      // this.tab_change = ''
      // setTimeout(() => {
      //   this.tab_change = event.name
      // })
    }    
  }
}
</script>

<style lang="less">
.el-header {
  padding: 0 24px;
  min-width: 1000px;
  height: 50px !important;
  background: #fff;
  /*background-image: url('../../assets/top_bg.jpg');*/
  /*background-size: 100%;*/
  color: #000;
  z-index: 100;

  .icon {
    .el-radio-group {
      margin-top: 22px;
    }

    .el-button {
      margin-top: 25px;

      i {
        font-size: 16px;
      }
    }
  }

  .right {
    display: flex;

    .user {
      color: #fff;
      font-size: 20px;
    }

    .el-menu {
      position: static;
    }
  }

  .left {
    margin-left: 10px;
    line-height: 50px;

    h3 {
      color: #fff;
      font-weight: 600;
      font-size: 20px;
      margin-left: 20px;
    }

    p {
      color: #fff;
    }

    .el-tabs {
      margin-left: 30px;
      background: none;
      border: none;
      .el-tabs__item {
        width: 120px;
        font-weight: bold;
        color: white;
        text-align: center;
      }

      .el-tabs__header {
        margin: 0px;
      }

      .el-tabs__active-bar {
        /*width: 80px!important;*/
        height: 100%;
        z-index: 0;
        background: #2b5dad;
      }

      .el-tabs__nav-wrap::after {
        display: none;
      }
    }
  }

  .logo {
    height: 80px;
    width: 150px;
    opacity: 0.8;
    /*background-color: #fff;*/
    margin-right: 50px;
    padding: 5px;

    .imgBox {
      margin-left: 35px;

      img {
        height: 60px;
      }
    }
  }

  .imgBox {
    display: flex;
    align-items: center;
    height: 100%;
    margin-top: 0px;
    float: left;

    img {
      height: 40px;
    }
  }
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
