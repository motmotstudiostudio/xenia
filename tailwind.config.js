/*
** https://tailwindcss.com/docs/configuration
*/

module.exports = {
  mode: 'jit',
  theme: {
    fontFamily: {
      sans: ['bluunext', 'Arial']
    },
    // colors: {
    //   primary: 'var(--color-primary)',
    //   secondary: 'var(--color-secondary)'
    // }
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
