<template>
    <div class="kc-dashboard-box-right">
        <div class="box-right-header">
            <div class="layer22 flex-col">
                <div class="wrap10 flex-row">
                    <div class="bd7 flex-col">
                        <div class="block3 flex-row">
                            <div class="group25 flex-col"></div>
                            <div class="group26 flex-col"></div>
                            <div class="group27 flex-col"></div>
                            <div class="group28 flex-col"></div>
                            <div class="group29 flex-col"></div>
                            <div class="group30 flex-col"></div>
                            <div class="group31 flex-col"></div>
                            <div class="group32 flex-col"></div>
                            <div class="group33 flex-col"></div>
                            <div class="group34 flex-col"></div>
                            <div class="group35 flex-col"></div>
                            <div class="group36 flex-col"></div>
                            <div class="group37 flex-col"></div>
                            <div class="group38 flex-col"></div>
                            <div class="group39 flex-col"></div>
                            <div class="group40 flex-col"></div>
                            <div class="group41 flex-col"></div>
                            <div class="group42 flex-col"></div>
                            <div class="group43 flex-col"></div>
                        </div>
                        <div class="block4 flex-row">
                            <div class="outer7 flex-col"></div>
                            <div class="outer8 flex-col"></div>
                            <div class="outer9 flex-col"></div>
                            <div class="outer10 flex-col"></div>
                            <div class="outer11 flex-col"></div>
                            <div class="outer12 flex-col"></div>
                            <div class="outer13 flex-col"></div>
                            <div class="outer14 flex-col"></div>
                            <div class="outer15 flex-col"></div>
                            <div class="outer16 flex-col"></div>
                            <div class="outer17 flex-col"></div>
                            <div class="outer18 flex-col"></div>
                            <div class="outer19 flex-col"></div>
                            <div class="outer20 flex-col"></div>
                            <div class="outer21 flex-col"></div>
                            <div class="outer22 flex-col"></div>
                            <div class="outer23 flex-col"></div>
                            <div class="outer24 flex-col"></div>
                        </div>
                        <div class="block5 flex-row">
                            <div class="mod13 flex-col"></div>
                            <div class="mod14 flex-col"></div>
                            <div class="mod15 flex-col"></div>
                            <div class="mod16 flex-col"></div>
                            <div class="mod17 flex-col"></div>
                            <div class="mod18 flex-col"></div>
                            <div class="mod19 flex-col"></div>
                            <div class="mod20 flex-col"></div>
                            <div class="mod21 flex-col"></div>
                            <div class="mod22 flex-col"></div>
                            <div class="mod23 flex-col"></div>
                            <div class="mod24 flex-col"></div>
                            <div class="mod25 flex-col"></div>
                            <div class="mod26 flex-col"></div>
                            <div class="mod27 flex-col"></div>
                            <div class="mod28 flex-col"></div>
                            <div class="mod29 flex-col"></div>
                            <div class="mod30 flex-col"></div>
                        </div>
                    </div>
                    <div class="bd8 flex-col"><div class="main15 flex-col"></div></div>
                </div>
                <div class="wrap11 flex-row">
                    <img class="icon2" referrerpolicy="no-referrer" :src="leftArrowUrl" />
                    <span class="word12">综合示范</span>
                    <img class="label4" referrerpolicy="no-referrer" :src="rightArrowUrl" />
                </div>
                <div class="wrap12 flex-col"></div>
            </div>
        </div>
        <div class="box-right-body">
            <div class="group">
                <title-warp order="1">
                    <span>训练者选择</span>
                    <div slot="button">
                        <img @click="delInfo" :src="delUrl" alt="" />
                    </div>
                </title-warp>
                <div class="select-item">
                    <el-date-picker
                        @change="pickDate"
                        size="small"
                        v-model="date"
                        type="date"
                        value-format="yyyy-MM-DD"
                        placeholder="选择日期"
                    >
                    </el-date-picker>
                </div>
                <div class="select-item">
                    <el-select v-model="people" placeholder="请选择" size="small">
                        <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item"> </el-option>
                    </el-select>
                </div>
            </div>
            <div class="group">
                <title-warp order="2">训练者信息</title-warp>
                <InfoGroupTwo>
                    <div class="layer29 flex-row">
                        <span class="word14">姓名</span>
                        <span class="txt8">性别</span>
                        <span class="word15">年龄</span>
                    </div>
                    <div class="layer30 flex-row">
                        <span class="word16">{{ (people && people.name) || '' }}</span>
                        <span class="txt9">{{ (people && people.sex) || '' }}</span>
                        <span class="info8">{{ (people && people.age) || '' }}</span>
                    </div>
                    <div class="layer31 flex-row">
                        <span class="info9">身高</span>
                        <span class="info10">健康状况</span>
                        <span class="word17">职业</span>
                    </div>
                    <div class="layer32 flex-row">
                        <span class="word18">{{ (people && people.height + 'cm') || '' }}</span>
                        <span class="txt10">{{ (people && people.health) || '' }}</span>
                        <span class="word19">{{ (people && people.profession) || '' }}</span>
                    </div>
                    <div class="layer33 flex-row">
                        <span class="txt11">工作单位</span>
                        <span class="word20">备注</span>
                    </div>
                    <div class="layer34 flex-row">
                        <span class="word21">{{ (people && people.work) || '' }}</span>
                        <span class="word22">{{ (people && people.remark) || '' }}</span>
                    </div>
                </InfoGroupTwo>
            </div>
            <div class="group">
                <title-warp order="3">训练者下肢关节角度训练结果</title-warp>
                <CarPaymentLineChart />
            </div>
        </div>
    </div>
</template>

<script>
// apis
import * as api from '../../apis/api';
// components
import TitleWarp from '../titleWarp/TitleWarp';
import InfoGroupTwo from '../infoGroup/InfoGroup2';
import CarPaymentLineChart from './children/carPaymentLineChart/CarPaymentLineChart';
export default {
    name: 'dashboard-right',
    components: {
        TitleWarp,
        InfoGroupTwo,
        CarPaymentLineChart,
    },
    data() {
        return {
            date: null,
            people: null,
            options: [
                {
                    age: 0,
                    createTime: 'string',
                    health: 'string',
                    hight: 0,
                    id: 0,
                    name: 'string',
                    profession: 'string',
                    remark: 'string',
                    sex: 'string',
                    work: 'string',
                },
                {
                    age: 0,
                    createTime: 'string',
                    health: 'string',
                    hight: 0,
                    id: 2,
                    name: 'string',
                    profession: 'string',
                    remark: 'string',
                    sex: 'string',
                    work: 'string',
                },
            ],
            leftArrowUrl: require('../../assets/images/leftArrow.png'),
            rightArrowUrl: require('../../assets/images/rightArrow.png'),
            delUrl: require('../../assets/images/del.png'),
        };
    },
    methods: {
        async delInfo() {
            const confirm = await this.$msgbox
                .confirm('删除训练者信息会清空该训练者的训练信息！请谨慎操作。', '确认要删除这个训练者吗？', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                })
                .then(() => true)
                .catch(() => false);
            if (!confirm) {
                return;
            }
            this.date = null
            this.people = null
        },
        async pickDate() {
            const { result } = await this.$fetch(api.getUserByDate, { date: this.date }).catch((e) => e);
            console.log(result)
            this.options = result
        },
    },
};
</script>

<style lang="less">
@import 'index';
.el-message-box {
    background: #08316a !important;
    box-shadow: 0px 12px 48px 16px rgb(0 0 0 / 12%), 0px 9px 28px 0px rgb(0 0 0 / 20%), 0px 6px 16px -8px rgb(0 0 0 / 32%) !important;
    border-radius: 2px !important;
    border: none !important;
    .el-message-box__title {
        color: rgba(255, 255, 255, 0.85);
        font-size: 16px;
    }
    .el-message-box__message {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.65);
    }
}
.el-picker-panel {
    background-color: #283a61 !important;
    color: #848892 !important;
    border: none !important;
}
.el-date-picker__header .el-date-picker__header-label,
.el-date-picker__header button {
    color: #ffffff !important;
}
.el-date-table th {
    color: #606266;
    border-bottom: solid 1px #5c6477;
}
.el-select-dropdown {
    background-color: rgba(40, 58, 97, 1) !important;
    border: none !important;
    padding: 0;
    .el-select-dropdown__item {
        color: rgba(143, 168, 201, 1);
    }
}
.el-select-dropdown__item.hover,
.el-select-dropdown__item:hover {
    background-color: #415a90 !important;
}
.el-popper .popper__arrow::after,
.el-popper .popper__arrow {
    border-bottom-color: rgba(40, 58, 97, 1) !important;
}
</style>
