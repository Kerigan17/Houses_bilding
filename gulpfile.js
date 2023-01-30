'use strict'

const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');

const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

function defaultTask(cb) {
    return gulp.src('./src/less/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./src/css'));
}

exports.default = defaultTask

exports.watch = function () {
    gulp.watch('./src/less/*.less', gulp.series('default'))
}