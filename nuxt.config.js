const webpack = require('webpack');
const path = require('path');
require('dotenv').config();

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Mido的特效整理',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      },
      {
        name: 'robots',
        content: 'noindex'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/css.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Noto+Sans|Source+Code+Pro'
      },
    ],
    script: [
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  router: {
    linkExactActiveClass: 'is-active-trail',
    linkActiveClass: 'active',
    middleware: ['reset_header','rewrite'],
  },
  css: [
    // CSS file in the project
    //'@/assets/css/style.css',
    // SCSS file in the project
    // '@/assets/scss/style.scss'
    'vue2-animate/dist/vue2-animate.min.css',
    'highlight.js/styles/zenburn.css',
  ],
  // transition: 'fade',
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#da3836'
  },

  plugins: [
    '~/plugins/vuex-router-sync',
    '~/plugins/vue-mixin',
    '~/plugins/vue-markdown',
    '~/plugins/vue-scrollto',
    '~/plugins/vue-slick',
    '~/plugins/vue-highlight',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    ['nuxt-sass-resources-loader'],
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
    ['@nuxtjs/google-tag-manager', { id: 'GTM-NVTGF47', pageTracking: true}],
  ],
  sassResources: [
    '@/assets/scss/style.scss'
  ],
  axios: {
    // proxyHeaders: false,
    // baseURL: 'https://hsbk.dev3.hellosanta.tw'
    // baseURL: process.env.API_URL || 'https://hsbk.dev3.hellosanta.tw',
  },
  // env: {
  //   baseUrl: "http://hsofficial.dev3.hellosanta.tw",
  //   baseURL: process.env.BASE_URL || 'https://hsofficial.dev3.hellosanta.tw'
  // },

  /*
   ** Build configuration
   */
  build: {

    vender: ['bootstrap'],

    plugins: [
      new webpack.ProvidePlugin({
        'window.jQuery': 'jquery',
        jQuery: 'jquery',
        $: 'jquery',
      })
    ],
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

    extend (config, { isServer }) {
      if (isServer) {
        config.externals = [
          require('webpack-node-externals')({
            whitelist: [/^vue-slick/]
          })
        ]
      }
    }
  }
}