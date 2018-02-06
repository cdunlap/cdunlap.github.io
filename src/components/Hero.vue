<template>
  <section class="hero">
    <HeroParticles/>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="hero-content text-center">
            <div class="title text-uppercase">
              <h2 class="h3 text-white">
                <span class="text-primary">Hello</span>
                I'm
              </h2>
            </div>
            <div class="name text-uppercase">
              <h3 class="h2 text-white">Cale Dunlap</h3>
            </div>
            <div class="role text-white">
              <p>Software Engineer and Web Developer</p>
            </div>
            <div class="desc">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
@import '../scss/vars';

.hero {
  height: 100%;
  background: $black;
  position: relative;
}
.hero-content {
  padding-bottom: 100px;
  padding-top: 160px;
  .name {
    display: inline-block;
    border-top: 1px solid $brand-primary;
    border-bottom: 1px solid $brand-primary;
    h3 {
      margin: 8px 0;
    }
  }
  .role {
    margin-top: 24px;
    font-weight: 700;
    letter-spacing: .6px;
    font-size: px2rem(18);
  }
}
</style>
