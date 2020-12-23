<template lang="pug">
.education
  Timeline
    TimelineItem(
      v-for="(item, idx) in data",
      v-bind:key="idx",
      :date="item.dates",
      :title="item.degree"
    )
      .small {{ item.school }}, {{ item.location }}
      .small(v-if="item.other") {{ item.other }}
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
