<template>
  <div id="app">
    <Navbar />
    <Hero />
    <Resume />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Resume from './components/Resume'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Resume,
    Skills,
    Projects,
    Contact,
    Footer
  }
}
</script>

<style lang="scss">

</style>
