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
            <img
                class="icon2"
                referrerpolicy="no-referrer"
                :src="leftArrowUrl"
            />
            <span class="word12">综合示范</span>
            <img
                class="label4"
                referrerpolicy="no-referrer"
                :src="rightArrowUrl"
            />
          </div>
          <div class="wrap12 flex-col"></div>
        </div>
      </div>
      <div class="box-right-body"></div>
    </div>
</template>

<script>
export default {
    name: 'dashboard-right',
    data() {
        return {
          leftArrowUrl: require('../../assets/images/leftArrow.png'),
          rightArrowUrl: require('../../assets/images/rightArrow.png')
        };
    }
};
</script>

<style lang="less">
@import 'index';
</style>
