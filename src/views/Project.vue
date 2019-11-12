<template lang="pug">
  main#project(v-if="Object.keys(project).length > 0")
    section.hero.has-background-color2.is-large#hero
      .hero-body(:class="{'has-bg':project.hero_image.url}" :style="{backgroundImage: `url(${project.hero_image.url})`}")
        .container
          h1.title {{$prismic.richTextAsPlain(project.name)}}
    .has-background-color3
      section.description
        .container
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
  data: () => ({
    project: {}
  }),
  created () {
    this.$prismic.client.getByUID('project', this.$route.params.uid)
      .then(response => {
        this.project = response.data
      })
  }
}
</script>

<style lang="css" scoped>
.hero-body.has-bg {
  background-size: cover;
}
</style>
