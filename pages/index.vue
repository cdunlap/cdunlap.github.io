<template lang="pug">
main
  section
    b-jumbotron(
      :header="$prismic.asText(project_list.data.hero_title)",
      :lead="$prismic.asText(project_list.data.hero_lead)",
      bg-variant="color2",
      text-variant="color3",
      :fluid="true"
    )
      prismic-rich-text.subtitle(:field="project_list.data.hero_content")
  CContainer
    h1.mb-4 {{$prismic.asText(project_list.data.projects_title)}}
    CCardGroup(columns)
      CCard(
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
          CBadge.mr-1(v-for="tag in project.tags", :key="tag") {{ tag }}

        CCardText {{ $prismic.asText(project.data.description) }}
        .d-flex.justify-content-between
          CButton(:to="LinkResolver(project)", variant="primary") View Project
          CButton(
            v-if="project.data.live_url.url",
            :href="project.data.live_url.url",
            target="_blank"
          ) Visit Site &nbsp;
            i.fa.fa-external-link-alt
</template>

<script>
import LinkResolver from "@/plugins/link-resolver";
import { CContainer, CCardGroup, CCard, CCardBody, CCardText  } from '@coreui/vue';

export default {
  components: {
    CContainer,
    CCardGroup,
    CCard,
    CCardBody,
    CCardText
  },
  async asyncData({ $prismic, error }) {
    try {
      const [home, project_list] = await Promise.all([
        $prismic.api.getSingle('home'),
        $prismic.api.getSingle('project_list')
      ]);
      const projects = (await $prismic.api.getByIDs(project_list.data.projects.map(p => p.project.id))).results;
      return { home, project_list, projects };
    } catch (e) {
      console.error(e);
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  methods: {
    LinkResolver,
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
