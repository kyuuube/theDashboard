<template>
    <div class="kc-dashboard-box-item community-chart-left">
        <payment-number-box />
        <div id="community-number-line-chart"
             v-loading='topLoading'
             element-loading-text="拼命加载中"
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.1)"></div>
        <div id="community-percent-line-chart"
             v-loading='botLoading'
             element-loading-text="拼命加载中"
             element-loading-spinner="el-icon-loading"
             element-loading-background="rgba(0, 0, 0, 0.1)"></div>
    </div>
</template>

<script>
// components
import PaymentNumberBox from '../paymentNumberBox/PaymentNumberBox';
// mixins
import { CommunityNumberLineChart } from '@/mixins/rightChart/communityNumberLineChart';
import { CommunityPercentLineChart } from '@/mixins/rightChart/communityPercentLineChart';
export default {
    name: 'community-chart',
    mixins: [CommunityNumberLineChart, CommunityPercentLineChart],
    components: {
        PaymentNumberBox,
    },
    mounted() {
        this.$eventBut.$on('selectChange', () => {
            this.loadCommunityTopLineChart()
            this.loadCommunityBotLineChart()
        })
    }
};
</script>

<style lang="less">
@import 'index';
</style>
