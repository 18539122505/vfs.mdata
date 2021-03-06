const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '小微数据',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/dist/lib/flexible.js', type: 'text/javascript', charset: 'utf-8'}
    ]
  },
  router: {
    base:'./',
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  layoutTransition: 'layout',
  // or
  transition: {
    name: 'layout',
    mode: 'out-in'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    '~assets/style/global.less'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
  //  extend(config, { isDev, isClient }) {
  //     if(!isDev){
  //       config.output.publicPath = './_nuxt/';
  //     }
  //   },
    postcss: [
      require('postcss-px2rem')({
        remUnit: 75
      })
    ]
  }
}
