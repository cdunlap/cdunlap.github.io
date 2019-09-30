<template lang="pug">
section.section.has-background-color3#skills
  .container
    h1.title Skills by Years of Experience
    VueApexCharts(type="bar", :options="languageChart.options", :series="languageChart.series")
    //-
    //- VueApexCharts(type="bar", :options="techChart.options", :series="techChart.series")
    h1.title Skills by Proficiency
    //- VueApexChart(type="bar", :options="proficiencyChart.options", :series="proficiencyChart.series")
</template>

<script>
import MatrixTable from './MatrixTable'
import VueApexCharts from 'vue-apexcharts'
import { LANGUAGES, TECH } from '../data.js'

const chartOptions = {
  colors: ['#2374AB', '#0A090C']
}

const skills = [].concat(LANGUAGES, TECH)
  .sort((a, b) => {
    const years = [
      Math.max(a.professional_exp, a.personal_exp),
      Math.max(b.professional_exp, b.personal_exp)
    ]
    return years[1] - years[0]
  })

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
          categories: skills.map(l => l.name)
        }
      },
      series: [{
        name: 'Professional Experience',
        data: skills.map(l => l.professional_exp)
      }, {
        name: 'Personal Experience',
        data: skills.map(l => l.personal_exp)
      }]
    }
    // languageChart: {
    //   options: {
    //     ...chartOptions,
    //     xaxis: {
    //       categories: LANGUAGES.map(l => l.name)
    //     }
    //   },
    //   series: [{
    //     name: 'Professional Experience',
    //     data: LANGUAGES.map(l => l.professional_exp)
    //   }, {
    //     name: 'Personal Experience',
    //     data: LANGUAGES.map(l => l.personal_exp)
    //   }]
    // },
    //
    // techChart: {
    //   options: {
    //     ...chartOptions,
    //     xaxis: {
    //       categories: TECH.map(t => t.name)
    //     }
    //   },
    //   series: [{
    //     name: 'Professional Experience',
    //     data: TECH.map(t => t.professional_exp)
    //   }, {
    //     name: 'Personal Experience',
    //     data: TECH.map(t => t.personal_exp)
    //   }]
    // }
  })
}
</script>

<style lang="css">
</style>
