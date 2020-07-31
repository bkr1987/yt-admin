<template>
  <div id="threaten">
    <el-row :gutter="10">
      <el-col :span="8">
        <div class="bg-purple">
          <div class="title">威胁等级</div>
          <div class="chart-one">
            <div id="myChartHu" style="width: 100%; height: 300px;"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="bg-purple">
          <div class="title">威胁事件类型</div>
          <div class="chart-two">图表2</div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="bg-purple">
          <div class="title">服务器状态</div>
          <div class="chart-three">图表3</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    props: ['time_ctl'],
    data () {
        return {
            theme:'',
            valueNum: 2,
            name: '中危',
            titleColor: '#000',
            color: '#5bb168',
            type: 'pie',
            gradeList: [
                {min: "0", max: "1.0"},
                {min: "1.1", max: "2.0"},
                {min: "2.1", max: "3.0"},
            ]
        }
    },
    mounted () {
      this.drawChartHu()  
    },
    methods: {
        //威胁等级echarts
        drawChartHu () {
            let myChartHu = this.$echarts.init(document.getElementById('myChartHu'))
            var data = { value: this.valueNum }
            var min = 0, max = 3;
            data.name = (data.value / (max - min) * 100).toFixed(2) + '%'
            if(this.valueNum <= 1.0) {
                this.name = '低危'
                this.color = '#5bb168'
                this.titleColor = '#56a962'
            } else if(this.valueNum > 2.0) {
                this.name = '高危'
                this.color = '#e46060'
                this.titleColor = '#e05c5c'
            } else {
                this.name = '中危'
                this.color = '#f3a64b'
                this.titleColor = '#eca249'
            }
            let option = {
                series: [
                {
                    name: '1',
                    type: 'gauge',
                    center: ['50%', '55%'], // 默认全局居中
                    radius: '80%',
                    min: 0,
                    max: 3,
                    splitNumber: 10,
                    axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [
                        [data.value / max, this.color],//根据实际数据动态改变
                        [1, '#DCDDDD'],
                        ],
                        width: 25, //半径
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 1
                    }
                    },
                    pointer: {
                    show:false
                    },
                    axisLabel: {
                    // show:false,
                    // 坐标轴小标记
                    textStyle: { // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: 'transparent', //刻度数字颜色 隐藏
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                    },
                    axisTick: { // 坐标轴小标记
                    length: 12, // 属性length控制线长
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: 'transparent', //坐标轴 小刻度线颜色
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                    },
                    splitLine: { // 分隔线
                    length: 20, // 属性length控制线长
                    lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                        width: 3,
                        color: 'transparent', //分割线
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                    },
                    title: {
                    textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: '550',
                        fontStyle: 'normal',
                        fontSize: 30,
                        color: this.titleColor,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                    },
                    detail: { //show : true ,
                    borderColor: '#fff',
                    shadowColor: '#fff', //默认透明
                    textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 25,
                        color: this.color
                    },
                    formatter: '{value}'
                    },
                    data: [
                    { value: this.valueNum, name: this.name }
                    ]
                }
                ]
            }
            myChartHu.setOption(option)
            window.addEventListener("resize", function () {
                myChartHu.resize();
            })
        }
    }
}
</script>