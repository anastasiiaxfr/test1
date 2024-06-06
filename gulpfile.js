const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const htmlmin = require("gulp-htmlmin");

// Compile Sass
gulp.task("sass", function() {
  return gulp
    .src("./src/scss/**/*.sass") // Source of .scss files
    .pipe(sass().on("error", sass.logError)) // Compile Sass to CSS
    .pipe(gulp.dest("./dist/css")); // Destination for compiled CSS
});

// Minify HTML
gulp.task("minify-html", function() {
  return gulp
    .src("./src/**/*.html") // Source of HTML files
    .pipe(htmlmin({ collapseWhitespace: true })) // Minify HTML
    .pipe(gulp.dest("./dist")); // Destination for minified HTML
});

// Watch for changes
gulp.task("watch", function() {
  gulp.watch("./src/scss/**/*.sass", gulp.series("sass")); // Watch and compile Sass
  gulp.watch("./src/**/*.html", gulp.series("minify-html")); // Watch and minify HTML
});

// Default task
gulp.task("default", gulp.series("sass", "minify-html", "watch"));
