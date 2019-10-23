var gulp = require("gulp")
var scss = require("gulp-sass")
scss.compiler = require("node-sass")
var del = require('del')

gulp.task('html', function(){
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build/'))
});

gulp.task('img', function(){
    return gulp.src('src/img/*.*')
        .pipe(gulp.dest('build/img/'))
});
gulp.task('style', function(){
    return gulp.src('src/style/**/*.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest('build/style/'))
});

gulp.task('watch:all', function() {
    gulp.watch('src/**/*')
        .on('change', gulp.series(gulp.parallel('style', 'img', 'html')))
});

gulp.task('clean', function() {
    return del('build/')
})

gulp.task('build', gulp.series('clean', gulp.parallel('html', 'style', 'img')));

    /*
var path = {
  build: {
    html: "build/",
    css: "build/css/",
    img: "build/img/"
  },
  src: {
    html: "src/*.html",
    style: "src/style/style.scss",
    img: "src/img/*.*"
  },
  watch:{
    html: "src/*.html",
    style: "src/style/style.scss",
    img: "src/img/*.*"
  },
  clean: './build'
};

gulp.task("html:build", function() {
  gulp.src(path.src.html).pipe(gulp.dest(path.build.html));
});

gulp.task("style:buld", function() {
  gulp
    .src(path.src.style)
    .pipe(scss())
    .pipe(gulp.dest(path.build.css));
});

gulp.task('build',[
    'html:build',
    'style:build',
    'img:build'
]);

gulp.task('watch', function(){
    watch([path.watch.html], function(event,cb){
        gulp.start('html.build');
    });
    watch([patch.watch.style], function(event,cb){
        gulp.start('style:build');
    });
    watch([path.watch.img], function(event, cb){
        gulp.start('img:build');
    });
});
*/