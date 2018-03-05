<template>
  <div>
    <homeswiper :data-list=dataList></homeswiper>
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
      ]
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
