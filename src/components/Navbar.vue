<template lang="pug">
nav.navbar.is-fixed-top(role='navigation' aria-label='main navigation')
  .navbar-end
    a.navbar-item About Me
    a.navbar-item Resume
    a.navbar-item Projects
    a.navbar-item Contact

  //- Burger must be last
  a.navbar-burger(role='button' aria-label='menu' aria-expanded='false')
    span(aria-hidden='true')
    span(aria-hidden='true')
    span(aria-hidden='true')
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss">

</style>
