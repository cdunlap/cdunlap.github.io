<template lang="pug">
section.section.has-background-color2
  .container
    h1.title.has-text-color3 Projects

    .project-list.columns.is-multiline
      .column.is-4(v-for='(project, idx) in projects' v-bind:key='idx')
        ProjectCard(:title="project.project_name" :image="project.project_hero_image"
          :description="project.project_description")
        //- ProjectCard(:title='project.title' :image='project.image'
        //-   :description='project.description' :liveurl='project.liveurl')
</template>

<script>
import ProjectCard from '@/components/ProjectCard'
// import { PROJECTS } from '@/data.js'

export default {
  props: ['projects'],
  components: {
    ProjectCard
  }
}
</script>

<style lang="scss" scoped>
.project-list .column {
  display: flex;
}
</style>
