<template lang="pug">
main#resume
  b-jumbotron(
    :header="$prismic.asText(home.hero_title)",
    :lead="$prismic.asText(home.hero_lead)",
    bg-variant="color2",
    text-variant="color3",
    :fluid="true"
  )
    prismic-rich-text.subtitle(:field="home.hero_content")
  b-container
    b-row
      b-col(md="4")
        h2 {{ $prismic.asText(home.work_history_title) }}
        WorkTimeline(:data="home.work_history")
      b-col(md="4")
        h2 {{ $prismic.asText(home.institutional_education_title) }}
        EducationTimeline(:data="home.education")
      b-col(md="4")
        h2 {{ $prismic.asText(home.certificates_courses_title) }}
        CertificatesTimeline(:data="home.certificates")
  b-container.mb-4
    h1.title {{ $prismic.asText(home.skills_title) }}
    prismic-rich-text(:field="home.skills_content")
    b-card-group(columns)
      SkillCard(v-for="skill in skills" :key="skill.id" :skill="skill.data")
  b-container
    h1.title {{ $prismic.asText(home.contact_title) }}
    prismic-rich-text(:field="home.contact_content")
</template>

<script>
import EducationTimeline from "@/components/EducationTimeline";
import CertificatesTimeline from "@/components/CertificatesTimeline";
import WorkTimeline from "@/components/WorkTimeline";
import SkillCard from '@/components/SkillCard';

export default {
  name: "home",
  components: {
    EducationTimeline,
    CertificatesTimeline,
    WorkTimeline,
    SkillCard,
  },

  async asyncData({ $prismic, error }) {
    try {
      const [home, skills] = await Promise.all([
        $prismic.api.getSingle('home'),
        $prismic.api.query($prismic.predicates.at('document.type', 'skill'))
      ])
      return { home: home.data, skills: skills.results };
    } catch (e) {
      console.error(e);
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>


<style lang="scss" scoped>
@import "../assets/scss/vars";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";
.card-columns {
  column-count: 1;
  @include media-breakpoint-up(md) {
    column-count: 2;
  }
  @include media-breakpoint-up(lg) {
    column-count: 3;
  }
}
</style>