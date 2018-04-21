<template lang="pug">
section.section.has-background-color1#resume
  .container
    .columns
      .column.is-one-half-tablet
        EducationTimeline
        CertificatesTimeline

      .column.is-one-half-tablet
        WorkTimeline
</template>

<script>
import EducationTimeline from './EducationTimeline'
import CertificatesTimeline from './CertificatesTimeline'
import WorkTimeline from './WorkTimeline'

export default {
  components: {
    EducationTimeline,
    CertificatesTimeline,
    WorkTimeline
  },

  data: () => ({

  })
}
</script>

<style lang="scss">

</style>
