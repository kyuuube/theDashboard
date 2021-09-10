<template>
  <el-dialog
      :visible="value"
      title="文字介绍"
      @update:visible="$emit('input', $event)"
      custom-class="description-dialog"
      append-to-body
      modal-append-to-body
  >
    <div>
      <div class="mod2 flex-row">
        <div class="mod3 flex-col">
          <div class="block1 flex-col">
            <div class="box1 flex-col"></div>
            <div class="box2 flex-col"></div>
            <div class="box3 flex-col"></div>
          </div>
        </div>
        <div class="mod4 flex-col">
          <div class="outer3 flex-row">
            <div class="bd1 flex-col"></div>
            <div class="bd2 flex-col"></div>
            <div class="bd3 flex-col"></div>
            <div class="bd4 flex-col"></div>
            <div class="bd5 flex-col"></div>
            <div class="bd6 flex-col"></div>
            <div class="bd7 flex-col"></div>
            <div class="bd8 flex-col"></div>
            <div class="bd9 flex-col"></div>
            <div class="bd10 flex-col"></div>
            <div class="bd11 flex-col"></div>
            <div class="bd12 flex-col"></div>
            <div class="bd13 flex-col"></div>
            <div class="bd14 flex-col"></div>
            <div class="bd15 flex-col"></div>
            <div class="bd16 flex-col"></div>
            <div class="bd17 flex-col"></div>
            <div class="bd18 flex-col"></div>
          </div>
          <div class="outer4 flex-row">
            <div class="main2 flex-col"></div>
            <div class="main3 flex-col"></div>
            <div class="main4 flex-col"></div>
            <div class="main5 flex-col"></div>
            <div class="main6 flex-col"></div>
            <div class="main7 flex-col"></div>
            <div class="main8 flex-col"></div>
            <div class="main9 flex-col"></div>
            <div class="main10 flex-col"></div>
            <div class="main11 flex-col"></div>
            <div class="main12 flex-col"></div>
            <div class="main13 flex-col"></div>
            <div class="main14 flex-col"></div>
            <div class="main15 flex-col"></div>
            <div class="main16 flex-col"></div>
            <div class="main17 flex-col"></div>
            <div class="main18 flex-col"></div>
            <div class="main19 flex-col"></div>
          </div>
          <div class="outer5 flex-row">
            <div class="bd19 flex-col"></div>
            <div class="bd20 flex-col"></div>
            <div class="bd21 flex-col"></div>
            <div class="bd22 flex-col"></div>
            <div class="bd23 flex-col"></div>
            <div class="bd24 flex-col"></div>
            <div class="bd25 flex-col"></div>
            <div class="bd26 flex-col"></div>
            <div class="bd27 flex-col"></div>
            <div class="bd28 flex-col"></div>
            <div class="bd29 flex-col"></div>
            <div class="bd30 flex-col"></div>
            <div class="bd31 flex-col"></div>
            <div class="bd32 flex-col"></div>
            <div class="bd33 flex-col"></div>
            <div class="bd34 flex-col"></div>
            <div class="bd35 flex-col"></div>
          </div>
        </div>
      </div>
      <info-group-one title="【产品名称】" description="可穿戴式下肢行走椅外骨骼" />
      <info-group-one title="【主要结构】" description="由大小腿U型穿戴环、膝关节、踝关节、大小腿杆、绑带等部分组成。" />
      <info-group-two title="【训练对象】">
        <p>1、工厂流水线工人、售货员、教师等需要长时间站立并且短距离移动比较频繁的工种。</p>
        <p>2、长时间站立的手术医生（如神经外科）座椅太高太低都不行，太矮了满足不了视野，高凳子满足不了无菌要求，手不能操作凳子，需自动</p>
        <p>调节弯曲角度。</p>
        <p>3、下肢腿部肌肉和膝关节受伤康复期的病人。</p>
      </info-group-two>
      <info-group-two title="【训练方法】">
        <p>以装配流水线上的工人为例，工人穿戴外骨骼，首先保持站立，然后下蹲至 60度左右蹲姿保持2秒后外骨骼自锁，人体放松、工人体重大部</p>
        <p>分由外骨骼承担，工人挑选装配工具并开始工件装配工作，然后站立，外骨骼自锁解除，工人自由移动至其他工位取工具，接着再下蹲至40</p>
        <p>度左右蹲姿保持2秒后外骨骼自锁，人体放松、工人体重大部分由外骨骼承担，工人拆卸装配，最后工人站立5秒，外骨骼解锁，工人可自由</p>
        <p>行动。</p>
      </info-group-two>
    </div>
  </el-dialog>
</template>

<script>
// components
import InfoGroupOne from '../../infoGroup/InfoGroup3'
import InfoGroupTwo from '../../infoGroup/InfoGroup4'
export default {
  name: 'description-dialog',
  components: {
    InfoGroupOne,
    InfoGroupTwo
  },
  props: {
    value: null,
  },
  data() {
    return {
    }
  },
  mounted() {
  }
};
</script>

<style lang="less">
.description-dialog {
  position: relative;
  width: 990px !important;
  height: 706px !important;
  background: #08021C !important;
  //box-shadow: 0px 0px 16px 6px rgba(80,148,245,0.5), 0px 0px 4px 1px rgba(80,148,245,0.7) !important;
  //border: 1px solid #62A5FF;
  .mod2 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: auto;
    width: 230px;
    height: 6px;
    justify-content: space-between;
    .mod3 {
      z-index: 455;
      height: 6px;
      background: url(~@/assets/images/db8.png)
      100% no-repeat;
      width: 140px;
      justify-content: center;
      align-items: flex-end;
      .block1 {
        z-index: auto;
        width: 7px;
        height: 3px;
        .box1 {
          z-index: 458;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
          align-self: flex-end;
        }
        .box2 {
          z-index: 478;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .box3 {
          z-index: 498;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
          align-self: flex-start;
        }
      }
    }
    .mod4 {
      z-index: auto;
      width: 90px;
      height: 3px;
      margin-top: 2px;
      .outer3 {
        z-index: auto;
        width: 88px;
        height: 1px;
        margin-left: 2px;
        justify-content: space-between;
        .bd1 {
          z-index: 459;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd2 {
          z-index: 460;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd3 {
          z-index: 461;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd4 {
          z-index: 462;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd5 {
          z-index: 463;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd6 {
          z-index: 464;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd7 {
          z-index: 465;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd8 {
          z-index: 466;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd9 {
          z-index: 467;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd10 {
          z-index: 468;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd11 {
          z-index: 469;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd12 {
          z-index: 470;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd13 {
          z-index: 471;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd14 {
          z-index: 472;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd15 {
          z-index: 473;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd16 {
          z-index: 474;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd17 {
          z-index: 475;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd18 {
          z-index: 476;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
      }
      .outer4 {
        z-index: auto;
        width: 88px;
        height: 1px;
        justify-content: space-between;
        .main2 {
          z-index: 479;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .main3 {
          z-index: 480;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .main4 {
          z-index: 481;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .main5 {
          z-index: 482;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .main6 {
          z-index: 483;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .main7 {
          z-index: 484;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .main8 {
          z-index: 485;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .main9 {
          z-index: 486;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .main10 {
          z-index: 487;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .main11 {
          z-index: 488;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .main12 {
          z-index: 489;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .main13 {
          z-index: 490;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .main14 {
          z-index: 491;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .main15 {
          z-index: 492;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .main16 {
          z-index: 493;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .main17 {
          z-index: 494;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .main18 {
          z-index: 495;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .main19 {
          z-index: 496;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
      }
      .outer5 {
        z-index: auto;
        width: 83px;
        height: 1px;
        margin-left: 3px;
        justify-content: space-between;
        .bd19 {
          z-index: 500;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd20 {
          z-index: 501;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd21 {
          z-index: 502;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd22 {
          z-index: 503;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd23 {
          z-index: 504;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd24 {
          z-index: 505;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd25 {
          z-index: 506;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd26 {
          z-index: 507;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd27 {
          z-index: 508;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd28 {
          z-index: 509;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd29 {
          z-index: 510;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd30 {
          z-index: 511;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd31 {
          z-index: 512;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd32 {
          z-index: 513;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd33 {
          z-index: 514;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd34 {
          z-index: 515;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
        .bd35 {
          z-index: 516;
          width: 3px;
          height: 1px;
          background-color: rgba(98, 165, 255, 1);
        }
      }
    }
  }
  & .el-dialog__body {
    padding: 24px;
    box-shadow: -5px 5px 10px -4px rgba(80,148,245,0.5), 5px 5px 10px -4px rgba(80,148,245,0.5) !important;
    border-bottom: 1px solid #62A5FF;
    border-left: 1px solid #62A5FF;
    border-right: 1px solid #62A5FF;
    height: 608px
  }
  & .el-dialog__header {
    position: relative;
    padding: 0;
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 18px;
    background: #08316A;
    background: linear-gradient(-135deg, transparent 14px, #08316A 0) top right;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .el-dialog__title {
      color: rgba(255, 255, 255, 0.85);
    }
    .el-dialog__headerbtn {
      top: 10px;
      z-index: 517;
      width: 32px;
      height: 32px;
      background-image: url(~@/assets/images/close.png);
      background-repeat: no-repeat;
      background-size: contain;
      .el-dialog__close {
        display: none;
      }
    }
  }
  & .el-dialog__footer {
    display: none;
  }
}
</style>
