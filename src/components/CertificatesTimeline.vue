<template lang="pug">
.certificates
  .title.has-text-color3 Certificates &amp; Courses
  .timeline
    .timeline-header
      span.tag.is-medium.has-background-color4.has-text-color3 Current
    .timeline-item(v-for="(item, idx) in certs" v-bind:key="idx")
      .timeline-marker
      .timeline-content.has-text-color3
        p.heading.has-text-color3 {{item.date}}
        p
          strong.has-text-color3 {{item.title}}
          br
          | {{item.institution}},&nbsp;
          a.is-size-7(:href="item.url" target="_blank") {{item.id}}
</template>

<script>
export default {
  data: () => ({
    certs: [{
      date: 'August 2, 2017',
      title: 'Scrum Certification Prep +Scrum Master+ Agile Scrum Training',
      institution: 'Paul Ashun on Udemy',
      id: 'UC-QQ1DCNJI',
      url: 'https://www.udemy.com/certificate/UC-QQ1DCNJI/'
    }, {
      date: 'July 19, 2016',
      title: 'Advanced React and Redux',
      institution: 'Stephen Grider on Udemy',
      id: 'UC-1ZUIP45P',
      url: 'https://www.udemy.com/certificate/UC-1ZUIP45P/'
    }, {
      date: 'July 13, 2016',
      title: 'Modern React with Redux',
      institution: 'Stephen Grider on Udemy',
      id: 'UC-BTLG5KVZ',
      url: 'https://www.udemy.com/certificate/UC-BTLG5KVZ/'
    }, {
      date: 'March 21, 2016',
      title: 'R Programming',
      institution: 'Johns Hopkins University on Coursera',
      id: '69MPL5V5DZ',
      url: 'https://www.coursera.org/account/accomplishments/verify/69MPL5V5DZ'
    }, {
      date: 'July 12, 2015',
      title: 'An Introduction to Interactive Programming in Python (Part 1)',
      institution: 'Rice University on Coursera',
      id: '69MPL5V5DZ',
      url: 'https://www.coursera.org/account/accomplishments/verify/69MPL5V5DZ'
    }]
  })
}
</script>

<style lang="css">
</style>
