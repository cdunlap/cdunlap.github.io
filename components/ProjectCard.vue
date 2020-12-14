<template lang="pug">
.card(@mouseover="playVideo()" @mouseout="stopVideo()" @click="openProject()")
  .card-image
    figure.image
      img(
        v-if="!project.data.hero_image.url && !(project.data.hero_video && project.data.hero_video.url)",
        src="https://picsum.photos/800/450/?random"
      )
      prismic-image(
        v-if="project.data.hero_image.url && !(project.data.hero_video && project.data.hero_video.url)",
        :field="project.data.hero_image"
      )
      video(v-if="project.data.hero_video && project.data.hero_video.url" ref="video"
        :src="project.data.hero_video.url" autoplay loop mute)
  .card-content
    .title {{ $prismic.asText(project.data.name) }}
    prismic-rich-text.content(:field="project.data.description")
    .tags
      span.tag.is-primary(v-for="tag in project.tags") {{tag}}
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
  data: () => ({
    link: null,
  }),
  created() {
    this.link = LinkResolver(this.project)
  },
  methods: {
    playVideo() {
      // if(this.$refs.video) {
      //   this.$refs.video.play();
      // }
    },
    stopVideo() {
      // if(this.$refs.video) {
      //   this.$refs.video.pause();
      // }
    },
    openProject() {

    }
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
