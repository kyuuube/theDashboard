<template>
    <div class="info-group-three flex-col">
        <div class="box1 flex-row">
            <div class="block1 flex-col"></div>
        </div>
        <div class="box2 flex-row">
            <div class="block2 flex-col"></div>
        </div>
        <div class="info-group1-title">{{ title }}</div>
        <div class="info-group1-description">{{ description }}</div>
    </div>
</template>

<script>
export default {
    name: 'info-group-three',
    props: {
        title: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
    },
};
</script>

<style lang="less">
.info-group-three {
    background-image: url(~@/assets/images/infoGroupBg3.png);
    background-repeat: no-repeat;
    background-position: -1px -1px;
    background-size: cover;
    z-index: 433;
    height: 73px;
    align-self: center;
    margin-bottom: 24px;
    width: 942px;
    .info-group1-title {
        margin-top: 6px;
        text-indent: 6px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #62a5ff;
    }
    .info-group1-description {
        margin-top: 10px;
        text-indent: 26px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #8fa8c9;
    }
    .box1 {
        z-index: auto;
        width: 6px;
        height: 6px;
        margin-top: 67px;
        .block1 {
            z-index: 94;
            width: 6px;
            height: 6px;
            background-color: rgba(255, 102, 75, 1);
        }
    }
    .box2 {
        z-index: auto;
        width: 6px;
        height: 6px;
        margin: -73px 0 0 936px;
        .block2 {
            z-index: 95;
            width: 6px;
            height: 6px;
            background-color: rgba(255, 102, 75, 1);
        }
    }
}
</style>
