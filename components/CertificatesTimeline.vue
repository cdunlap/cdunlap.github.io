<template lang="pug">
.certificates
  .timeline(ref="timeline")
    .timeline-header
      span.tag.is-medium.has-background-color4.has-text-color3 Current
    .timeline-item(v-for="(item, idx) in data", v-bind:key="idx")
      .timeline-marker
      .timeline-content.has-text-color3
        p.heading.has-text-color3 {{ item.certificate_date }}
        p
          strong.has-text-color3 {{ item.title }}
          div {{ item.institution }},&nbsp;
            a.is-size-7(:href="item.certificate_url", target="_blank") {{ item.certificate_number }}
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
if(process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
export default {
  props: ["data"],
  mounted() {
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
  }
};
</script>

<style lang="css">
</style>
