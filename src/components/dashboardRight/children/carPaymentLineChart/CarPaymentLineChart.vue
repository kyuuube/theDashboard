<template>
    <div class="kc-dashboard-box-item-bottom car-payment-line-chart">
        <div class="chart-box">
            <div
                id="car-payment-line-chart"
                v-loading="loading"
                element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.1)"
            ></div>
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
    },
    legend: {
        textStyle: {
            color: 'rgba(143, 168, 201, 1)',
            fontSize: utils.nowSize(10),
        },
        left: '0%',
        data: ['髋关节', '膝关节', '踝关节'],
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
        data: ['0s', '20s', '40s', '60s', '80s', '100s'],
    },
    yAxis: {
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
            formatter: '{value} °',
        },
        axisLine: {
            lineStyle: {
                color: '#222C67',
            },
        },
        splitLine: {
            lineStyle: {
                color: '#222C67',
            },
        },
    },
    series: [
        {
            name: '髋关节',
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
            data: [40, 20, 30, 4, -90, -60, -76, -8],
            type: 'line',
            smooth: true,
        },
        {
            name: '膝关节',
            showSymbol: false,
            lineStyle: {
                color: '#2cb7c4',
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
                            color: 'rgba(44, 183, 192, .8)',
                        },
                        {
                            offset: 0.8,
                            color: 'rgba(44, 183, 192, .2)',
                        },
                    ],
                    false
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            },
            itemStyle: {
                color: '#255BDA',
                borderColor: 'rgba(93, 112, 146, 1)',
                borderWidth: 12,
            },
            data: [12, 20, 100, 40, -5, -60, -44, -68],
            type: 'line',
            smooth: true,
        },
        {
            name: '踝关节',
            showSymbol: false,
            lineStyle: {
                color: '#b4bcbd',
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
                            color: 'rgba(180, 188, 189, .8)',
                        },
                        {
                            offset: 0.8,
                            color: 'rgba(180, 188, 189, .2)',
                        },
                    ],
                    false
                ),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
            },
            itemStyle: {
                color: '#255BDA',
                borderColor: 'rgba(93, 112, 146, 1)',
                borderWidth: 12,
            },
            data: [20, 40, 50, 40, -25, -66, -23, -1],
            type: 'line',
            smooth: true,
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
    },
};
</script>

<style lang="less">
@import 'index';
</style>
