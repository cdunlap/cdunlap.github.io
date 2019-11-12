<template lang="pug">
.certificates
  .timeline
    .timeline-header
      span.tag.is-medium.has-background-color4.has-text-color3 Current
    .timeline-item(v-for="(item, idx) in data" v-bind:key="idx")
      .timeline-marker
      .timeline-content.has-text-color3
        p.heading.has-text-color3 {{item.certificate_date}}
        p
          strong.has-text-color3 {{item.title}}
          br
          | {{item.institution}},&nbsp;
          a.is-size-7(:href="item.certificate_url" target="_blank") {{item.certificate_number}}
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="css">
</style>
