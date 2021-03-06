const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
//const imagemin = require('gulp-imagemin');
sass.compiler = require('node-sass');

sass2css = function(){
    return src('./public/stylesheets/sass/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./public/dist/'));
};

/* imagemin = function (){
    return gulp.src('./public/svg')
    .pipe(imagemin())
    .pipe(gulp.dest('/dist/app.css'));
} */

exports.default = function() {
    // You can use a single task
    watch('./public/stylesheets/sass/**/*.scss', sass2css);
    //watch('./public/stylesheets/sass/**/*.scss', imagemin);
}