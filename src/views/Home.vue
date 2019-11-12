<template lang="pug">
  main#home
    section.hero.has-background-color2.is-large#hero
      .hero-body
        .container
          h1.title.has-text-color3 {{$prismic.richTextAsPlain(home.hero_title)}}
          prismic-rich-text.subtitle(:field="home.hero_content")
    section.section.has-background-color1#resume
      .container
        .columns
          .column.is-one-half-tablet
            h1.title.has-text-color3 {{$prismic.richTextAsPlain(home.institutional_education_title)}}
            EducationTimeline(:data="home.education")
            h1.title.has-text-color3 {{$prismic.richTextAsPlain(home.certificates_courses_title)}}
            CertificatesTimeline(:data="home.certificates")

          .column.is-one-half-tablet
            h1.title.has-text-color3 {{$prismic.richTextAsPlain(home.work_history_title)}}
            WorkTimeline(:data="home.work_history")
    section.section.has-background-color3#skills
      .container
        h1.title {{$prismic.richTextAsPlain(home.skills_title)}}
        VueApexCharts(v-if="showLanguageChart" type="bar", :options="languageChart.options",
          :series="languageChart.series")
    section.section.has-background-color1#contact
      .container
        h1.title.has-text-color3 {{$prismic.richTextAsPlain(home.contact_title)}}
        prismic-rich-text.has-text-color3(:field="home.contact_content")
  </main>
</template>

<script>
import EducationTimeline from '@/components/EducationTimeline'
import CertificatesTimeline from '@/components/CertificatesTimeline'
import WorkTimeline from '@/components/WorkTimeline'
import VueApexCharts from 'vue-apexcharts'
import moment from 'moment'

export default {
  name: 'home',
  components: {
    EducationTimeline,
    CertificatesTimeline,
    WorkTimeline,
    VueApexCharts
  },
  data: () => ({
    home: {},
    languageChart: {}
  }),
  computed: {
    showLanguageChart () {
      return Object.keys(this.languageChart).length > 0
    }
  },
  created () {
    this.$prismic.client.getSingle('home')
      .then(response => {
        this.home = response.data

        // Format the education texts
        this.home.education.forEach(e => {
          e.dates = this.$prismic.richTextAsPlain(e.dates)
          e.degree = this.$prismic.richTextAsPlain(e.degree)
          e.school = this.$prismic.richTextAsPlain(e.school)
          e.location = this.$prismic.richTextAsPlain(e.location)
          e.other = this.$prismic.richTextAsPlain(e.other)
        })

        // Format the certs text
        this.home.certificates.forEach(c => {
          c.title = this.$prismic.richTextAsPlain(c.title)
          c.institution = this.$prismic.richTextAsPlain(c.institution)
          c.certificate_number = this.$prismic.richTextAsPlain(c.certificate_number)
          c.certificate_date = moment(c.certificate_date).format('MMMM D, YYYY')
          c.certificate_url = c.certificate_url.url
        })

        // Format the work history
        this.home.work_history.forEach(w => {
          w.company = this.$prismic.richTextAsPlain(w.company)
          w.company_website = w.company_website.url || null
          w.dates = this.$prismic.richTextAsPlain(w.dates)
          w.job_title = this.$prismic.richTextAsPlain(w.job_title)
          w.location = this.$prismic.richTextAsPlain(w.location)
        })

        // Setup the skills chart
        const skills = this.home.skills.sort((a, b) => {
          const years = [
            Math.max(a.professional_experience, a.personal_experience),
            Math.max(b.professional_experience, b.personal_experience)
          ]
          return years[1] - years[0]
        }).map(skill => {
          return {
            name: this.$prismic.richTextAsPlain(skill.name),
            professional_exp: skill.professional_experience,
            personal_exp: skill.personal_experience
          }
        })

        this.languageChart = {
          options: {
            colors: ['#2374AB', '#0A090C'],
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
      })
  }
}
</script>

<style lang="scss">
@import '../scss/vars';
.hero-body {
  .title {
    color: $color3 !important;
  }
}
#contact {
  .title { color: $color3 !important; }
}
</style>
