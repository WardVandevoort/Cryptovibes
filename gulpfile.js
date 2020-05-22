const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
//const imagemin = require('gulp-imagemin');
//sass.compiler = require('node-sass');

sass2css = function(){
    return src('./public/stylesheets/sass/app.scss')
    .pipe(sass({ outputStyle: "compressed" }).on('error', sass.logError))
    .pipe(dest('./public/dist/css/'));
};

/* imagemin = function (){
    return gulp.src('./public/svg')
    .pipe(imagemin())
    .pipe(gulp.dest('/dist/app.css'));
} */

module.exports.default = function() {
    // You can use a single task
    watch('./public/stylesheets/sass/**/*.scss', sass2css);
    //watch('./public/stylesheets/sass/**/*.scss', imagemin);
}