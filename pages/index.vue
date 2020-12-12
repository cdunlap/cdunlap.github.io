<template lang="pug">
main#home
  section#hero.hero.has-background-color2.is-large
    .hero-body
      .container
        h1.title.has-text-color3 {{ $prismic.asText(home.hero_title) }}
        prismic-rich-text.subtitle(:field="home.hero_content")
  section#resume.section.has-background-color1
    .container
      .columns
        .column.is-one-half-tablet
          h1.title.has-text-color3 {{ $prismic.asText(home.institutional_education_title) }}
          EducationTimeline(:data="home.education")
          h1.title.has-text-color3 {{ $prismic.asText(home.certificates_courses_title) }}
          CertificatesTimeline(:data="home.certificates")

        .column.is-one-half-tablet
          h1.title.has-text-color3 {{ $prismic.asText(home.work_history_title) }}
          WorkTimeline(:data="home.work_history")
  section#skills.section.has-background-color3
    .container
      h1.title {{ $prismic.asText(home.skills_title) }}
      //- VueApexCharts(
      //-   v-if="showLanguageChart",
      //-   type="bar",
      //-   :options="languageChart.options",
      //-   :series="languageChart.series"
      //- )
  section#contact.section.has-background-color1
    .container
      h1.title.has-text-color3 {{ $prismic.asText(home.contact_title) }}
      prismic-rich-text.has-text-color3(:field="home.contact_content")
</template>

<script>
import EducationTimeline from "@/components/EducationTimeline";
import CertificatesTimeline from "@/components/CertificatesTimeline";
import WorkTimeline from "@/components/WorkTimeline";
import moment from "moment";

export default {
  name: "home",
  components: {
    EducationTimeline,
    CertificatesTimeline,
    WorkTimeline
  },
  computed: {
    showLanguageChart() {
      return Object.keys(this.languageChart).length > 0;
    },
  },
  async asyncData({ $prismic, error }) {
    try {
      const home = (await $prismic.api.getSingle("home")).data;
      // Format the education texts
      home.education.forEach((e) => {
        e.dates = $prismic.asText(e.dates);
        e.degree = $prismic.asText(e.degree);
        e.school = $prismic.asText(e.school);
        e.location = $prismic.asText(e.location);
        e.other = $prismic.asText(e.other);
      });

      // Format the certs text
      home.certificates.forEach((c) => {
        c.title = $prismic.asText(c.title);
        c.institution = $prismic.asText(c.institution);
        c.certificate_number = $prismic.asText(c.certificate_number);
        c.certificate_date = moment(c.certificate_date).format("MMMM D, YYYY");
        c.certificate_url = c.certificate_url.url;
      });

      // Format the work history
      home.work_history.forEach((w) => {
        w.company = $prismic.asText(w.company);
        w.company_website = w.company_website.url || null;
        w.dates = $prismic.asText(w.dates);
        w.job_title = $prismic.asText(w.job_title);
        w.location = $prismic.asText(w.location);
      });

      // Setup the skills chart
      const skills = home.skills
        .sort((a, b) => {
          const years = [
            Math.max(a.professional_experience, a.personal_experience),
            Math.max(b.professional_experience, b.personal_experience),
          ];
          return years[1] - years[0];
        })
        .map((skill) => {
          return {
            name: $prismic.asText(skill.name),
            professional_exp: skill.professional_experience,
            personal_exp: skill.personal_experience,
          };
        });

      const languageChart = {
        options: {
          colors: ["#2374AB", "#0A090C"],
          xaxis: {
            categories: skills.map((l) => l.name),
          },
        },
        series: [
          {
            name: "Professional Experience",
            data: skills.map((l) => l.professional_exp),
          },
          {
            name: "Personal Experience",
            data: skills.map((l) => l.personal_exp),
          },
        ],
      };

      return { home, languageChart };
    } catch (e) {
      console.error(e);
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>

<style lang="scss">
@import "../assets/scss/vars";
.hero-body {
  .title {
    color: $color3 !important;
  }
}
#contact {
  .title {
    color: $color3 !important;
  }
}
</style>
