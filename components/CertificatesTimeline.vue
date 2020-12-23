<template lang="pug">
.certificates
  Timeline
    TimelineItem(
      v-for="(item, idx) in data",
      v-bind:key="idx",
      :date="item.certificate_date",
      :title="item.title"
    )
      .small {{ item.institution }}, &nbsp;
        a(:href="item.certificate_url", target="_blank") {{ item.certificate_number }}
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