<template>
  <div class="navbar">
    <!--
    <div class="navbar-monogram">
      <span class="monogram-letter monogram-letter--left">C</span>
      <span class="monogram-letter monogram-letter--right">D</span>
    </div>
    -->
    <nav class="navbar-nav">
      <a>About Me</a>
      <a>Resume</a>
      <a>Projects</a>
      <a>Contact</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss">
@import '../scss/vars';

.navbar {
  background: $black;
  height: $navbar-height;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 1000;
}
.navbar-monogram {
  font-family: $monogram-font;
  font-size: 2rem;
  color: $brand-primary;
  flex: 1;
}
.monogram-letter {
  display: inline-block;
}
.monogram-separator {
  display: inline-block;
  height: 45px;
  width: 1px;
  background: $brand-primary;
}
.navbar-nav {
  flex: 3;
  display: flex;
  justify-content: flex-end;
  font-family: $nav-font;
  transform: translate3d(0,0,0);

  a {
    position: relative;
    margin: 0 20px;
    color: $white;
    transition: .4s color;
    text-transform: uppercase;
    font-size: 1.6rem;
    &::before, &::after {
      content: '';
      display: block;
      position: relative;
      background-color: $white;
      width: 1px;
      height: 10px;
      left: 50%;
      opacity: 0;
      transition: .4s transform, .4s opacity;
    }
    &::before {
      transform: translate(0, 10px);
    }
    &::after {
      transform: translate(0, -10px);
    }
    &.active, &:hover {
      text-decoration: none;
      color: $brand-primary;
      &::before, &::after {
        opacity: 1;
        transform: translate(0,0);
      }
    }
  }
}
</style>
