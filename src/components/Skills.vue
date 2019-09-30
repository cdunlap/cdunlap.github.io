<template lang="pug">
section.section.has-background-color3#skills
  .container
    h1.title Skills

    VueApexCharts(type="bar", :options="languageChart.options", :series="languageChart.series")
    VueApexCharts(type="bar", :options="techChart.options", :series="techChart.series")
</template>

<script>
import MatrixTable from './MatrixTable'
import VueApexCharts from 'vue-apexcharts'
import { LANGUAGES, TECH } from '../data.js'

const chartOptions = {
  colors: ['#2374AB', '#0A090C']
}

export default {
  components: {
    MatrixTable,
    VueApexCharts
  },
  data: () => ({
    languages: LANGUAGES,
    tech: TECH,

    languageChart: {
      options: {
        ...chartOptions,
        xaxis: {
          categories: LANGUAGES.map(l => l.name)
        }
      },
      series: [{
        name: 'Professional Experience',
        data: LANGUAGES.map(l => l.professional_exp)
      }, {
        name: 'Personal Experience',
        data: LANGUAGES.map(l => l.personal_exp)
      }]
    },

    techChart: {
      options: {
        ...chartOptions,
        xaxis: {
          categories: TECH.map(t => t.name)
        }
      },
      series: [{
        name: 'Professional Experience',
        data: TECH.map(t => t.professional_exp)
      }, {
        name: 'Personal Experience',
        data: TECH.map(t => t.personal_exp)
      }]
    }
  })
}
</script>

<style lang="css">
</style>
