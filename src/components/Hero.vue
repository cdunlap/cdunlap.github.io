<template lang="pug">
  section.hero.has-background-color2.is-large
    .hero-body
      .container
        h1.title.has-text-color3 Hi! I'm Cale
        h2.subtitle A human that writes code
</template>

<script>
import HeroParticles from './HeroParticles'

export default {
  name: 'Hero',
  components: {
    HeroParticles
  }
}
</script>

<style lang="scss">
</style>
