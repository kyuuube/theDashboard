<template>
  <div class="info-group2 flex-col">
      <div class="block1"></div>
      <div class="block2"></div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'info-group-two',
}
</script>

<style lang="less">
.info-group2 {
  position: relative;
  z-index: 93;
  height: 250px;
  //background: url(~@/assets/images/infoGroupBG1.png) -1px -1px no-repeat;
  border: 1px solid #62A5FF;
  align-self: center;
  margin-top: 16px;
  width: 472px;
  background-size: cover;
  .info-group1-title {
    margin-top: 6px;
    text-indent: 6px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #62A5FF;
  }
  .info-group1-description {
    margin-top: 10px;
    text-indent: 26px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #8FA8C9;
  }
    .block1 {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 94;
      width: 6px;
      height: 6px;
      background-color: rgba(255, 102, 75, 1);
    }
    .block2 {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 95;
      width: 6px;
      height: 6px;
      background-color: rgba(255, 102, 75, 1);
  }
}
</style>