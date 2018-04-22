<template lang="pug">
section.section.has-background-color2
  .container
    h1.title.has-text-color3 Projects

    .project-list.columns.is-multiline
      .column.is-4(v-for='(project, idx) in projects' v-bind:key='idx')
        ProjectCard(:title='project.title' :image='project.image' :description='project.description' :liveurl='project.liveurl')
</template>

<script>
import ProjectCard from './ProjectCard'
import * as lipsum from 'lorem-ipsum'

export default {
  components: {
    ProjectCard
  },
  data: () => ({
    projects: [{
      title: 'Firearms: Source',
      image: 'https://picsum.photos/1600/900/?random',
      description: 'A Source Engine (Half-Life 2) total-conversion developed in C and C++ using the Source SDK.'
    }, {
      title: 'VIKENG Mocap Tool',
      image: 'https://picsum.photos/1600/900/?random',
      description: 'Native application used to record and review motion capture data as well as gesture recognition information.'
    }, {
      title: 'GDIS & MMIST',
      image: 'https://picsum.photos/1600/900/?random',
      description: 'Immersive training simulator prototype for the US Army using commercially available hardware and software.'
    }, {
      title: 'Firearms 2',
      image: 'https://picsum.photos/1600/900/?random',
      description: 'Between Firearms and Firearms: Source there was Firearms 2. This was one of at least two attempts at a Firearms reboot.'
    }, {
      title: 'Firearms',
      image: 'https://picsum.photos/1600/900/?random',
      description: 'A GoldSrc Engine (Half-Life 1) total-conversion developed in C and C++ using the GoldSrc SDK.'
    }, {
      title: 'Mideast Media Survey',
      image: 'https://picsum.photos/1600/900/?random',
      description: 'Explore data collected from a survey about how people in the middle east use media and the Internet.',
      liveurl: 'http://www.mideastmedia.org/survey/2016/'
    }, {
      title: 'Financial Inclusion Insights Website and Data Tool',
      image: 'https://picsum.photos/1600/900/?random',
      description: 'We collaborated with InterMedia, which created the Financial Inclusion Insights (FII) Program in 2013, in partnership with the Bill and Melinda Gates Foundation. The FII program was created to collect and analyze meaningful data on financial behaviors in eight countries across Africa and Asia.',
      liveurl: 'http://finclusion.org'
    }, {
      title: 'Groove Glider',
      image: 'https://picsum.photos/1600/900/?random',
      description: 'Groove Glider is an experimental side-scroller that leverages the dynamic game state to influence the in-game music. Created by Column Five on the Quintus HTML5 game engine.',
      liveurl: 'http://grooveglider.columnfivemedia.com/'
    }, {
      title: 'Something\'s Got to GIF',
      image: 'https://picsum.photos/1600/900/?random',
      description: 'We partnered with Mashable to create an interactive survey to ask readers how they pronounce various tech terms. The interactive was a huge success, with more than 29,000 responses from 191 countries.',
      liveurl: 'http://mashable-tech-dialect.elasticbeanstalk.com/'
    }, {
      title: 'Beyond The Beat: Robert Johnson',
      image: 'https://picsum.photos/1600/900/?random',
      description: 'Beyond the Beat is an ongoing interactive storytelling project that began in 2016 to celebrate Black History Month, focused on telling the stories behind lesser-known African-American musicians who have made huge impacts on the broader music world.',
      liveurl: 'http://beyondthebeat.columnfivemedia.com/'
    }, {
      title: 'Sustainability at Warner Bros.',
      image: 'https://picsum.photos/1600/900/?random',
      description: 'Explore how Warner Bros. is driving innovation through its production facilities.',
      liveurl: 'http://www.wbcitizenship.com/sustainability-at-warner-bros/'
    }, {
      title: 'Warner Bros. in the Global Community',
      image: 'https://picsum.photos/1600/900/?random',
      description: 'See how Warner Bros. is working to forge productive relationships in the global community.',
      liveurl: 'http://www.wbcitizenship.com/warner-bros-in-the-global-community/'
    }, {
      title: 'Ocean Health Index Data Explorer',
      image: 'https://picsum.photos/1600/900/?random',
      description: lipsum(),
      liveurl: 'http://data.oceanhealthindex.org'
    }, {
      title: 'Column Five Brand Guidelines',
      image: 'https://picsum.photos/1600/900/?random',
      description: lipsum(),
      liveurl: 'https://brand.columnfivemedia.com'
    }, {
      title: 'Skoll Global Threats Fund Community Map',
      image: 'https://picsum.photos/1600/900/?random',
      description: 'We partnered with the Skoll Global Threats Fund to design and develop a dynamic and thoughtfully built community of practice website for EndingPandemics.org.',
      liveurl: 'http://endingpandemics.org/community/'
    }, {
      title: 'Anatomy of a Breach',
      image: 'https://picsum.photos/1600/900/?random',
      description: 'This HTML native site analyses the various stages of a company security breach from the hacker’s POV. Highlighting the systemic weaknesses hackers look for most, the site presents Microsoft’s solutions to avoiding and overcoming such gaps in security.',
      liveurl: 'https://cloud-platform-assets.azurewebsites.net/anatomy-of-a-breach/'
    }]
  })
}
</script>
