<template lang="pug">
footer
  b-container
    p Copyright &copy; {{year}} Cale Dunlap.
      | #[a(href="https://github.com/cdunlap/cdunlap.github.io", target="_blank") View Source].
</template>

<script>
import moment from 'moment'
export default {
  data: () => ({
    year: moment().format("YYYY")
  })
};
</script>

<style lang="css" scoped>
footer {
  font-size: 0.8em;
}
</style>
