var gulp = require('gulp')
  , concat = require('gulp-concat')
  , emblem = require('gulp-emblem')
  , mainBowerFiles = require('main-bower-files')

gulp.task('tpl', function(){
  gulp.src('tpl/*.em')
    .pipe(emblem({
      namespace: 'App.templates',
      outputType: 'browser'
     }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build/js/'));
})

gulp.task('js', function() {
  gulp.src('app/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build/js/'))
})

gulp.task("vendor", function(){
    gulp.src(mainBowerFiles())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest("build/js/"));
})

gulp.task('default', ['tpl', 'js', 'vendor'])
