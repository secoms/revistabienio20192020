const gulp = require('gulp');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
let cleanCss = require('gulp-clean-css');

function processImg() {
    return gulp.src([
        'src/assets/imgs/**/*.jpg',
        'src/assets/imgs/**/*.jpeg',
        'src/assets/imgs/**/*.png',
        'src/assets/imgs/**/*.gif',
    ])
        .pipe(gulp.dest('src/dist/imgs'))
}
gulp.task('processImg',processImg)