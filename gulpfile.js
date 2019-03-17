const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');

gulp.task('scss',function(){
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(rename({'suffix':'.min'}))
	.pipe(gulp.dest('./dist'));
})

 gulp.task('es6',function(){
	 gulp.src('./src/es6/*.js')
	 .pipe(babel({presets:['@babel/env']}))
	 .pipe(gulp.dest('./src/es5'))
 })
gulp.task('img', () =>
    gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
);
/*
 gulp.task('test',function(){
	console.log('笑笑！');
})
gulp.task('js',function(){
	gulp.src('./src/js/index1.js').pipe(uglify()).pipe(rename({'suffix':'.min'})).pipe(gulp.dest('./dist'));
})
//合并js
gulp.task('j',function(){
	gulp.src('./src/js/*.js').pipe(concat('index3.js')).pipe(gulp.dest('./dist'));
})
*/
gulp.task('default',function(){
	gulp.watch([/* './src/js/*.js' */'./src/img/*','./src/sass/*.scss'],[/* 'js', */'img','scss']);
}) 