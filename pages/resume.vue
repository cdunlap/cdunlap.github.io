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
        //- EducationTimeline(:data="home.education")
      b-col(md="4")
        h2 {{ $prismic.asText(home.certificates_courses_title) }}
        CertificatesTimeline(:data="home.certificates")
  b-container.mb-4
    h1.title {{ $prismic.asText(home.skills_title) }}
    prismic-rich-text(:field="home.skills_content")
    b-row.skills
      b-col(md="4" v-for="skill in skills" :key="skill.id")
        strong {{$prismic.asText(skill.data.name)}}
      //- SkillBar.col-sm-6.col-md-4(
      //-   v-for="skill in home.skills",
      //-   :key="$prismic.asText(skill.name)",
      //-   :skill="skill"
      //- )
  b-container
    h1.title {{ $prismic.asText(home.contact_title) }}
    prismic-rich-text(:field="home.contact_content")
</template>

<script>
import EducationTimeline from "@/components/EducationTimeline";
import CertificatesTimeline from "@/components/CertificatesTimeline";
import WorkTimeline from "@/components/WorkTimeline";
import SkillBar from "@/components/SkillBar";
import moment from "moment";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}

export default {
  name: "home",
  components: {
    EducationTimeline,
    CertificatesTimeline,
    WorkTimeline,
    SkillBar,
  },
  computed: {
    showLanguageChart() {
      return Object.keys(this.languageChart).length > 0;
    },
  },
  mounted() {
    this.navbarTween = gsap.to(".navbar-brand.me", {
      x: 0,
      autoAlpha: 1,
      scrollTrigger: {
        start: "bottom top+=20%",
        trigger: ".hero",
        toggleActions: "play none none reverse",
      },
    });
  },
  destroyed() {
    this.navbarTween.kill();
    gsap.set(".navbar-brand.me", {
      x: 0,
      autoAlpha: 1,
    });
  },
  async asyncData({ $prismic, error }) {
    try {
      /*
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

      const skills = (
        await $prismic.api.query(
          $prismic.predicates.at("document.type", "skill")
        )
      ).results;
      */

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