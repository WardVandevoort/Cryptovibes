const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
sass.compiler = require('node-sass');

sass2css = function(){
    return src('./public/stylesheets/sass/app.css')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist'));
};

gulp.task('minify-css', () => {
return gulp.src('./public/stylesheets/sass/app.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('imagemin', ()=>{
    return gulp.src('./public/svg')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist'));
})

exports.default = function() {
    // You can use a single task
    watch('./public/stylesheets/sass/**/*.scss', sass2css);
    watch('./public/stylesheets/sass/**/*.scss', task);
    watch('./public/stylesheets/sass/**/*.scss', task);
  };