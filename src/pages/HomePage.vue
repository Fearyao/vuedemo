<template>
  <div class="homePage">
    <homeswiper :data-list=dataList></homeswiper>
    <div class="show" :style="{backgroundImg:`url({${backgroundImg})`}">
      dfasdf
    </div>
  </div>
</template>

<script>
import homeswiper from '../components/HomeSwiper'


export default {
  components: {
    homeswiper
  },
  data () {
    return {
      dataList:[
          {
              img:'./static/imgs/banner1@3.png'
          },
          {
              img:'./static/imgs/banner2@3.png'
          },
          {
              img:'./static/imgs/banner1@3.png'
          },
          {
              img:'./static/imgs/banner2@3.png'
          }
      ],
      backgroundImg:'./static/imgs/banner2@3.png'
    }
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
    height: 1000px;
  }
}
</style>
