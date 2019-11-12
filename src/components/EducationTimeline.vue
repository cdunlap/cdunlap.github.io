<template lang="pug">
.education
  .title.has-text-color3 Institutional Education
  .timeline
    .timeline-header
      span.tag.is-medium.has-background-color4.has-text-color3 Current
    .timeline-item(v-for="(item, idx) in education" v-bind:key="idx")
      .timeline-marker
      .timeline-content.has-text-color3
        p.heading {{item.years}}
        p
          strong.has-text-color3 {{item.degree}}
          br
          | {{item.school}}
          br(v-if="item.location")
          | {{item.location}}
          br(v-if="item.other")
          | {{item.other}}
</template>

<script>
import { EDUCATION } from '@/data.js'
export default {
  data: () => ({
    education: EDUCATION
  })
}
</script>

<style lang="css">
</style>
