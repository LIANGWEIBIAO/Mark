var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer'); // 处理css中浏览器兼容的前缀  
var rename = require('gulp-rename'); //重命名  
var babel = require('gulp-babel');
var cssnano = require('gulp-cssnano'); // css的层级压缩合并
var less = require('gulp-less'); //less 
var fileinclude = require('gulp-file-include'); //include公共组件
// var browserSync = require('browser-sync').create();
// var reload = browserSync.reload;

const connect = require('gulp-connect')
const plumber = require('gulp-plumber') // 防止编译错误报错终止监听
var Config = require('./gulpfile.config.js');
//======= gulp dev 开发环境下 ===============
function dev() {    /** 
    * HTML处理 
    */
   gulp.task('html:dev', function () {
       return gulp.src('src/components/**/*.html').pipe(fileinclude({
       
       })).pipe(gulp.dest('dist/components'));
   });
    /** 
     * assets文件夹下的所有文件处理 
     */   
    gulp.task('public:dev', function () {
        return gulp.src('src/public/**/*')
            .pipe(plumber())
            .pipe(gulp.dest('dist/public'))
            .pipe(connect.reload())
    });
    /** 
     * CSS样式处理 
     */
    gulp.task('css:dev', function () {
        return gulp.src('src/components/**/*.css')
            .pipe(plumber())
            .pipe(autoprefixer({
                browsers: ['last 5 versions', 'Android >= 4.0'],
                cascade: false, //是否美化属性值 默认：true 像这样：
                remove: true //是否去掉不必要的前缀 默认：true 
            }))
            .pipe(gulp.dest('dist/components'))
            .pipe(connect.reload())
    });
    /** 
     * less样式处理 
     */
    gulp.task('less:dev', function () {
        return gulp.src('src/components/**/*.less')
            .pipe(plumber())
            .pipe(less())
            .pipe(autoprefixer({
                browsers: ['last 5 versions', 'Android >= 4.0'],
                cascade: false, //是否美化属性值 默认：true 像这样：
                remove: true //是否去掉不必要的前缀 默认：true 
            }))
            .pipe(gulp.dest('dist/components'))
            .pipe(connect.reload())
    });
    /** 
     * js处理 
     */
    gulp.task('js:dev', function () {
        return gulp.src('src/components/**/*.js')
            .pipe(plumber())
            .pipe(babel({ 
                presets: ['es2015']
            }))
            .pipe(gulp.dest('dist/components'))
            .pipe(connect.reload())
    });
    /**  
     * 图片处理 
     */
    gulp.task('images:dev', function () {
        return gulp.src(['src/components/**/*.jpg','src/components/**/*.png','src/components/**/*.gif'])
            .pipe(plumber())  
            .pipe(gulp.dest('dist/components')) 
            .pipe(connect.reload())
    });

    gulp.task('dev', ['html:dev','css:dev', 'less:dev', 'js:dev', 'public:dev', 'images:dev'], function () {

        connect.server({
            port: 3010,
            root: Config.dist,
            livereload: true,
            // open: true,
            host: '0.0.0.0'
        })

        // Watch .html files 
        gulp.watch('src/components/**/*.html', ['html:dev']);

        // Watch .css files  
        gulp.watch('src/components/**/*.css', ['css:dev']);
        
        // Watch .less files  
        gulp.watch('src/components/**/*.less', ['less:dev']);
        // Watch public files  
        gulp.watch('src/public/**/*', ['public:dev']);
        // Watch .js files  
        gulp.watch('src/components/**/*.js', ['js:dev']);
        // Watch image files  
        gulp.watch('src/components/**/*.jpg', ['images:dev']);
        gulp.watch('src/components/**/*.png', ['images:dev']);
        gulp.watch('src/components/**/*.gif', ['images:dev']);
    });
}
//======= gulp dev 开发环境下 ===============
module.exports = dev;