const BLOG = require('./blog.config')
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: BLOG.appearance === 'auto' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.lightBackground || '#ffffff'
        },
        night: {
          DEFAULT: BLOG.darkBackground || '#111827'
        }
      },
      fontFamily: {
        sans: ['"Josefin Sans"', '"Hanyi Round"'],
        serif: ['"Josefin Sans"', '"Hanyi Round"'],
        noEmoji: [
          '"Josefin Sans"',
          '"Hanyi Round"'
        ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
