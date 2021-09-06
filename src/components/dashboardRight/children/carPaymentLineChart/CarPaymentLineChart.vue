<template>
    <div class="kc-dashboard-box-item-bottom car-payment-line-chart">
        <div class="chart-box">
            <div id="car-payment-line-chart"
                 v-loading='loading'
                 element-loading-text="拼命加载中"
                 element-loading-spinner="el-icon-loading"
                 element-loading-background="rgba(0, 0, 0, 0.1)"></div>
        </div>
    </div>
</template>

<script>
const echarts = require('echarts');
import * as utils from '../../../../utils';
let option = {
  tooltip: {
    backgroundColor: '#000B5C',
    borderColor: '#005476', // echarts 5.0.0 边框颜色无效的问题 回退 4.9.0版本 字体大小则无法控制
    borderWidth: 1,
    trigger: 'axis',
    textStyle: {
      align: 'center',
      color: '#fff',
      fontSize: utils.nowSize(13),
    },
    borderRadius: 0,
    axisPointer: {
      snap: true,
      show: true,
      label: {
        fontFamily: 'SyhtNormal',
        fontSize: utils.nowSize(13),
        fontWeight: '400',
        color: '#ffffff',
      },
      lineStyle: {
        color: '#00EAFF',
        type: 'solid',
      },
    },
    formatter: function (params) {
      return params[0].name + '<br/>' + '收费：' + params[0].value;
    },
  },
  grid: {
    left: '5',
    top: '30',
    right: '15',
    bottom: '10',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLabel: {
      fontFamily: 'SyhtNormal',
      fontSize: utils.nowSize(13),
      fontWeight: 400,
      color: '#ffffff',
      align: 'center',
    },
    axisLine: {
      lineStyle: {
        color: '#222C67',
      },
    },
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    name: '单位:元',
    nameTextStyle: {
      fontFamily: 'SyhtNormal',
      fontSize: utils.nowSize(13),
      fontWeight: 400,
      align: 'center',
      color: '#ffffff',
    },
    type: 'value',
    axisLabel: {
      fontFamily: 'SyhtNormal',
      fontSize: utils.nowSize(13),
      fontWeight: 400,
      color: '#ffffff',
    },
    axisLine: {
      lineStyle: {
        color: '#222C67',
      },
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: '#222C67',
      },
    },
  },
  series: [
    {
      showSymbol: false,
      lineStyle: {
        color: '#280aea',
        width: 2,
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(4, 30, 113, 1)',
              },
              {
                offset: 0.8,
                color: 'rgba(0, 7, 61, 1)',
              },
            ],
            false
        ),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
      },
      itemStyle: {
        color: '#255BDA',
        borderColor: 'rgba(37, 91, 218, 1)',
        borderWidth: 12,
      },
      data: [1,2,3,4,5,6,7,8],
      type: 'line',
    },
  ],
};
let chart = null;
export default {
    name: 'car-payment-line-chart',
  data() {
    return {
      init: false,
      loading: false,

      autoActionTimer: null,
      tipsIndex: 0,
    };
  },
  mounted() {
    chart = echarts.init(document.getElementById('car-payment-line-chart'));
    window.addEventListener('resize', () => {
      chart.resize();
    });
    chart.setOption(option);
  }
};
</script>

<style lang="less">
@import 'index';
</style>
