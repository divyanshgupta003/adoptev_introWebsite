const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');

gulp.task('css' , function(done){
    gulp.src('./assets/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./public/assets/css'))
    done();
});

gulp.task('js' , function(done){
    gulp.src('./assets/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/assets/js'))
        done();
});

gulp.task('image' , function(done){
    gulp.src('./assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/assets/images'))
    done()
});
