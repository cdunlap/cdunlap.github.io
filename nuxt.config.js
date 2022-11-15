export default {
    /*
    ** Headers of the page
    ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
    */
    head: {
      title: 'Cale Dunlap',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'I\'m a syntactically diverse software developer living in the Reno, NV area of the United States.' },
        { property: 'og:title', content: 'Cale Dunlap' },
        { property: 'og:description', content: 'I\'m a syntactically diverse software developer living in the Reno, NV area of the United States.' },
        { property: 'og:image', content: 'https://cale.codes/img/Portfolio-Social.png' }
      ]
    },
  
    /*
    ** Global CSS
    ** Doc: https://nuxtjs.org/api/configuration-css
    */
    css: [
      // '@/assets/scss/_helpers.scss',
      '@fortawesome/fontawesome-free/css/all.css',
      '@/assets/scss/_timeline.scss',
      '@/assets/scss/_coreui.scss'
    ],
  
    /*
    ** Plugins to load before mounting the App
    ** Doc: https://nuxtjs.org/guide/plugins
    */
    plugins: [
      // '~/plugins/prismic-vue.js'
      // { src: '~/plugins/v-lightbox.js', mode: 'client' }
      { src: '~/plugins/vue-gallery.client.js', ssr: false },
      // { src: '~/plugins/bootstrap-vue.js' }
    ],
  
    /*
    ** Nuxt.js modules
    ** Doc: https://nuxtjs.org/guide/modules
    */
    modules: [
      '@nuxtjs/prismic'
    ],

    buildModules: [
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
      extend(config, ctx) {
        if (ctx.isDev) {
          config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
        }
      },
      babel:{
        plugins: [
          ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
          ["@babel/plugin-proposal-private-methods", { "loose": true }]
        ]
      }
    },

    prismic: {
        endpoint: 'https://calecodes.prismic.io/api/v2',
        modern: true,
        linkResolver: '@/plugins/link-resolver',
        htmlSerializer: '@/plugins/html-serializer',
    },
    generate: {
        fallback: '404.html'
    },
    target: 'static',
    server: {
      host: '0.0.0.0'
    }
  };
  