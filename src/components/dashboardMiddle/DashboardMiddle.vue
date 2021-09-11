<template>
    <div class="kc-dashboard-box-middle">
        <div class="box-top">
            <div class="group2 flex-row">
                <div class="outer1 flex-col"></div>
                <el-upload
                    ref="uploader"
                    style="float: left; margin-left: 15px"
                    :auto-upload="true"
                    :limit="1"
                    :action="upLoadUrl"
                    :show-file-list="false"
                >
                    <el-button class="outer2 flex-col" size="small">新增训练者</el-button>
                </el-upload>
                <!--                <button @click="upload" class="outer2 flex-col">-->
                <!--                    <span class="txt2">新增训练者</span>-->
                <!--                </button>-->
                <button @click="download" class="outer3 flex-col">
                    <span class="word1">下载模板</span>
                </button>
                <div class="outer4 flex-col"></div>
            </div>
        </div>
        <div class="box-bottom">
            <div class="circle top"><div class="point"></div></div>
            <div class="circle middle"><div class="point"></div></div>
            <div class="circle bottom"><div class="point"></div></div>
            <div class="line-top"></div>
            <div class="line-middle"></div>
            <div class="line-bottom"></div>
            <div class="layer49 flex-col">
                <div class="bd10 flex-row">
                    <div class="section26 flex-col"></div>
                    <span class="info16">髋关节</span>
                    <div class="section27 flex-col"></div>
                </div>
            </div>
            <div class="layer44 flex-row">
                <div class="mod32 flex-col">
                    <div class="section24 flex-row">
                        <div class="main18 flex-col"></div>
                        <span class="txt16">膝关节</span>
                        <div class="main19 flex-col"></div>
                    </div>
                </div>
            </div>
            <div class="layer51 flex-col">
                <div class="layer52 flex-row">
                    <div class="bd11 flex-col"></div>
                    <span class="word30">踝关节</span>
                    <div class="bd12 flex-col"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dashboard-middle',
    data() {
        return {
            upLoadUrl: '/api/import',
        };
    },
    methods:{
      download() {
        let link = document.createElement('a');
        link.href = 'https://raw.githubusercontent.com/surmon-china/vue-video-player/master/examples/01-video.vue' // 创建下载的链接
        link.download = '02-video.vue'; // 下载后文件名
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click(); // 点击下载
        window.URL.revokeObjectURL(link.href); // 释放掉blob对象
        document.body.removeChild(link); // 下载完成移除元素
      }
    }
};
</script>

<style lang="less">
@import 'index';
.el-button {
    z-index: 411 !important;
    display: block;
    overflow-wrap: break-word !important;
    color: rgba(58, 196, 255, 1) !important;
    font-size: 14px !important;
    white-space: nowrap !important;
    line-height: 20px !important;
    text-align: left !important;
    border-radius: 0 !important;
}
</style>
