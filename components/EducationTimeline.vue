<template lang="pug">
.education
  Timeline
    TimelineItem(v-for="(item, idx) in data", v-bind:key="idx"
      :date="item.dates" :title="item.degree")
      .small {{item.school}}, {{item.location}}
      .small(v-if="item.other") {{ item.other }}
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
if(process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
import Timeline from '@/components/Timeline.vue'
import TimelineItem from '@/components/TimelineItem'

export default {
  props: ["data"],
  components: {
    Timeline, TimelineItem
  },
  mounted() {
    /*
    const $timeline = this.$refs.timeline;
    var tl = gsap.timeline({
      scrollTrigger: $timeline
    });
    tl.from($timeline, { opacity: 0, duration: 1})
    tl.from($timeline.querySelectorAll('.timeline-marker'), {
      opacity: 0, duration: 1, stagger: 0.2
    }, "timelineItemIn")
    tl.from($timeline.querySelectorAll('.timeline-content'), {
      opacity: 0, x: 100, stagger: .2, 
    }, "timelineItemIn")
    */
  }
};
</script>
