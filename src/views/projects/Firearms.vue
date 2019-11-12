<template lang="pug">
  main.project
    prismic-image(:field="content.heroImg")
    h1 {{content.title}}
    prismic-rich-text(:field="content.description")
</template>

<script>
import PrismicContentMixin from '@/mixins/PrismicContentMixin'

export default {
  mixins: [PrismicContentMixin],
  data: () => ({
    content: {
      title: null,
      description: null,
      heroImg: null
    }
  }),
  methods: {
    getContent () {
      this.$prismic.client.getByUID('project', 'firearms')
        .then(document => {
          this.content = document.data
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
