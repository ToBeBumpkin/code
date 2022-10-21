const gulp = require('gulp')
const jshint = require('gulp-jshint')
const babel = require('gulp-babel')
const browserify = require('gulp-browserify')
const rename = require('gulp-rename')

gulp.task('hello', async () => {
    console.log('Hello gulp');
})

gulp.task('jshint', function () {
    return gulp.src('./src/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
})

gulp.task('babel', () => {
    return gulp.src('./src/script/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        })).pipe(gulp.dest('build/js'))
})

gulp.task('browserify', () => {
    return gulp.src('./build/js/app.js')
        .pipe(browserify())
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('build/js'))
})

gulp.task('default',gulp.series('jshint','babel','browserify'))