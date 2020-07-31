<template>
  <div id="homeContent">
    <!--顶部统计-->
    <div class="thingCount">thingCount组件</div>
    <!--威胁等级/威胁事件类型/服务器状态-->
    <!-- <div class="threaten">threaten组件</div> -->
    <threaten class="threaten" :time_ctl="public_data"></threaten>
    <!--威胁事件趋势-->
    <div class="lineChart">lineChart组件</div>
    <!--流量趋势趋势-->
    <div class="trafficTrend">trafficTrend组件</div>
    <!--事件源/事件目标-->
    <div class="attack">attack组件</div>
    <!--重点关注事件-->
    <div class="tableItemo">tableItemo组件</div>
    <!--最新威胁事件-->
    <div class="tableItemt">tableItemt组件</div>
  </div>
</template>

<script>
import threaten from '@/components/home/threaten'
export default {
  data () {
    return {
      public_data:{
        time:'day'
      }
    }
  },
  components: {
    threaten
  }
}
</script>

<style lang="less">
  #homeContent > div {
    height: 200px;
  }
</style>