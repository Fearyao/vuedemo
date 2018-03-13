<template>
  <div class="myselector">
    <group>
        <selector title="房型" v-model="value" :options='dataList'></selector>
    </group>
  </div>
</template>

<script>
import {Selector} from 'vux';
export default {
  name: 'myselector',
  components: {
    Selector
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
.myselector{

}
</style>
