<template>
    <el-dialog :visible="value" @update:visible="$emit('input', $event)" custom-class="video-dialog" append-to-body modal-append-to-body>
        <div>
            <videoPlayer
                ref="videoPlayer"
                :options="playerOptions"
                @play="onPlayerPlay($event)"
                @pause="onPlayerPause($event)"
                @ended="onPlayerEnded($event)"
                @loadeddata="onPlayerLoadeddata($event)"
                @waiting="onPlayerWaiting($event)"
                @playing="onPlayerPlaying($event)"
                @timeupdate="onPlayerTimeupdate($event)"
                @canplay="onPlayerCanplay($event)"
                @canplaythrough="onPlayerCanplaythrough($event)"
                @ready="playerReadied"
                @statechanged="playerStateChanged($event)"
            ></videoPlayer>
        </div>
    </el-dialog>
</template>

<script>
// require styles
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';
export default {
    name: 'video-dialog',
    components: {
        videoPlayer,
    },
    props: {
        value: null,
    },
    data() {
        return {
            playerOptions: {
                height: '700',
                autoplay: true,
                language: 'zh-CN',
                sources: [
                    {
                        type: 'video/mp4',
                        // mp4
                        src: 'http://vjs.zencdn.net/v/oceans.mp4',
                        // webm
                        // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    },
                ],
                poster: 'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg',
            },
        };
    },
    computed: {
        player() {
            return this.$refs.videoPlayer.player;
        },
    },
    methods: {
        // listen event
        onPlayerPlay(player) {
            // console.log('player play!', player)
        },
        onPlayerPause(player) {
            // console.log('player pause!', player)
        },
        onPlayerEnded(player) {
            // console.log('player ended!', player)
        },
        onPlayerLoadeddata(player) {
            // console.log('player Loadeddata!', player)
        },
        onPlayerWaiting(player) {
            // console.log('player Waiting!', player)
        },
        onPlayerPlaying(player) {
            // console.log('player Playing!', player)
        },
        onPlayerTimeupdate(player) {
            // console.log('player Timeupdate!', player.currentTime())
        },
        onPlayerCanplay(player) {
            // console.log('player Canplay!', player)
        },
        onPlayerCanplaythrough(player) {
            // console.log('player Canplaythrough!', player)
        },
        // or listen state event
        playerStateChanged(playerCurrentState) {
            // console.log('player current update state', playerCurrentState)
        },
        // player is ready
        playerReadied(player) {
            // seek to 10s
            console.log('example player 1 readied', player);
            player.currentTime(10);
            // console.log('example 01: the player is readied', player)
        },
    },
    mounted() {},
};
</script>

<style lang="less">
.video-dialog {
    width: 85% !important;
    height: 800px !important;
    & .el-dialog__body {
        padding: 0;
        .video-js {
            width: 100% !important;
            height: 800px;
        }
    }
    & .el-dialog__header {
        display: none;
    }
    & .el-dialog__footer {
        display: none;
    }
}
</style>
