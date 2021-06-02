export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'xenia',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {  src: "/index.js", },    
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      '~/plugins/client-only.js',
      '~/plugins/components.js',
      '~/plugins/composition-api.js',
      '~/plugins/storyblok-rich-text-renderer.js',

  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],

  modules: [
      [
        'storyblok-nuxt',
        {
          accessToken: 'yFZ6pxKlSVAQNnQOrti5VAtt',
          cacheProvider: 'memory'
        }
      ],
    ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
