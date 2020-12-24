<template lang="pug">
.certificates
  Timeline
    TimelineItem(
      v-for="(item, idx) in data",
      v-bind:key="idx",
      :date="item.certificate_date | certificateDate",
      :title="$prismic.asText(item.title)"
    )
      .small {{ $prismic.asText(item.institution) }}, &nbsp;
        a(:href="item.certificate_url.url", target="_blank") {{ $prismic.asText(item.certificate_number) }}
</template>

<script>
import Timeline from "@/components/Timeline.vue";
import TimelineItem from "@/components/TimelineItem";
import moment from 'moment'

export default {
  props: ["data"],
  components: {
    Timeline,
    TimelineItem,
  },
  filters: {
    certificateDate(value) {
      return moment(value).format('MMMM, D, YYYY')
    }
  }
};
</script>