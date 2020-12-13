<template lang="pug">
.work
  .timeline
    .timeline-header
      span.tag.is-medium.has-background-color4.has-text-color3 Current
    .timeline-item(v-for="(item, idx) in data", v-bind:key="idx")
      .timeline-marker
      .timeline-content.has-text-color3
        p.heading.has-text-color3 {{ item.dates }}
        p
          strong.has-text-color3 {{ item.job_title }}
        p {{ item.company }}
        p.is-size-7 {{ item.location }}
</template>

<script>
import { gsap } from 'gsap'

export default {
  props: ["data"],
  mounted() {
    gsap.from('.work .timeline-item', {
      duration: 1,
      y: "-20",
      opacity: 0,
      delay: 0.5,
      stagger: 0.15,
      ease: 'power4.out',
      force3D: true
    })
  }
};
</script>

<style lang="css">
</style>
