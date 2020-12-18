export default {
    /*
    ** Headers of the page
    ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
    */
    head: {
      title: 'cale.codes',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'I\'m a syntactically diverse software developer living in the San Francisco Bay Area of the United States.' }
      ]
    },
  
    /*
    ** Global CSS
    ** Doc: https://nuxtjs.org/api/configuration-css
    */
    css: [
      '@/assets/scss/_bulma.scss',
      '@/assets/scss/_helpers.scss',
      '@fortawesome/fontawesome-free/css/all.css'
    ],
  
    /*
    ** Plugins to load before mounting the App
    ** Doc: https://nuxtjs.org/guide/plugins
    */
    plugins: [
      // '~/plugins/prismic-vue.js'
      // { src: '~/plugins/v-lightbox.js', mode: 'client' }
      { src: '~/plugins/vue-gallery.js', mode: 'client' }
    ],
  
    /*
    ** Nuxt.js modules
    ** Doc: https://nuxtjs.org/guide/modules
    */
    modules: [
        '@nuxtjs/prismic'
    ],
  
    /*
    ** HTTP module configuration
    */
    http: {
      // See https://http.nuxtjs.org/api/#options
    },
  
    /*
    ** Build configuration
    ** Doc: https://nuxtjs.org/api/configuration-build
    */
    build: {
      /*
      ** You can extend webpack config here
      */
      extend(config, ctx) {}
    },

    prismic: {
        endpoint: 'https://calecodes.prismic.io/api/v2',
        linkResolver: '@/plugins/link-resolver',
        htmlSerializer: '@/plugins/html-serializer',
    },
    generate: {
        fallback: '404.html'
    },
    target: 'static'
  };
  