<template lang="pug">
.card
  .card-image
    figure.image.is-16by9
      img(v-bind:src="image")
  .card-content
    .title {{title}}
    p {{description}}
  footer.card-footer
    a.card-footer-item(v-if='url' :url='url') See More
    a.card-footer-item(v-if='liveurl' :href='liveurl' target='_blank')
      i.fa.fa-external-link-alt
      | &nbsp; Visit Site
</template>

<script>
export default {
  props: ['title', 'image', 'description', 'liveurl', 'url']
}
</script>

<style lang="css">
</style>
