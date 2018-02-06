<template>
  <div id="app">
    <Navbar />
    <Hero />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero
  }
}
</script>

<style lang="scss">
@import './scss/vars';

#app {
  height: 100%;
}
html, body {
  height: 100%;
}
.text-white {
  color: $white;
}
/*
html, body {
  padding: 0;
  margin: 0;
}
html {
  font-size: 14px;
}
body {
  font-family: $primary-font;
  font-size: 1rem;
  padding-top: $navbar-height;
}
a {
  color: $primary-color;
}
*/
</style>
