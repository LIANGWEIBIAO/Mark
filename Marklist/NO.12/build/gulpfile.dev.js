var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer'); // 处理css中浏览器兼容的前缀  
var rename = require('gulp-rename'); //重命名  
var cssnano = require('gulp-cssnano'); // css的层级压缩合并
var less = require('gulp-less'); //less 
var fileinclude = require('gulp-file-include'); //include公共组件
// var browserSync = require('browser-sync').create();
// var reload = browserSync.reload;

const connect = require('gulp-connect')
const plumber = require('gulp-plumber') // 防止编译错误报错终止监听
var Config = require('./gulpfile.config.js');
//======= gulp dev 开发环境下 ===============
function dev() {
    /** 
     * HTML处理 
     */
    gulp.task('html:dev', function () {
        return gulp.src([Config.html.src, '!view/include/**.html'])
            .pipe(plumber())
            .pipe(fileinclude({
                prefix: '@@',
                basepath: '@file'
            }))
            .pipe(gulp.dest(Config.html.dist))
            .pipe(connect.reload())
    });
    /** 
     * assets文件夹下的所有文件处理 
     */
    gulp.task('assets:dev', function () {
        return gulp.src(Config.assets.src)
            .pipe(plumber())
            .pipe(gulp.dest(Config.assets.dist))
            .pipe(connect.reload())
    });
    /** 
     * CSS样式处理 
     */
    gulp.task('css:dev', function () {
        return gulp.src(Config.css.src)
            .pipe(plumber())
            .pipe(autoprefixer({
                browsers: ['last 5 versions', 'Android >= 4.0'],
                cascade: false, //是否美化属性值 默认：true 像这样：
                remove: true //是否去掉不必要的前缀 默认：true 
            }))
            .pipe(gulp.dest(Config.css.dist))
            .pipe(connect.reload())
    });
    /** 
     * less样式处理 
     */
    gulp.task('less:dev', function () {
        return gulp.src(Config.less.src)
            .pipe(plumber())
            .pipe(less())
            .pipe(autoprefixer({
                browsers: ['last 5 versions', 'Android >= 4.0'],
                cascade: false, //是否美化属性值 默认：true 像这样：
                remove: true //是否去掉不必要的前缀 默认：true 
            }))
            .pipe(gulp.dest(Config.less.dist))
            .pipe(connect.reload())
    });
    /** 
     * js处理 
     */
    gulp.task('js:dev', function () {
        return gulp.src(Config.js.src)
            .pipe(plumber())
            .pipe(gulp.dest(Config.js.dist))
            .pipe(connect.reload())
    });
    /** 
     * 图片处理 
     */
    gulp.task('images:dev', function () {
        return gulp.src(Config.img.src)
            .pipe(plumber())
            .pipe(gulp.dest(Config.img.dist))
            .pipe(connect.reload())
    });

    gulp.task('dev', ['html:dev', 'css:dev', 'less:dev', 'js:dev', 'assets:dev', 'images:dev'], function () {
        // browserSync.init({
        //     server: {
        //         baseDir: Config.dist
        //     },
        //     open: false,
        //     notify: false,
        //     port: 3006
        // });

        connect.server({
            port: 3006,
            root: Config.dist,
            livereload: true,
            // open: true,
            host: '0.0.0.0'
        })



        // Watch .html files  
        gulp.watch(Config.html.src, ['html:dev']);
        // Watch .css files  
        gulp.watch(Config.css.src, ['css:dev']);
        // Watch .scss files  
        gulp.watch(Config.less.src, ['less:dev']);
        // Watch assets files  
        gulp.watch(Config.assets.src, ['assets:dev']);
        // Watch .js files  
        gulp.watch(Config.js.src, ['js:dev']);
        // Watch image files  
        gulp.watch(Config.img.src, ['images:dev']);
    });
}
//======= gulp dev 开发环境下 ===============
module.exports = dev;