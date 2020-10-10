<template>
  <div>
    <app-main />
    <Footer></Footer>
  </div>
</template>

<script>
import AppMain from './components/AppMain'
import Footer from './components/Footer'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Footer
  }
}
</script>
