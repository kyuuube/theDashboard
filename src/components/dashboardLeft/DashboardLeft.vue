<template>
    <div class="kc-dashboard-box-left">
        <div class="box-left-header">
            <div class="mod1 flex-col">
                <div class="bd2 flex-row">
                    <div class="wrap1 flex-col"><div class="wrap2 flex-col"></div></div>
                    <div class="wrap3 flex-col">
                        <div class="wrap4 flex-row">
                            <div class="group3 flex-col"></div>
                            <div class="group4 flex-col"></div>
                            <div class="group5 flex-col"></div>
                            <div class="group6 flex-col"></div>
                            <div class="group7 flex-col"></div>
                            <div class="group8 flex-col"></div>
                            <div class="group9 flex-col"></div>
                            <div class="group10 flex-col"></div>
                            <div class="group11 flex-col"></div>
                            <div class="group12 flex-col"></div>
                            <div class="group13 flex-col"></div>
                            <div class="group14 flex-col"></div>
                            <div class="group15 flex-col"></div>
                            <div class="group16 flex-col"></div>
                            <div class="group17 flex-col"></div>
                            <div class="group18 flex-col"></div>
                            <div class="group19 flex-col"></div>
                            <div class="group20 flex-col"></div>
                            <div class="group21 flex-col"></div>
                        </div>
                        <div class="wrap5 flex-row">
                            <div class="layer1 flex-col"></div>
                            <div class="layer2 flex-col"></div>
                            <div class="layer3 flex-col"></div>
                            <div class="layer4 flex-col"></div>
                            <div class="layer5 flex-col"></div>
                            <div class="layer6 flex-col"></div>
                            <div class="layer7 flex-col"></div>
                            <div class="layer8 flex-col"></div>
                            <div class="layer9 flex-col"></div>
                            <div class="layer10 flex-col"></div>
                            <div class="layer11 flex-col"></div>
                            <div class="layer12 flex-col"></div>
                            <div class="layer13 flex-col"></div>
                            <div class="layer14 flex-col"></div>
                            <div class="layer15 flex-col"></div>
                            <div class="layer16 flex-col"></div>
                            <div class="layer17 flex-col"></div>
                            <div class="layer18 flex-col"></div>
                        </div>
                        <div class="wrap6 flex-row">
                            <div class="section1 flex-col"></div>
                            <div class="section2 flex-col"></div>
                            <div class="section3 flex-col"></div>
                            <div class="section4 flex-col"></div>
                            <div class="section5 flex-col"></div>
                            <div class="section6 flex-col"></div>
                            <div class="section7 flex-col"></div>
                            <div class="section8 flex-col"></div>
                            <div class="section9 flex-col"></div>
                            <div class="section10 flex-col"></div>
                            <div class="section11 flex-col"></div>
                            <div class="section12 flex-col"></div>
                            <div class="section13 flex-col"></div>
                            <div class="section14 flex-col"></div>
                            <div class="section15 flex-col"></div>
                            <div class="section16 flex-col"></div>
                            <div class="section17 flex-col"></div>
                            <div class="section18 flex-col"></div>
                        </div>
                    </div>
                </div>
                <div class="bd3 flex-row">
                    <img class="label1" referrerpolicy="no-referrer" :src="leftArrowUrl" />
                    <span class="txt3">可穿戴式下肢行走椅外骨骼介绍</span>
                    <img class="label2" referrerpolicy="no-referrer" :src="rightArrowUrl" />
                </div>
                <div class="bd4 flex-col"></div>
            </div>
        </div>
        <div class="box-left-body">
            <div class="group">
                <title-warp order="1">文字介绍</title-warp>
                <info-group-one title="【产品名称】" description="可穿戴式下肢行走椅外骨骼" />
                <info-group-one title="【主要结构】" description="由大小腿U型穿戴环、膝关节、踝关节、大小腿杆、绑带等部分组成。" />
            </div>
            <button-divider @click.native="showDescriptionDialog = true" />
            <div class="group">
                <title-warp order="2">训练示范图</title-warp>
                <div class="tips">
                    <span>点击图片放大查看</span>
                    <div class="line"></div>
                </div>
                <div class="group-pictures">
                    <div class="picture-item" :key="index" v-for="(item, index) in pictureList">
                        <div class="images-warp" @click="preview(item)">
                            <img :src="item.url" :alt="item.name" />
                            <div class="mask"></div>
                        </div>
                        <span class="caption">{{ item.name }}</span>
                    </div>
                </div>
            </div>
            <div class="group">
                <title-warp order="3">训练示范视频</title-warp>
                <div class="video-preview" @click="showVideoDialog = true">
                    <div class="mask" />
                    <img :src="previewUrl" alt="" />
                </div>
            </div>
        </div>
        <video-dialog v-if="showVideoDialog" v-model="showVideoDialog"></video-dialog>
        <description-dialog v-if="showDescriptionDialog" v-model="showDescriptionDialog"></description-dialog>
    </div>
</template>

<script>
// components
import TitleWarp from '../titleWarp/TitleWarp';
import InfoGroupOne from '../infoGroup/InfoGroup1';
import ButtonDivider from '../divider/ButtonDivider';
import VideoDialog from './components/VideoDialog';
import DescriptionDialog from './components/DescriptionDialog';
// utils
import viewer from '../../utils/viewer';
export default {
    name: 'dashboard-left',
    components: {
        InfoGroupOne,
        ButtonDivider,
        TitleWarp,
        VideoDialog,
        DescriptionDialog,
    },
    data() {
        return {
            pictureList: [
                {
                    url: require('../../assets/images/item.png'),
                    name: '侧面',
                },
                {
                    url: require('../../assets/images/item.png'),
                    name: '侧面',
                },
                {
                    url: require('../../assets/images/item.png'),
                    name: '侧面',
                },
                {
                    url: require('../../assets/images/item.png'),
                    name: '侧面',
                },
            ],
            leftArrowUrl: require('../../assets/images/leftArrow.png'),
            rightArrowUrl: require('../../assets/images/rightArrow.png'),
            previewUrl: require('../../assets/images/preview.png'),
            showVideoDialog: false,
            showDescriptionDialog: false,
        };
    },
    methods: {
        viewer,
        preview(item) {
            this.viewer({ src: item.url, srcs: this.pictureList.map((i) => i.url) });
        },
    },
};
</script>

<style lang="less">
@import 'index';
</style>
