//引入插件
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    plumber = require('gulp-plumber'),
    process = require('process'),
    runSequence = require('run-sequence'),
    watch = require('gulp-watch'),
    open = require('gulp-open');

var platform = process.platform, // 判断操作系统
    // 定义一组browser的判断
    browser = platform === 'linux' ? 'google-chrome' : (
    platform === 'darwin' ? 'google chrome' : (
        platform === 'win32' ? 'chrome' : 'firefox')),
    allPath = {
        src: './src'
    };

// 使用connect启动一个Web服务器
gulp.task('connect', function() {
    var root = allPath.src;
        hostname =  '127.0.0.1';
    connect.server({
        root: root,
        host: hostname,
        livereload: {
            hostname: hostname,
            enable: true,
            port: 35729
        },
        port: 9012,
        middleware: function(connect, opt) {
            return [
                /*
                proxy(["/api"], {
                    target: 'your-url',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': '/'
                    }
                })
                */
            ]
        }
    });
});

// 监控任务
gulp.task('watch', function() {
    gulp.src(allPath.src)
        .pipe(plumber())
        .pipe(watch(allPath.src))
        .pipe(connect.reload());
});

// 打开浏览器的任务
gulp.task('open', function() {
    // gulp-open 的选项
    var browserOptions = {
        uri: 'http://127.0.0.1:9012',
        app: browser
    };
    gulp.src(allPath.src)
        .pipe(open(browserOptions));
});

//运行Gulp时,搭建起跨域服务器 开发模式下
gulp.task('server', ['connect'], function() {
    runSequence(['watch', 'open']);
});