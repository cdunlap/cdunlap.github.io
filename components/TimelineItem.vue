<template lang="pug">
  li.timeline-item
    .timeline-content
      b-badge {{date}}
      div
        strong {{title}}
        slot
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>