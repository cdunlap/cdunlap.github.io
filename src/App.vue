<template>
  <div id="app">
    <Navbar />
    <Hero />
    <Resume />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Resume from './components/Resume'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Resume
  }
}
</script>

<style lang="scss">

</style>
