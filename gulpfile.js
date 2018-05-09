/**
 * Created by ikhlasfirlana on 5/9/18.
 */
var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var clean = require('gulp-clean');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var watchify = require("watchify");
var gutil = require("gulp-util");
//
// var watchedBrowserify = watchify(browserify({
//     basedir: '.',
//     debug: true,
//     entries: ['src/main.ts'],
//     cache: {},
//     packageCache: {}
// }).plugin(tsify)).on("update", function () {
//     console.log("oke");
// });
//
gulp.task("build", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});
//
gulp.task("clean-dist", function () {
    return gulp.src('dist/*', {read: false})
        .pipe(clean());
});
//
// var paths = {
//     pages: ['src/*.html']
// };
// //
// gulp.task("copy-html", function () {
//     return gulp.src(paths.pages)
//         .pipe(gulp.dest("dist"));
// });
// //
// gulp.task("default", ["clean-dist", "copy-html"], function () {
//     return browserify({
//         basedir: '.',
//         debug: true,
//         entries: ['src/main.ts'],
//         cache: {},
//         packageCache: {}
//     })
//         .plugin(tsify)
//         .bundle()
//         .pipe(source('bundle.js'))
//         .pipe(gulp.dest("dist"));
// });
// //
//

gulp.task("default", ["build", "clean-dist"]);
