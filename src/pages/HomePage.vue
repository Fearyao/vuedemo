<template>
  <div class="homePage">
    <homeswiper :data-list=swiperList></homeswiper>
    <div class="show" ref="showBox">
      <div class="littleText">
        VR
      </div>
      <div class="bigText">
        VR全屋装
        <br> 所见即所得
      </div>
      <div class="grayText">
        区别于传统装修公司,我们提供整套的
        <br> VR全景方案100%还原未来新家
      </div>
      <div class="button">
        <span>
          了解更多
        </span>
        <iframe src="../../static/imgs/箭头2.svg" width="30px" height="30px">
        </iframe>
      </div>
    </div>
    <div class="bespeake">
      <div class="logo">
        MEIJIA
      </div>
      <div class="title">
        现在预约
        <br>
        <span>
          免费获得客厅VR全景方案
        </span>
      </div>
      <div class="form">
        <div class="selector">
          <group>
            <selector title="类型" :options="typeList" v-model="type"></selector>
          </group>
        </div>
        <div class="selector">
          <group>
            <selector title="城市" :options="cityList" v-model="city"></selector>
          </group>
        </div>
        <div class="selector">
          <x-input title="所在小区" v-model="block" @on-blur="blur()"></x-input>
        </div>
        <div class="button" @click="submit()">
          立即预约
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import homeswiper from '../components/HomeSwiper';
import { Selector,XInput,Group } from 'vux';

require("es6-promise").polyfill();
require('isomorphic-fetch');

export default {
  components: {
    homeswiper,
    Selector,
    XInput,
    Group
  },
  data() {
    return {
      type:null,
      city:null,
      block:null,
      swiperList: [{
          img: './static/imgs/banner1@3.png'
        },
        {
          img: './static/imgs/banner2@3.png'
        },
        {
          img: './static/imgs/banner1@3.png'
        },
        {
          img: './static/imgs/banner2@3.png'
        }
      ],
      typeList:[
        {value:'毛坯房',key:1},
        {value:'精装修',key:2}
      ],
      cityList:[
        {value:'杭州',key:1},
        {value:'上海',key:2}
      ],
      blockList:[
        {value:'绿城',key:1},
        {value:'金城',key:2},
      ],
      backgroundImg: './static/imgs/vr@3.png',
    }
  },
  methods:{
    blur(){

    },
    submit(){
      let query={
        type:this.type,
        city:this.city,
        block:this.block
      }
      console.log(query)
      fetch('http://www.baidu.com',query).then(data=>{
        console.log(data)
      },err=>{
        console.log(err)
      })
    }
  },
  mounted() {
    this.$refs.showBox.style.backgroundImage = 'url(' + this.backgroundImg + ')'
  }
}

</script>

<style lang='less'>
@import '../style/custom.global.less';
.homePage{
  .show{
    padding:0 52px;
    color: @fontColor;
    font-family: @fontFamily;
    font-size: 24px;
    height: 144vw;
    background-repeat: no-repeat;
    background-size: 100%;
    .littleText{
      margin-top: 52px;
      display: inline-block;
      font-size: 7px;
      font-family: 'HelveticaNeue-CondensedBold';
      transform: rotate(90deg);
    }
    .bigText{
      color: #333;
      font-size: 24px;
      font-family: @fontFamily;
      margin-top: 20px;
    }
    .grayText{
      margin-top: 24px;
      font-size: 16px;
    }
    .button{
      margin-top: 44px;
      color:#666;
      position: relative;
      width: 100px;
      height: 30px;
      line-height: 30px;
      border-radius: 15px;
      border: 1px solid #666;
      font-size: 14px;
      font-family: @fontFamily;
      span{
        margin-left: 15px;
      }
      iframe{
        margin-top: 2px;
        border:0;
        transform: scale(0.5);
        position: absolute;
      }
    }
  }
  .bespeake{
    padding-bottom: 100px;
    background-color: rgb(240, 240, 240);
    text-align: center;
    border: 1px solid transparent;
    .logo{
      margin-top: 36px;
      font-size: 40px;
      text-align: center;
      color:  rgb(11, 192, 162);
    }
    .title{
      font-size: 25px;
      span{
        font-size: 16px;
        color: #6f727c;
      }
    }
    .form{
      .selector{
        font-size: 16px;
        margin: 20px;
        background-color: white;
      }
      .weui-label{
        text-align: left;
        min-width: 100px;;
      }
    }
    .button{
      padding:10px 6px;
      margin: 20px;
      font-size: 14px;
      font-family: @fontFamily;
      color: white;
      background-color: rgb(56, 192, 169)
    }
  }
}
</style>
