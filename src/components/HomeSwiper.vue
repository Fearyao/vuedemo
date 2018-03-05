<template>
  <div class="homeswiper">
    <swiper loop auto :list="dataList" :index="0"></swiper>
  </div>
</template>

<script>
import {Swiper} from 'vux';
export default {
  name: 'homeswiper',
  components: {
    Swiper
  },
  props:{
    'dataList':Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less">
.homeswiper{
  margin: 0;
  padding: 0;
  .vux-indicator{
    left: 15px;
    .vux-icon-dot{
      border-color: rgb(101,101,101) !important;
    }
    .vux-icon-dot.active{
      background-color: rgb(101,101,101) !important;
    }
  }
}
</style>
