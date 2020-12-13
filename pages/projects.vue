<template lang="pug">
  section.section.has-background-color2
    .container
      h1.title.has-text-color3 Projects
      .project-list.columns.is-multiline
        .column.is-4(v-for="project in projects" :key="project.id")
          ProjectCard(:project="project")
</template>

<script>
import ProjectCard from '@/components/ProjectCard'
import { gsap } from 'gsap'

export default {
  components: {
    ProjectCard
  },
  async asyncData({$prismic, error}) {
    try {
      const projects = (await $prismic.api.query(
        $prismic.predicates.at('document.type', 'project')
      )).results
      return { projects }
    } catch (e) {
      error({statusCode: 404, message: 'Page not found'})
    }
  },
  mounted() {
    gsap.from('.project-list .card', {
      duration: 1,
      y: "-20",
      opacity: 0,
      delay: 0.5,
      stagger: 0.15,
      ease: 'power4.out',
      force3D: true
    })
  }
}
</script>

<style lang="scss" scoped>
.project-list .column {
  display: flex;
}
</style>
