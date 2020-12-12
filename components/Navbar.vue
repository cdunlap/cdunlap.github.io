<template lang="pug">
nav.navbar.is-fixed-top(role="navigation", aria-label="main navigation")
  .navbar-brand
    //- Burger must be last
    a.navbar-burger(
      :class="{ 'is-active': isActive }",
      role="button",
      aria-label="menu",
      aria-expanded="false",
      @click="isActive = !isActive"
    )
      span(aria-hidden="true")
      span(aria-hidden="true")
      span(aria-hidden="true")

  .navbar-menu(:class="{ 'is-active': isActive }")
    .navbar-end
      nuxt-link.navbar-item(to="/") Home
      nuxt-link.navbar-item(:to="{ name: 'projects' }") Projects
</template>

<script>
export default {
  data: () => ({
    isActive: false,
  }),
};
</script>
