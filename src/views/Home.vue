<template>
  <main id="home">
    <Hero />
    <Resume />
    <Skills />
    <Contact />
  </main>
</template>

<script>
import Hero from '@/components/Hero'
import Resume from '@/components/Resume'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default {
  name: 'home',
  components: {
    Hero,
    Resume,
    Skills,
    Contact
  }
}
</script>
