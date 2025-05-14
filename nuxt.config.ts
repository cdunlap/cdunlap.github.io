import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/scripts',
    '@nuxtjs/prismic'
  ],

  vite: {
    server: {
      allowedHosts: ['.gitpod.dev']
    }
  },

  css: ['~/assets/css/main.css'],

  prismic: {
    endpoint: apiEndpoint || repositoryName,
    clientConfig: {
      routes: [
        { type: 'homepage', path: '/' },
        { type: 'project', path: '/projects/:uid' },
      ]
    }
  }
})