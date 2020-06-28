const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');
const del = require('del');

gulp.task('css' , function(){
    return gulp.src('./assets/**/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('./public/assets'))

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

gulp.task('clean:assets' , function(done){
    del.sync('./public/assets');
    done();
});

gulp.task('build' , gulp.series('clean:assets', 'css', 'js', 'image'), function(done){
        console.log('Building assets');
        done();
    });