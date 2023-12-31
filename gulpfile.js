const gulp = require('gulp');
//const sass = require('gulp-sass');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 version']
        }))
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('css'))
}

function watchFiles(){
    gulp.watch('scss/*.scss', css);
    gulp.watch('index.html')
}

// tasks
gulp.task('css', css);
gulp.task('watch', gulp.parallel(watchFiles));