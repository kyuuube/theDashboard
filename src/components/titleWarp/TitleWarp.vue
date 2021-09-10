<template>
  <div class="title-warp">
      <div class="order">
          {{ order }}
      </div>
      <div class="title">
        <slot></slot>
      </div>
      <div class="button-warp">
        <slot name="button"></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: "title-warp",
    props: {
      order: {
        type: String,
        default: ""
      }
    }
}
</script>

<style lang="less">
.title-warp {
  position: relative;
  display: flex;
  height: 32px;
  width: 472px;
  color: #3AC4FF;
  background: rgba(98, 165, 255, .3);
  background: linear-gradient(-135deg, transparent 8px, rgba(98, 165, 255, .3) 0) top right;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  line-height: 32px;
  font-size: 16px;
  .order {
    height: 32px;
    width: 32px;
    line-height: 32px;
    text-align: center;
    background: #62A5FF;
    color: #FFFFFF;
    margin-right: 6px;
  }
  .button-warp {
    position: absolute;
    right: 20px;
    top: 50%;
    margin-top: -12px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    button {
      background: transparent;
      margin: 0;
      padding: 0;
      border: none;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>