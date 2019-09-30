<template lang="pug">
.certificates
  .title.has-text-color3 Certificates &amp; Courses
  .timeline
    .timeline-header
      span.tag.is-medium.has-background-color4.has-text-color3 Current
    .timeline-item(v-for="(item, idx) in certs" v-bind:key="idx")
      .timeline-marker
      .timeline-content.has-text-color3
        p.heading.has-text-color3 {{item.date}}
        p
          strong.has-text-color3 {{item.title}}
          br
          | {{item.institution}},&nbsp;
          a.is-size-7(:href="item.url" target="_blank") {{item.id}}
</template>

<script>
import { CERTIFICATES } from '../data.js'
export default {
  data: () => ({
    certs: CERTIFICATES
  })
}
</script>

<style lang="css">
</style>
