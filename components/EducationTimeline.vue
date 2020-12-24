<template lang="pug">
.education
  Timeline
    TimelineItem(
      v-for="(item, idx) in data",
      v-bind:key="idx",
      :date="$prismic.asText(item.dates)",
      :title="$prismic.asText(item.degree)"
    )
      .small {{ $prismic.asText(item.school) }}, {{ $prismic.asText(item.location) }}
      .small(v-if="item.other") {{ $prismic.asText(item.other) }}
</template>

<script>
import Timeline from "@/components/Timeline.vue";
import TimelineItem from "@/components/TimelineItem";

export default {
  props: ["data"],
  components: {
    Timeline,
    TimelineItem,
  },
};
</script>
