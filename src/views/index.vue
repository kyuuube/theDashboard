<template>
    <div class="kc-dashboard" v-if="init">
        <dashboard-header />
        <div class="kc-dashboard-container">
            <dashboard-left />
            <dashboard-middle />
            <dashboard-right />
        </div>
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
            init: false,
            levelPermission: null,
        };
    },
    async created() {
    },
};
</script>

<style lang="less">
@import 'index';
</style>
