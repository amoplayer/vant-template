<template>
  <div>
    <h1>首页</h1>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import { Button } from 'vant'

Vue.use(Button)

export default {
  name: 'Home',
  components: {
  }
}
</script>
