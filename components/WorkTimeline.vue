<template lang="pug">
.work
  Timeline
    TimelineItem(
      v-for="(item, idx) in data",
      v-bind:key="idx",
      :date="$prismic.asText(item.dates)",
      :title="$prismic.asText(item.job_title)"
    )
      .small {{ $prismic.asText(item.company) }}
      .small {{ $prismic.asText(item.location) }}
</template>

<script>
import Timeline from "@/components/Timeline.vue";
import TimelineItem from "@/components/TimelineItem";
export default {
  props: ["data"],
  components: {
    Timeline,
    TimelineItem,
  }
};
</script>