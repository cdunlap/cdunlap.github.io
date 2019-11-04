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
import EducationTimeline from '@/components/EducationTimeline'
import CertificatesTimeline from '@/components/CertificatesTimeline'
import WorkTimeline from '@/components/WorkTimeline'

export default {
  components: {
    EducationTimeline,
    CertificatesTimeline,
    WorkTimeline
  }
}
</script>

<style lang="scss">

</style>
