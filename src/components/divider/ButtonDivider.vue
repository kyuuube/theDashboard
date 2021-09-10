<template>
  <div class="button-divider flex-row">
    <div class="wrap7 flex-col"></div>
    <div class="wrap8 flex-col"><span class="info2">了解详情</span></div>
    <div class="wrap9 flex-col"></div>
  </div>
</template>

<script>
export default {
    name: "button-divider"
}
</script>

<style lang="less">
.button-divider {
  z-index: auto;
  width: 472px;
  height: 32px;
  justify-content: space-between;
  margin: 16px 0 0 0;
.wrap7 {
  z-index: 107;
  width: 160px;
  height: 4px;
  background: url(~@/assets/images/outer.png) -3px -3px
  no-repeat;
  margin-top: 14px;
}
.wrap8 {
  cursor: pointer;
  z-index: 105;
  height: 32px;
  border-width: 1px;
  border: 1px solid rgba(98, 165, 255, 1);
  background-color: rgba(8, 49, 106, 0.71);
  box-shadow: inset 0px 0px 4px 1px rgba(80, 148, 245, 0.7);
  width: 120px;
  justify-content: center;
  align-items: center;
.info2 {
  z-index: 106;
  width: 56px;
  display: block;
  overflow-wrap: break-word;
  color: rgba(58, 196, 255, 1);
  font-size: 14px;
  white-space: nowrap;
  line-height: 20px;
  text-align: left;
}
}
.wrap9 {
  z-index: 110;
  width: 160px;
  height: 4px;
  background: url(~@/assets/images/outer.png) -3px -3px
  no-repeat;
  margin-top: 14px;
}
}
</style>