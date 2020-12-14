<template lang="pug">
  main#project.has-background-color3(v-if="Object.keys(project).length > 0")
    //- section.hero.has-background-color2.is-large#hero
    //-   .hero-body(:class="{'has-bg':project.hero_image.url}" :style="{backgroundImage: `url(${project.hero_image.url})`}")
    //-     .container
    //-       h1.title {{$prismic.asText(project.data.name)}}
    section
      .container
        .content
          h1.title {{$prismic.asText(project.data.name)}}
          .tags
            span.tag.is-primary(v-for="tag in project.tags") {{tag}}
          .live.my-4(v-if="project.data.live_url.url")
            strong Live link:&nbsp;
              a(:href="project.data.live_url.url" target="_blank") {{project.data.live_url.url}}
          video(v-if="project.data.demo_video && project.data.demo_video.url"
            :src="project.data.demo_video.url" autoplay muted controls)
          prismic-rich-text.py-4(:field="project.data.description_long")

    section.media(v-for="(slice, idx) in project.data.body" :key="`slice-${idx}`")
      .container
        template(v-if="slice.slice_type === 'project_photos'")
          h2.title Photos
          v-gallery(:images="slice.items.map(i => i.project_photo.url)"
            :index="photoIndex" @close="photoIndex = null")
          .gallery-photos
            figure(v-for="(item, idx) in slice.items" :key="idx")
              prismic-image.gallery-image(
                :field="item.project_photo"
                @click="photoIndex = idx")
        template(v-if="slice.slice_type === 'project_videos'")
          h2.title Videos
          .gallery-videos
            prismic-embed.gallery-video(v-for="(item, idx) in slice.items"
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
</style>
