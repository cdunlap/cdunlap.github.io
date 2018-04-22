<template>
  <div id="app">
    <Navbar />
    <Hero />
    <Resume />
    <Skills />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Resume,
    Skills,
    Projects,
    Contact
  }
}
</script>

<style lang="scss">

</style>
