import i18n from "./config/i18n";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Blockchain Hackathon',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Blockchain Hackathon'},
      {name: 'og:title', content: 'Seedstars'},
      {name: 'og:description', content: 'Blockchain Hackathon'},
      {name: 'og:image', content: '/favicon.ico'},
      {name: "facebook-domain-verification", content: "wf7yf1x8vqap2klo39oxe4h0vo1pgq"},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: "~/plugins/defaultPlugin", mode: "client"}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'ru',
            name: 'Russian'
          },
          {
            code: 'kz',
            name: 'Kazakh'
          },
          {
            code: 'en',
            name: 'English'
          }
        ],
        defaultLocale: 'ru',
        vueI18n: i18n,
        strategy: 'prefix_except_default',
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',

    '@nuxtjs/gtm',

    // [
    //   'nuxt-facebook-pixel-module',
    //   {
    //     track: 'PageView',
    //     pixelId: '820774322176569',
    //     autoPageView: true,
    //     disabled: false
    //   }
    // ],

    [
      '@dukanify/nuxt-multiple-facebook-pixel-module', {
      track: 'PageView',
      pixelId: ['820774322176569', '489135002377309'],
      disabled: false
    }],

    [
      '@nuxtjs/yandex-metrika',
      {
        id: '81001639',
        webvisor: true,
        clickmap: true,
        // useCDN:false,
        trackLinks: true,
        accurateTrackBounce: true,
      }
    ],
  ],

  gtm: {
    id: 'GTM-T8ZPG3M',
    debug: true,
    enabled: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  env: {
    API_URL: 'https://jva.kz/api/'
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // ssr: false
}
