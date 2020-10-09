<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" to="/home">
        <span>首页</span>
      </van-tabbar-item>
      <van-tabbar-item icon="orders-o" to="/order">预约</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)

export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style scoped>

</style>
