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
@import url('https://fonts.googleapis.com/css?family=Expletus+Sans:400,700|Roboto+Condensed:300,400,700|Roboto:300,400,700');
#app {
  height: 100%;
}
html, body {
  height: 100%;
}
.text-white {
  color: $color3;
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
