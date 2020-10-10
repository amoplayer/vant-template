<template>
  <div>
    <app-main />
    <Fouter></Fouter>
  </div>
</template>

<script>
import AppMain from './components/AppMain'
import Fouter from './components/Fouter'

import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)

export default {
  name: 'Layout',
  components: {
    AppMain,
    Fouter
  },
  created() {
    console.log(process.env.VUE_APP_BASE_API)
  }
}
</script>
