<template lang="pug">
.matrix-table
  h2.title.is-4 {{title}}
  table.table.is-bordered.is-fullwidth
    thead
      tr
        th Language
        th Professional Experience (years)
        th Personal/Hobby Experience (years)
        th How I'd Rate My Knowledge
    tbody
      template(v-for="tech in matrixData")
        tr
          td(rowspan=2) {{tech.name}}
          td {{tech.professional_exp}}
          td {{tech.personal_exp}}
          td {{tech.rating}}
        tr
          td(colspan=3)
            ul
              li(v-for="project in tech.projects") {{project}}
</template>

<script>
import { LANGUAGES } from '@/data.js'
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    matrixData: {
      required: true,
      type: Array
    }
  },
  data: () => ({
    languages: LANGUAGES
  })
}
</script>

<style lang="css">
</style>
