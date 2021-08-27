/*
** https://tailwindcss.com/docs/configuration
*/

module.exports = {
  theme: {
    fontFamily: {
      sans: ['bluunext', 'Arial']
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
