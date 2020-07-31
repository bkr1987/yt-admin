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
        <div class="open_close" @click="change" ref="open_close_f">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEoElEQVRoQ+2YT2gcVRzHf783s24pQkmx0ELFHlqoB3tRGmskBGyVRHbnzcYxWKkexHqx6MF6stDWXsQeBHtqT1pUwrj73uxiglhwjVqjUAUvPRS0ULBgQFYQ2XRn5ievvJWXyYZuZmYJgZ3j23lvvp/fn/f7/RZhkz+4yfXDEGCjPTj0wNADGS0wDKGMBsy8PbUHHMd5hDE2S0S/tFqtV5rNZruXGtd1zxHRi4j4phAiyKw4cUBqAM75e4j4tjqPiK4UCoVnfd+/kzyfcx4hIhJRSESTQRBcyRMiNYDyACIuIuJWDTHXarWcZrMZmgI5518h4mG91o6i6Jl6vb6QF0RqACWgXC6PW5b1JQBs0RCyUCg85/t+1BXoed72MAy/B4D9+p1/AWBcSnktD4hMAEqA4ziHEXEeEW0tcFZKeRQA4q7AycnJHcVi8Soi7tVrfwPAISHE9awQmQGUAM45R8TPAcDSEJellC+r9OgKnJqa2lksFhcB4CG9thSG4Wij0fg9C0QuANoTM4j4mUpYLeiSEOK4Ka5Sqewmoh8AYLcGvcUYG63VarfTQuQGoAS4rvsqAFw0xJwXQpxMJPUeRPy2CwEAN9rt9tj8/PxSGohcAXQ4vY6IH3bFENEZKeXpHhDKEzv1+nXbtg/5vq9yY11P7gAa4hQinjWUnBRCnDeVlcvlvZZlXQWAHTqcrkVRNN5oNNQt1fczEAAdTu8DwFuGJ05IKS+Yykql0n4FgYgjen3Btu0jPQrimkADA9AQKh9UXtx9iOglKeVlU40uiN90IYioZ0Fci2CgAACAnPOPEPGYFhDHcXw0CILZJARjTCX2Ng0qpZTTZi3ZKAD1XcY5V4XuaS1C9UYHa7Xaz4mceIwx9lP3Giaii1LK1+6VDIP2gGo3DliWpVqJ+7WYX23bHvN9/x9D3ApPEREprwkhPtlQANd1HwaA7wBguxairssnfd//yxTmuu6KXAGA40KIS/cSr34fmAemp6f3xXGsLN+9Jm8uLy8fTBYs13WTt9UpKeW5fsQPDMBxnAcZYz8CwC4t5HYcx6NBENwyhXHO30HEd41b6oKU8kS/4gcCUKlUdsVxrO72PVrIEmNsrFqt3kiIX1GxAWBV79QPSK4hpHt/1XHu0x/v2TZzzo8h4seG5VUL/oLZvfYjPlcPeJ63LQxDNWkd0Hd5z8HFcZwZxtin6nrV780VCoWyOQT1Kz43gFKptNWyrAVEfFR//E4URUeSo2NybgCAdbcOSbjMITQxMbFlZGREjZXj2qJqeHeCIJgzP5ac3ABgMQzDp9bbvOUK4HnefZ1O5wtjaI+JaFr1AYkqu2J2BoBexWw9kfP/u6k94Hme1el06og4ZSTjqmaNc67CSoXX3X8v1ABj2/bjyWKWSn2WQsY5fwMRPzDEr2qX1W+u6/7RrQdEdJMx9kSWETK3EDIBiOi0lPJMLytyzpcQ8QEA6FnM0lq+uy91CCnvOY7zPBH9Wa/Xv15LCOd8EgBmLMs6W61Wf8sqODcP5C0k7XlZPJD2m7nuGwLkas4Uhw09kMJouW4ZeiBXc6Y4bOiBFEbLdcum98B/7p/hQEwMoGsAAAAASUVORK5CYII=" alt="" ref="open_close_c">
        </div>
        <div style="width: 200px;background: #081832;transition: all 0.5s" ref="menu_forList">
          <el-aside>左侧导航</el-aside>
        </div>
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
    },
    // 左侧导航隐藏
    change () {
      this.isCollapse = !this.isCollapse
      if (this.isCollapse == false) {
        this.$refs.open_close_f.style.left = '200px'
        this.$refs.menu_forList.style.width = '200px'
        this.$refs.open_close_c.style.transform = 'rotate(-180deg)'
        this.width = '200px'
      } else {
        this.width = '64px'
        this.$refs.open_close_f.style.left = '64px'
        this.$refs.menu_forList.style.width = '64px'
        this.$refs.open_close_c.style.transform = 'rotate(0deg)'
      }
    }
  }
}
</script>

<style lang="less">
.el-container {
  min-height: 500px;
}

.open_close {
  display: flex;
  align-items: center;
  position: absolute;
  left: 200px;
  top: 50%;
  margin: auto;
  transform: translate(0%, -100%);
  width: 30px;
  height: 60px;
  background: rgba(0, 0, 0, 0.1);
  z-index: 100;
  cursor: pointer;
  transition: all 0.5s;

  img {
    width: 100%;
    transform: rotate(180deg);
    animation: move_left 1s linear infinite;
  }
}
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
  // background-color: #d3dce6;
  width: 200px!important;
  color: #fff;
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
