<template lang="pug">
  main#project(v-if="Object.keys(project).length > 0")
    b-jumbotron(:fluid="true" :header="$prismic.asText(project.data.name)" :lead="$prismic.asText(project.data.description)")
      .tags
        b-badge.mr-1(v-for="tag in project.tags" :key="tag") {{tag}}
      .live(v-if="project.data.live_url.url")
        strong Live link: &nbsp;
          a(:href="project.data.live_url.url" target="_blank") {{project.data.live_url.url}}

    b-container
      b-row
        b-col(md="6")
          prismic-rich-text(:field="project.data.description_long")
        b-col(md="6")
          .embed-responsive.embed-responsive-16by9(v-if="project.data.demo_video && project.data.demo_video.url")
            video(:src="project.data.demo_video.url" autoplay muted controls)
          prismic-image.img-fluid(v-if="project.data.hero_image && project.data.hero_image.url"
            :field="project.data.hero_image")

    b-container(v-for="(slice, idx) in project.data.body" :key="`slice-${idx}`")
      template(v-if="slice.slice_type === 'project_photos'")
        h2 Photos
        v-gallery(:images="slice.items.map(i => i.project_photo.url)"
          :index="photoIndex" @close="photoIndex = null")
        .gallery-photos.row
          figure.col-md-4.col-sm-2(v-for="(item, idx) in slice.items" :key="idx")
            prismic-image.gallery-image.img-fluid(
              :field="item.project_photo"
              @click="photoIndex = idx")
      template(v-if="slice.slice_type === 'project_videos'")
        h2 Videos
        .gallery-videos.row
          .col-md-4.col-sm-2(v-for="(item, idx) in slice.items")
            .embed-responsive.embed-responsive-16by9
              prismic-embed.gallery-video(
                :key="idx"
                :field="item.project_video")
</template>

<script>
export default {
  async asyncData({$prismic, params, error}) {
    try {
      const project = (await $prismic.api.getByUID('project', params.uid))
      return { 
        project,
        photoIndex: null
      }
    } catch (e) {
      error({statusCode: 404, message: 'Page not found'})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/vars';

.hero-body.has-bg {
  background-size: cover;
}
/*
.gallery-photos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 300px);
  grid-gap: 15px;
  .gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    box-shadow: 0 0 12px rgba(0,0,0,0.5);
    transition: .2s box-shadow;
    &:hover {
      box-shadow: 0 0 12px transparentize($color4, .7);
    }
  }
}

.gallery-videos {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 400px);
  grid-gap: 15px;
}
*/
</style>
