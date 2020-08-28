var gulp = require("gulp");
// Requires the gulp-sass plugin

var browserSync = require("browser-sync").create();

var sass = require("gulp-sass");
var useref = require("gulp-useref");
var uglify = require("gulp-uglify");
var gulpIf = require("gulp-if");
var cssnano = require("gulp-cssnano");
var imagemin = require("gulp-imagemin");
var cache = require("gulp-cache");
const babel = require("gulp-babel");
var del = require("del");
var runSequence = require("run-sequence");

//functiones
gulp.task("browserSync", function () {
  browserSync.init({
    server: {
      // baseDir: 'app'
      baseDir: ["./", "./app"],
    },
  });
});

gulp.task("sass", function () {
  return gulp
    .src("app/scss/**/*.scss") // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest("app/css/"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task("useref", function () {
  return (
    gulp
      .src("app/*.html")
      .pipe(useref())
      .pipe(gulpIf("*.js", uglify()))
      // Minifies only if it's a CSS file
      .pipe(gulpIf("*.css", cssnano()))
      .pipe(gulp.dest("dist"))
  );
});

gulp.task("images", function () {
  return (
    gulp
      .src("app/img/**/*.+(png|jpg|jpeg|gif|svg)")
      // Caching images that ran through imagemin
      .pipe(
        cache(
          imagemin({
            interlaced: true,
          })
        )
      )
      .pipe(gulp.dest("dist/img"))
  );
});

gulp.task("fonts", function () {
  return gulp.src("app/fonts/**/*").pipe(gulp.dest("dist/fonts"));
});

gulp.task("css", function () {
  return gulp.src("app/css/**/*").pipe(gulp.dest("dist/css"));
});

gulp.task("js", () => gulp.src("app/js/**/*").pipe(gulp.dest("dist/js")));

gulp.task("clean:dist", function () {
  return del.sync("dist");
});

gulp.task("watch", ["browserSync", "sass"], function () {
  gulp.watch("app/scss/**/*.scss", ["sass"]);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch("app/*.html", browserSync.reload);
  gulp.watch("app/js/custom/**/*.js", browserSync.reload);
  gulp.watch("app/js/**/*.js", browserSync.reload);
});

gulp.task("build", function (callback) {
  runSequence("clean:dist", ["sass", "useref", "images", "fonts", "css", "js"], callback);
});

gulp.task("default", function (callback) {
  runSequence(["sass", "browserSync", "watch"], callback);
});
