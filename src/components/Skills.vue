<template lang="pug">
section.section.has-background-color3#skills
  .container
    h1.title Skills Matrix

    LanguageTable
    TechTable
</template>

<script>
import LanguageTable from './LanguageTable'
import TechTable from './TechTable'

export default {
  components: {
    LanguageTable,
    TechTable
  }
}
</script>

<style lang="css">
</style>
