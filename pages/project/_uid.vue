<template lang="pug">
  main#project(v-if="Object.keys(project).length > 0")
    //- section.hero.has-background-color2.is-large#hero
    //-   .hero-body(:class="{'has-bg':project.hero_image.url}" :style="{backgroundImage: `url(${project.hero_image.url})`}")
    //-     .container
    //-       h1.title {{$prismic.asText(project.name)}}
    .has-background-color2.is-large
      .container
        .content
          h1.title {{$prismic.asText(project.name)}}
    .has-background-color3
      section.description
        .container
          .content
            prismic-rich-text(:field="project.description_long")
      section.media(v-for="(slice, idx) in project.body" :key="`slice-${idx}`")
        .container
          template(v-if="slice.slice_type === 'project_photos'")
            h2.title Photos
            div(v-for="(item, idx) in slice.items")
              prismic-image(:field="item.project_photo")
          template(v-if="slice.slice_type === 'project_videos'")
            h2.title Videos
            div(v-for="(item, idx) in slice.items")
              prismic-embed(:field="item.project_video")
</template>

<script>
export default {
  async asyncData({$prismic, params, error}) {
    try {
      const project = (await $prismic.api.getByUID('project', params.uid)).data
      return { project }
    } catch (e) {
      error({statusCode: 404, message: 'Page not found'})
    }
  }
}
</script>

<style lang="css" scoped>
.hero-body.has-bg {
  background-size: cover;
}
</style>
