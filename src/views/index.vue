<template>
    <div class="kc-dashboard" v-if="init">
        <dashboard-header />
        <div class="kc-dashboard-container">
            <dashboard-left />
            <dashboard-middle />
            <dashboard-right />
        </div>
        <img class="bottom-picture" :src="bottomPicture" alt="" />
    </div>
</template>

<script>
// components
import DashboardHeader from '@/components/dashboardHeader/DashboardHeader';
import DashboardLeft from '@/components/dashboardLeft/DashboardLeft';
import DashboardMiddle from '@/components/dashboardMiddle/DashboardMiddle';
import DashboardRight from '@/components/dashboardRight/DashboardRight';
export default {
    name: 'Home',
    components: {
        DashboardHeader,
        DashboardLeft,
        DashboardMiddle,
        DashboardRight,
    },
    data() {
        return {
            init: true,
            bottomPicture: require('../assets/images/middleBg.png'),
        };
    },
    async created() {},
};
</script>

<style lang="less">
@import 'index';
</style>
