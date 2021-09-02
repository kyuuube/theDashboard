<template>
    <div class="payment-number-box">
        <div class="payment-number-box-top">
            <div class="box">
                <span class="text">今日收费金额</span><span class="number">{{ $utils.toThousands(dailyTotalAmount) }}</span
                ><span class="text">元</span>
            </div>
            <div class="box" v-if="current === 1">
                <span class="legend">达标</span>
                <span class="legend yellow">未达标</span>
            </div>
        </div>
        <div class="payment-number-box-bottom">
            <div class="tab" :key="index" v-for="(tab, index) in tabs">
                <div class="text">{{ tab.label }}</div>
                <div class="number">{{ tab.value || 0 }}</div>
            </div>
        </div>
    </div>
</template>

<script>
// apis
import { loadTotalDailyRevenue, loadAnnualRevenueData } from '@/apis/baseInfo/baseInfoApi';
// store
import { mapGetters } from 'vuex';
import * as $account from '@/store/modules/account/types';
export default {
    name: 'payment-number-box',
    props: {
        boxType: {
            default: 1,
            type: Number,
        },
    },
    data() {
        return {
            boxNumber: null,
            dailyTotalAmount: 0,
            tabs: [
                { label: '本年收缴率', value: '' },
                { label: '本年应收', value: '' },
                { label: '本年已收', value: '' },
            ],
        };
    },
    computed: {
        ...mapGetters($account.namespace, {
            current: $account.getters.level,
        }),
    },
    watch: {
        boxType() {
            // 收缴率
            if (this.boxType === 1) {
                this.tabs[0].label = '本年收缴率';
                this.tabs[1].label = '本年应收';
                this.tabs[2].label = '本年已收';
                this.tabs[0].value =
                    this.boxNumber.receivable && this.boxNumber.received
                        ? this.$utils.strip((this.boxNumber.received / this.boxNumber.receivable) * 100) + '%'
                        : '0%';
                this.tabs[1].value = Math.round(this.boxNumber.receivable) || '0';
                this.tabs[2].value = Math.round(this.boxNumber.received) || '0';
            }
            // 清欠率
            if (this.boxType === 2) {
                this.tabs[0].label = '本年清欠率';
                this.tabs[1].label = '往期应收';
                this.tabs[2].label = '往期已收';
                this.tabs[0].value =
                    this.boxNumber.debtReceivable && this.boxNumber.debtReceived
                        ? this.$utils.strip((this.boxNumber.debtReceived / this.boxNumber.debtReceivable) * 100) + '%'
                        : '0%';
                this.tabs[1].value = Math.round(this.boxNumber.debtReceivable) || '0';
                this.tabs[2].value = Math.round(this.boxNumber.debtReceived) || '0';
            }
        },
    },
    methods: {
        async loadDailyTotalAmount() {
            const { result } = await this.$fetch(loadTotalDailyRevenue);
            this.dailyTotalAmount = result.amount;
        },
        async loadAnnual() {
            const { result } = await this.$fetch(loadAnnualRevenueData);
            this.boxNumber = result;
            this.$emit('update:boxType', 1);
            this.tabs[0].value =
                result.receivable && result.received ? this.$utils.strip((result.received / result.receivable) * 100) + '%' : '0%';
            this.tabs[1].value = Math.round(result.receivable) || '0';
            this.tabs[2].value = Math.round(result.received) || '0';
        },
    },
    mounted() {
        this.loadDailyTotalAmount();
        this.loadAnnual();
        setInterval(() => {
            this.loadDailyTotalAmount();
            this.loadAnnual();
        }, this.$delay);
        this.$eventBut.$on('selectChange', () => {
            this.loadDailyTotalAmount();
            this.loadAnnual();
        });
    },
};
</script>

<style lang="less">
@import 'index';
</style>
