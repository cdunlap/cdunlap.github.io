<template lang="pug">
b-navbar(toggleable="lg", type="dark", variant="dark", fixed="top")
  b-navbar-brand.me(href="/") Cale Dunlap
  b-navbar-toggle(target="nav-collapse")
  b-collapse#nav-collapse(is-nav)
    b-navbar-nav.ml-auto
      b-nav-item(to="/") Projects
      b-nav-item(:to="{ name: 'resume' }") Resume
</template>

<script>
export default {
  data: () => ({
    isActive: false,
  }),
};
</script>

<style lang="scss">
.me {
  opacity: 0;
  transform: translate(-100px, 0);
}
</style>
