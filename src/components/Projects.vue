<template lang="pug">
section.section.has-background-color2
  .container
    h1.title.has-text-color3 Projects

    .project-list.columns.is-multiline
      .column.is-4(v-for='(project, idx) in projects' v-bind:key='idx')
        ProjectCard(:title='project.title' :image='project.image'
          :description='project.description' :liveurl='project.liveurl')
</template>

<script>
import ProjectCard from './ProjectCard'
import { PROJECTS } from '../data.js'

export default {
  components: {
    ProjectCard
  },
  data: () => ({
    projects: PROJECTS
  })
}
</script>

<style lang="scss" scoped>
.project-list .column {
  display: flex;
}
</style>
