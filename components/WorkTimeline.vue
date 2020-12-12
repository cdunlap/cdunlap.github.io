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
export default {
  props: ["data"],
};
</script>

<style lang="css">
</style>
