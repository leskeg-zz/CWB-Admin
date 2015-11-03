(function () {
    var concat, cssmin, del, gulp, wrap, gutil, imagemin, insert, minifyHTML, onError, paths, prefix, sass, svgmin, uglify;

    gulp = require('gulp');

    wrap = require('gulp-wrap');

    sass = require('gulp-sass');

    prefix = require('gulp-autoprefixer');

    cssmin = require('gulp-cssmin');

    minifyHTML = require('gulp-minify-html');

    imagemin = require('gulp-imagemin');

    svgmin = require('gulp-svgmin');

    concat = require('gulp-concat');

    uglify = require('gulp-uglify');

    del = require('del');

    gutil = require('gulp-util');

    insert = require('gulp-insert');

    paths = {
        src: {
            scripts: 'src/app/**/*.js',
            templates: 'src/**/*.html',
            styles: 'src/assets/styles/**/*.sass',
            fonts: 'src/assets/fonts/**/*',
            images: 'src/assets/images/**/*'
        },
        dest: {
            scripts: 'dist/app',
            templates: 'dist/',
            styles: 'dist/assets/styles',
            fonts: 'dist/assets/fonts',
            images: 'dist/assets/images'
        }
    };

    gulp.task('scripts', function () {
        return gulp
            .src([
                'src/app/app.module.js',
                'src/app/app.constant.js',
                'src/app/app.config.js',
                'src/app/app.route.js',
                paths.src.scripts
            ])
            .pipe(wrap('(function(){\n"use strict";\n<%= contents %>\n})();'))
            .pipe(concat('app.min.js', {newLine: '\n\n'}))
            .pipe(gulp.dest(paths.dest.scripts))
    });

    gulp.task('templates', function () {
        return gulp.src(paths.src.templates)
            .pipe(gulp.dest(paths.dest.templates))
            .on('error', onError);
    });

    gulp.task('styles', function () {
        return gulp.src(paths.src.styles).pipe(sass().on('error', onError)).pipe(prefix("> 1%")).pipe(gulp.dest(paths.dest.styles));
    });

    gulp.task('images', function () {
        return gulp.src(paths.src.images).pipe(imagemin({
            optimizationLevel: 5
        })).pipe(gulp.dest(paths.dest.images));
    });

    gulp.task('svg', function () {
        return gulp.src(paths.src.images + '.svg').pipe(svgmin()).pipe(gulp.dest(paths.dest.images));
    });

    gulp.task('fonts', function () {
        return gulp.src(paths.src.fonts).pipe(gulp.dest(paths.dest.fonts));
    });

    gulp.task('watch', function () {
        gulp.watch(paths.src.scripts, ['scripts']);
        gulp.watch(paths.src.templates, ['templates']);
        gulp.watch(paths.src.styles, ['styles']);
        gulp.watch(paths.src.images, ['images', 'svg']);
        return gulp.watch(paths.src.fonts, ['fonts']);
    });

    gulp.task('default', ['watch', 'scripts', 'templates', 'styles', 'images', 'svg', 'fonts']);

    onError = function (error) {
        gutil.log(error);
        this.emit('end');
    };

}).call(this);
