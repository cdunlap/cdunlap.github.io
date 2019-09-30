<template lang="pug">
.work
  .title.has-text-color3 Work History
  .timeline
    .timeline-header
      span.tag.is-medium.has-background-color4.has-text-color3 Current
    .timeline-item(v-for="(item, idx) in jobs" v-bind:key="idx")
      .timeline-marker
      .timeline-content.has-text-color3
        p.heading.has-text-color3 {{item.date}}
        p
          strong.has-text-color3 {{item.title}}
        p {{item.company}}
        p.is-size-7 {{item.location}}
</template>

<script>
import { JOBS } from '../data.js'

export default {
  data: () => ({
    jobs: JOBS
  })
}
</script>

<style lang="css">
</style>
