// Dependencies
const gulp                = require('gulp'),
      sass                = require('gulp-sass'),
      autoprefixer        = require('gulp-autoprefixer'),
      imagein             = require('gulp-imagemin'),
      plumber             = require('gulp-plumber'),
      rename              = require('gulp-rename'),
      uglify              = require('gulp-uglify'),
      useref              = require('gulp-useref'),
      sourcemaps          = require('gulp-sourcemaps'),
      browserSync         = require('browser-sync').create();

// CSS Task
gulp.task('css', function() {
  return gulp.src('app/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(plumber())
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer({
    browsers: ['last 2 versions']
  }))
  .pipe(rename({suffix: '.min'}))
  .pipe(sourcemaps.write('./source-maps'))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.stream())
});

// JavaScript Task
gulp.task('js', function() {
  return gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
  .pipe(sourcemaps.init())
  .pipe(plumber())
  .pipe(uglify())
  .pipe(useref())
  .pipe(rename({suffix: '.min'}))
  .pipe(sourcemaps.write('./source-maps'))
  .pipe(gulp.dest('app/js'))
  .pipe(browserSync.stream())
});

// Image Task
gulp.task('images', function() {
  return gulp.src('app/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('app/img'))
});

// HTML Task
gulp.task('html', function() {
  return gulp.src('app/*.html')
  .pipe(gulp.dest('app/'))
  .pipe(browserSync.stream())
});

// BrowserSync Task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  })
});

// Watch Tasks
gulp.task('watch', ['browserSync', 'css', 'js', 'html'], function() {
  gulp.watch('app/sass/**/*', ['css']);
  gulp.watch('app/js/**/*.js', ['js']);
  gulp.watch('app/**/*.html', ['html']);
});


// Default Task
gulp.task('default', ['watch']);
