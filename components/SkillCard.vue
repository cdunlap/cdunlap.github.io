<template lang="pug">
b-card(:title="$prismic.asText(skill.name)")
  //- SkillExperienceBars(:skill="skill")
  //- b-card-text
  //-   strong {{ skill.professional_experience }}
  //-   strong {{ skill.personal_experience }}
  //-   strong {{ skill.subjective_rating }}
  b-table-simple.small(small)
    b-thead
      b-tr
        b-th Usage
        b-th Years
    b-tbody
      b-tr
        b-th Professional
        b-td {{skill.professional_experience}}
      b-tr
        b-th Personal
        b-td {{skill.personal_experience}}
    //- b-badge.primary {{skill.professional_experience}}yrs Professional
    //- b-badge.primary {{skill.personal_experience}}yrs Personal
  b-card-text.small
    strong Associated Projects
    ul
      li(v-for="project in projects" :key="project.id")
        //- For some reason, the prismic linking doesn't work here. It renders a blank <a> tag and screws with SSR. Problem with the LinkResolver.
        a(:href="`/project/${project.uid}`") {{ $prismic.asText(project.data.name) }}
</template>

<script>
import SkillExperienceBars from '@/components/SkillExperienceBars'
export default {
  components: {
    SkillExperienceBars
  },
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    projects: [],
  }),
  async mounted() {
    const ids = this.skill.associated_projects.map((p) => p.project.id);
    this.projects = (await this.$prismic.api.getByIDs(ids)).results;
  },
};
</script>