

var gulp = require("gulp");
var prefix = require("gulp-autoprefixer");
var sourcemaps = require('gulp-sourcemaps');
var sass = require("gulp-sass");

var path = "./scss/**/style.scss";
var dist = "./css/"; 

gulp.task('watch', function(){
    return gulp.src(path)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(prefix())
        .pipe(gulp.dest(dist));
});

gulp.task('default', function () {
    gulp.watch(path, ['watch']);
});