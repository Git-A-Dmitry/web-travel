const { src, dest, watch, series } = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');

function compileScss() {
  return src('src/scss/*scss').pipe(sass()).pipe(prefix('last 2 versions')).pipe(dest('./dist/css'));
}

function watchTask() {
  watch('src/scss/*.scss', compileScss);
}

exports.default = series(compileScss, watchTask);
