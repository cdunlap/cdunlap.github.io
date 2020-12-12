<template>
  <div id="app">
    <Navbar/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
main {
  padding-top: 3.25rem;
}
</style>