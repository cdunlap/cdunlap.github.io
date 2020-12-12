<template lang="pug">
.card
  .card-image
    figure.image.is-16by9
      img(
        v-if="!project.data.hero_image.url",
        src="https://picsum.photos/800/450/?random"
      )
      prismic-image(
        v-if="project.data.hero_image.url",
        :field="project.data.hero_image"
      )
  .card-content
    .title {{ $prismic.asText(project.data.name) }}
    prismic-rich-text(:field="project.data.description")
  footer.card-footer
    nuxt-link.card-footer-item(:to="link") View Project
    a.card-footer-item(
      v-if="project.data.live_url.url",
      :href="project.data.live_url.url",
      target="_blank"
    ) Visit Site &nbsp;
      i.fa.fa-external-link-alt
</template>

<script>
import LinkResolver from '@/plugins/link-resolver'
export default {
  props: ["project"],
  created() {
    this.link = LinkResolver(this.project)
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  &:hover {
    color: inherit;
  }
}
.card-content {
  flex: 1;
}
</style>
