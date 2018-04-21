<template lang="pug">
.education
  .title.has-text-color3 Institutional Education
  .timeline
    .timeline-header
      span.tag.is-medium.has-background-color4.has-text-color3 Current
    .timeline-item(v-for="(item, idx) in education" v-bind:key="idx")
      .timeline-marker
      .timeline-content.has-text-color3
        p.heading {{item.years}}
        p
          strong.has-text-color3 {{item.degree}}
          br
          | {{item.school}}
          br(v-if="item.location")
          | {{item.location}}
          br(v-if="item.other")
          | {{item.other}}
</template>

<script>
export default {
  data: () => ({
    education: [{
      years: '2007 - 2010',
      degree: 'BS, Game and Simulation Programming',
      school: 'DeVry University Online',
      location: 'Graduated with honors' // Yeah I know this isn't location
    }, {
      years: '2003 - 2005',
      degree: 'AAS, Computer Information Systems - Programmer/Analyst',
      school: 'Chippewa Valley Technical College',
      location: 'Eau Claire, WI'
    }]
  })
}
</script>

<style lang="css">
</style>
