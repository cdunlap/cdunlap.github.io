<template lang="pug">
.skill
  .skill-name
    strong {{ $prismic.asText(skill.name) }}
  .skill-bar
    b-progress(:value="skill.subjective_rating", max="100")
</template>

<script>
export default {
  props: ["skill"],
};
</script>

<style lang="scss" scoped>
</style>