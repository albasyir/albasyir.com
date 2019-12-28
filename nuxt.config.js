
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: "Albasyir - Dont make same, Make Better",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: "Dont make same, make better" }
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
    ],
    script: [
      { src: '/vendor/jquery/jquery.min.js' },
      { src: '/vendor/popper/popper.min.js' },
      { src: '/vendor/bootstrap/bootstrap.min.js' },
      { src: '/js/argon.min.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */

  loading: '~/components/Loading',
  loadingIndicator: '~/components/loadingSPA.html',

  /*
  ** Global CSS
  */
  css: [
    '@/assets/helper.css'
  ],

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
