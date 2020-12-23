<template lang="pug">
.work
  Timeline
    TimelineItem(
      v-for="(item, idx) in data",
      v-bind:key="idx",
      :date="item.dates",
      :title="item.job_title"
    )
      .small {{ item.company }}
      .small {{ item.location }}
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