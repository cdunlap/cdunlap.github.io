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

export default {
  components: {
    ProjectCard
  },
  data: () => ({
    projects: []
  }),
  created () {
    this.$prismic.client.query(
      this.$prismic.Predicates.at('document.type', 'project'))
      .then(response => {
        this.projects = response.results
      })
  }
}
</script>

<style lang="scss" scoped>
.project-list .column {
  display: flex;
}
</style>
