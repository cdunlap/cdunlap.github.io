<template lang="pug">
.education
  .timeline
    .timeline-header
      span.tag.is-medium.has-background-color4.has-text-color3 Current
    .timeline-item(v-for="(item, idx) in data", v-bind:key="idx")
      .timeline-marker
      .timeline-content.has-text-color3
        p.heading {{ item.dates }}
        p
          strong.has-text-color3 {{ item.degree }}
          div {{ item.school }}, {{ item.location }}
          div(v-if="item.other") {{ item.other }}
</template>

<script>
export default {
  props: ["data"],
};
</script>
