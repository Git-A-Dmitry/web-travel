const { src, dest, watch, series } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

function compileScss() {
  return src('src/scss/*scss') //
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(dest('./dist/css'));
}

function bundleJs() {
  return src('src/scripts/*js') //
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(dest('./dist/js'));
}

function watchTask() {
  watch('src/scss/*.scss', compileScss);
  watch('src/scripts/*js', bundleJs);
}

exports.default = series(compileScss, bundleJs, watchTask);
