// const purgecss = require('@fullhuman/postcss-purgecss')({

//   // Specify the paths to all of the template files in your project 
//   content: [
//     './src/components/**/*.html',
//     './src/components/**/*.vue',
//     './src/components/**/*.js'
//   ],

//   // Include any special characters you're using in this regular expression
//   defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
// })

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // purgecss,
    // ...process.env.NODE_ENV === 'production'
    //   ? [purgecss]
    //   : []
  ]
}
