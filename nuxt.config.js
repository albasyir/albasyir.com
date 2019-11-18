
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: "Albasyir - Software Engineer",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: "Berbagi tentang saya, pekerjaan, dan E-book dari praktik" }
    ],
    link: [
      // favicon
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      // font
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700' },

      // icon
      { rel: 'stylesheet', href: '/vendor/nucleo/css/nucleo.css' },
      { rel: 'stylesheet', href: '/vendor/font-awesome/css/font-awesome.min.css' },

      // argon CSS
      { rel: 'stylesheet', href: '/css/argon.css' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */

  loading: '~/components/Loading',

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
