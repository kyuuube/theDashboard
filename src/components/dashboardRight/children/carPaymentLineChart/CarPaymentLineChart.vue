<template>
    <div class="kc-dashboard-box-item-bottom car-payment-line-chart">
        <div class="chart-box">
            <div class="chart-box-title">临停收费</div>
            <div id="car-payment-line-chart"
                 v-loading='loading'
                 element-loading-text="拼命加载中"
                 element-loading-spinner="el-icon-loading"
                 element-loading-background="rgba(0, 0, 0, 0.1)"></div>
        </div>
    </div>
</template>

<script>
import { CarPaymentLineChart } from '@/mixins/rightChart/carPaymentLineChart';
export default {
    name: 'car-payment-line-chart',
    mixins: [CarPaymentLineChart],
    mounted() {
        this.$eventBut.$on('selectChange', () => {
            this.loadTemporaryParkingFees()
        })
    }
};
</script>

<style lang="less">
@import 'index';
</style>
