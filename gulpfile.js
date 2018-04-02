//引入所需插件
var gulp = require("gulp"),
	sass = require("gulp-sass"),
	cssnano = require("gulp-cssnano");
//编译sass
gulp.task("sass",function(){
	//找到处理的路径,方法pipe调用所需的插件
	return gulp.src("src/sass/*.scss").pipe(sass({style:"expanded"})).pipe(gulp.dest("css")).pipe(rename({"suffix" : ".min"})).pipe(cssnano()).pipe(gulp.dest("css"));
})
//监听任务
gulp.task("watch",function(){
	gulp.watch("src/sass/*.scss",["sass"]);
})
