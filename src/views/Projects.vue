<template lang="pug">
  Projects(:projects="projects")
</template>

<script>
import Projects from '@/components/Projects'

export default {
  components: {
    Projects
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
</style>
