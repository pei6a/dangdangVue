<template>
  <div id="app">
    <router-view> </router-view>
    <Miaofooter v-if="$route.meta.miaofooter"/>
    <homeFooter v-if="$route.meta.homeFooter"/>
  </div>
</template>

<script>
import Miaofooter from './components/pei/miao/miaofooter/index'
import homeFooter from './components/pei/home/footer/index'
export default {
  name: 'app',
  components: {
    Miaofooter,
    homeFooter
    
  },
}
</script>

<style>
#app {
  width:100%;
  height:100%;
  font-size: 0.14rem
}
</style>
