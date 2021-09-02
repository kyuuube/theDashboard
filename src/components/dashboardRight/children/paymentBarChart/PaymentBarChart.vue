<template>
    <div class="kc-dashboard-box-item payment-bar-chart">
        <payment-number-box :box-type.sync="current" />
        <div class="chart-box">
            <div class="chart-box-title-row">
                <div class="title">年度项目排名情况</div>
                <div class="tabs">
                    <div
                        @click="changeTab(tab.value)"
                        :key="tab.value"
                        v-for="tab in tabs"
                        class="tab"
                        :class="current === tab.value ? 'active' : ''"
                    >
                        {{ tab.label }}
                    </div>
                </div>
            </div>
            <div
                id="payment-chart"
                v-loading="loading"
                element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.1)"
            ></div>
        </div>
    </div>
</template>

<script>
import PaymentNumberBox from '../paymentNumberBox/PaymentNumberBox';
import { PaymentBarChart } from '@/mixins/rightChart/paymentBarChart';
export default {
    name: 'payment-bar-chart',
    components: {
        PaymentNumberBox,
    },
    mixins: [PaymentBarChart],
    data() {
        return {
            current: 1,
            tabs: [
                {
                    label: '收缴率',
                    value: 1,
                },
                {
                    label: '清欠率',
                    value: 2,
                },
            ],
        };
    },
    methods: {
        changeTab(value) {
            this.current = value;
            this.loadRanking();
        },
    },
};
</script>

<style lang="less">
@import 'index';
</style>
