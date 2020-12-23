<template lang="pug">
main
  b-container
    h1.mb-4 Projects
    b-card-group(columns)
      b-card(
        v-for="project in projects",
        :key="project.id",
        :title="$prismic.asText(project.data.name)"
      )
        template(slot="header")
          img.img-fluid(
            v-if="!project.data.hero_image.url && !(project.data.hero_video && project.data.hero_video.url)",
            src="https://picsum.photos/800/450/?random"
          )
          prismic-image.img-fluid(
            v-if="project.data.hero_image.url && !(project.data.hero_video && project.data.hero_video.url)",
            :field="project.data.hero_image"
          )
          video(
            v-if="project.data.hero_video && project.data.hero_video.url",
            ref="video",
            :src="project.data.hero_video.url",
            autoplay,
            loop,
            mute
          )
        .tags
          b-badge.mr-1(v-for="tag in project.tags", :key="tag") {{ tag }}

        b-card-text {{ $prismic.asText(project.data.description) }}
        .d-flex.justify-content-between
          b-button(:to="LinkResolver(project)", variant="primary") View Project
          b-button(
            v-if="project.data.live_url.url",
            :href="project.data.live_url.url",
            target="_blank"
          ) Visit Site &nbsp;
            i.fa.fa-external-link-alt
</template>

<script>
import LinkResolver from "@/plugins/link-resolver";
import { gsap } from "gsap";

export default {
  async asyncData({ $prismic, error }) {
    try {
      const projects = (
        await $prismic.api.query(
          $prismic.predicates.at("document.type", "project")
        )
      ).results;
      return { projects };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  methods: {
    LinkResolver,
  },
  mounted() {
    /*
    gsap.from('.project-list .card', {
      duration: 1,
      y: "-20",
      opacity: 0,
      delay: 0.5,
      stagger: 0.15,
      ease: 'power4.out',
      force3D: true
    })
    */
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/vars";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
.card-columns {
  column-count: 1;
  @include media-breakpoint-up(md) {
    column-count: 2;
  }
  @include media-breakpoint-up(lg) {
    column-count: 3;
  }
}
.card-header {
  padding: 0;
  video {
    max-width: 100%;
  }
}
</style>
