

var gulp = require("gulp");
var prefix = require("gulp-autoprefixer");
var sass = require("gulp-sass");

var path = "./scss/style.scss";
var dist = "./css/style.css"; 

gulp.task('watch', function(){
    return gulp.src(path)
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix())
        .pipe(gulp.dest(dist));
});

gulp.task('default', function () {
    gulp.watch(path, ['watch']);
});