//引入所需插件
var gulp = require("gulp"),
	sass = require("gulp-sass"),
	rename = require("gulp-rename"),
	cssnano = require("gulp-cssnano"),
	autoprefixer = require("gulp-autoprefixer"),
	cached = require("gulp-cached"),
	concat = require("gulp-concat"),
	imagemin = require("gulp-imagemin"),
	notify = require("gulp-notify"),
	uglify = require("gulp-uglify"),
	browser = require("browser-sync");
//编译sass
gulp.task("sass",function(){
	//找到处理的路径,方法pipe调用所需的插件
	return gulp.src("src/sass/*.scss").pipe(sass({style:"expanded"})).pipe(gulp.dest("css")).pipe(rename({"suffix" : ".min"})).pipe(cssnano()).pipe(gulp.dest("css"));
})
//监听任务
gulp.task("watch",function(){
	gulp.watch("src/sass/*.scss",["sass"]);
})
//图片压缩
gulp.task("img",function(){
	return gulp.src("img/*").pipe(cached(imagemin({optimizationLeve1:3,progressive:true,interlaced:true}))).pipe(gulp.dest("img"));
})
