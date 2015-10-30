# Load all required libraries.
gulp = require 'gulp'
coffee = require 'gulp-coffee'
sass = require 'gulp-sass'
prefix = require 'gulp-autoprefixer'
cssmin = require 'gulp-cssmin'
jade = require 'gulp-jade'
minifyHTML = require 'gulp-minify-html'
imagemin = require 'gulp-imagemin'
svgmin = require 'gulp-svgmin'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'
del = require 'del'
gutil = require 'gulp-util'
insert = require 'gulp-insert'

paths =
  src:
    scripts: 'src/app/**/*.coffee'
    templates: 'src/**/*.jade'
    styles: 'src/assets/styles/**/*.sass'
    fonts: 'src/assets/fonts/**/*'
    images: 'src/assets/images/**/*'
  dest:
    scripts: 'dist/app'
    templates: 'dist/'
    styles: 'dist/assets/styles'
    fonts: 'dist/assets/fonts'
    images: 'dist/assets/images'

gulp.task 'scripts', ->
  gulp.src [
    'src/app/app.module.coffee', 
    'src/app/app.constant.coffee', 
    'src/app/app.config.coffee',
    'src/app/app.route.coffee',
    paths.src.scripts
  ]
  # gulp.src paths.src.scripts
    .pipe insert.prepend("'use strict';")
    .pipe coffee().on('error', onError)
    # .pipe coffee({bare:true}).on('error', onError)
    # .pipe insert.wrap("(function(){\r\n'use strict';\r\n", "})();")
    .pipe concat('app.min.js')
    # .pipe uglify()
    .pipe gulp.dest paths.dest.scripts
  gulp.src './server.coffee'
    .pipe coffee({bare:true}).on('error', onError)
    .pipe gulp.dest '.'

# Create you HTML from Jade
gulp.task 'templates', ->
  # gulp.src [ paths.src.templates, '!src/index.jade' ]
  gulp.src paths.src.templates
    .pipe jade({pretty: true}).on('error', onError)
    # .pipe minifyHTML()
    .pipe gulp.dest paths.dest.templates
  # gulp.src 'src/index.jade'
  #   .pipe jade({pretty: true}).on('error', onError)
  #   .pipe gulp.dest '.'

# Create your CSS from Sass
gulp.task 'styles', ->
  gulp.src paths.src.styles
    .pipe sass().on('error', onError)
    .pipe prefix "> 1%"
    # .pipe cssmin keepSpecialComments: 0
    .pipe gulp.dest paths.dest.styles

# Copy all static images
gulp.task 'images', ->
  gulp.src paths.src.images
    .pipe imagemin optimizationLevel: 5
    .pipe gulp.dest paths.dest.images

# Minify your SVG.
gulp.task 'svg', ->
  gulp.src paths.src.images+'.svg'
    .pipe svgmin()
    .pipe gulp.dest paths.dest.images

# Copy the fonts using streams.
gulp.task 'fonts', ->
  gulp.src paths.src.fonts
    .pipe gulp.dest paths.dest.fonts

# Rerun the task when a file changes
gulp.task 'watch', ->
  gulp.watch paths.src.scripts, ['scripts']
  gulp.watch paths.src.templates, ['templates']
  gulp.watch paths.src.styles, ['styles']
  gulp.watch paths.src.images, ['images','svg']
  gulp.watch paths.src.fonts, ['fonts']

# Default task call every tasks created so far.
gulp.task 'default', ['watch', 'scripts', 'templates', 'styles', 'images', 'svg', 'fonts']

onError = (error) ->
  gutil.log error
  this.emit 'end'
  return