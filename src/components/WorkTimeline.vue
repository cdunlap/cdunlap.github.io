<template lang="pug">
.work
  .title.has-text-color3 Work History
  .timeline
    .timeline-header
      span.tag.is-medium.has-background-color4.has-text-color3 Current
    .timeline-item(v-for="(item, idx) in jobs" v-bind:key="idx")
      .timeline-marker
      .timeline-content.has-text-color3
        p.heading.has-text-color3 {{item.date}}
        p
          strong.has-text-color3 {{item.title}}
        p {{item.company}}
        p.is-size-7 {{item.location}}
</template>

<script>
export default {
  data: () => ({
    jobs: [{
      date: 'March 2013 - Current',
      title: 'Senior Interactive Developer',
      company: 'Column Five, Inc.',
      location: 'Irvine, CA (remote in SF Bay Area, CA)'
    }, {
      date: 'November 2008 - March 2013',
      title: 'Co-Founder, Engineer',
      company: 'Venom Game Labs, LLC',
      location: 'Kennesaw, GA'
    }, {
      date: 'December 2011 - February 2013',
      title: 'Software Developer',
      company: 'TRX, Inc. (now SAP Concur)',
      location: 'Atlanta, GA'
    }, {
      date: 'December 2009 - November 2011',
      title: 'Serious Games Developer',
      company: 'Research Network, Inc.',
      location: 'Kennesaw, GA'
    }, {
      date: 'September 2008 - March 2010',
      title: 'Virtual Infrastructure Administrator',
      company: 'Enterprise Hosting',
      location: 'Atlanta, GA'
    }, {
      date: 'March 2005 - December 2009',
      title: 'Systems Administrator, Developer',
      company: 'TRX, Inc. (now SAP Concur)',
      location: 'Atlanta, GA'
    }]
  })
}
</script>

<style lang="css">
</style>
