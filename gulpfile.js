'use strict';

// Variables

const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const del = require('del');
const gulp = require('gulp');
const jpegtran = require('imagemin-jpegtran');
const mincss = require('gulp-csso');
const minimage = require('gulp-imagemin');
const minjs = require('gulp-terser');
const mozjpeg = require('imagemin-mozjpeg');
const plumber = require('gulp-plumber');
const pngquant = require('imagemin-pngquant');
const postcss = require('gulp-postcss');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sassglob = require('gulp-sass-glob');
const zopfli = require('imagemin-zopfli');

// Task functions

const minsvg = function mimimizeSvgImages() {
  return gulp
    .src('./spec/img-raw/*.svg')
    .pipe(
      minimage([
        minimage.svgo({
          plugins: [
            { addAttributesToSVGElement: false },
            { addClassesToSVGElement: false },
            { cleanupAttrs: false },
            { cleanupEnableBackground: true },
            { cleanupIDs: false },
            { cleanupListOfValues: true },
            { cleanupNumericValues: true },
            { collapseGroups: true },
            { convertColors: true },
            { convertPathData: true },
            { convertShapeToPath: false },
            { convertStyleToAttrs: false },
            { convertTransform: true },
            { inlineStyles: false },
            { mergePaths: true },
            { minifyStyles: false },
            { moveElemsAttrsToGroup: true },
            { moveGroupAttrsToElems: false },
            { prefixIds: false },
            { removeAttrs: true },
            { removeComments: true },
            { removeDesc: true },
            { removeDimensions: true },
            { removeDoctype: true },
            { removeEditorsNSData: true },
            { removeElementsByAttr: false },
            { removeEmptyAttrs: true },
            { removeEmptyContainers: true },
            { removeEmptyText: true },
            { removeHiddenElems: true },
            { removeMetadata: true },
            { removeNonInheritableGroupAttrs: true },
            { removeRasterimg: false },
            { removeScriptElement: true },
            { removeStyleElement: true },
            { removeTitle: true },
            { removeUnknownsAndDefaults: true },
            { removeUnusedNS: true },
            { removeUselessDefs: false },
            { removeUselessStrokeAndFill: true },
            { removeViewBox: false },
            { removeXMLNS: false },
            { removeXMLProcInst: true },
            { sortAttrs: false },
          ],
        }),
      ]),
    )
    .pipe(gulp.dest('./app/assets/img/'));
};

const minbitmap = function minimizeBitmapImages() {
  return gulp
    .src('./spec/img-raw/*.{jpg,png}')
    .pipe(
      minimage([
        jpegtran({
          progressive: true,
        }),
        mozjpeg({
          quality: 90,
        }),
        pngquant({
          speed: 1,
          quality: [0.8, 0.8],
        }),
        zopfli({
          more: true,
        }),
      ]),
    )
    .pipe(gulp.dest('./app/assets/img/'));
};

const cleanbuild = function deleteFormerBuildFolder() {
  return del('./dist/');
};

const copyvideo = function copyVideoFilesToBuildFolder() {
  return gulp.src('./app/assets/video/*.mp4').pipe(gulp.dest('./dist/video/'));
};

const copyfavicons = function copyFavIconsToBuildFolder() {
  return gulp.src('./app/assets/favicons/*')
    .pipe(gulp.dest('./dist/favicons/'));
};

const copyfonts = function copyFontFilesToBuildFolder() {
  return gulp
    .src('./app/assets/fonts/*.{woff,woff2}')
    .pipe(gulp.dest('./dist/fonts/'));
};

const copysvg = function copySvgImagesToBuildFolder() {
  return gulp.src('./app/assets/img/*.svg').pipe(gulp.dest('./dist/img/'));
};

const copybitmap = function copyBitmapImagesToBuildFolder() {
  return gulp.src('./app/assets/img/*.{jpg,png}')
    .pipe(gulp.dest('./dist/img/'));
};

const scripts = function launchJsCompiler() {
  return gulp
    .src(['./app/vendors/*.js', './app/scripts/*.js'])
    .pipe(minjs())
    .pipe(gulp.dest('./dist/js/'));
};

const style = function launchCssCompiler() {
  return gulp
    .src('./app/base/main.scss')
    .pipe(plumber())
    .pipe(sassglob())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(mincss())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.stream());
};

const html = function launchHtmlCompiler() {
  return gulp
    .src('./app/pages/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream());
};

const serve = function launchBrowserSync() {
  browserSync.init({
    cors: true,
    notify: false,
    open: true,
    server: { baseDir: './dist/' },
  });
  gulp.watch('./app/**/*.js', scripts).on('change', browserSync.reload);
  gulp.watch('./app/**/*.pug', html);
  gulp.watch('./app/**/*.scss', style);
};

// Gulp tasks

gulp.task(
  'default',
  gulp.series(
    cleanbuild,
    gulp.parallel(copyvideo, copyfonts, copyfavicons, copysvg, copybitmap),
    scripts,
    style,
    html,
    serve,
  ),
);

gulp.task(
  'build',
  gulp.series(
    cleanbuild,
    gulp.parallel(copyvideo, copyfonts, copyfavicons, copysvg, copybitmap),
    scripts,
    style,
    html,
  ),
);
gulp.task('serve', serve);

gulp.task('imagemin', gulp.parallel(minsvg, minbitmap));
gulp.task('imagecopy', gulp.parallel(copysvg, copybitmap));
gulp.task(
  'imagerenew',
  gulp.series(
    gulp.parallel(minsvg, minbitmap),
    gulp.parallel(copysvg, copybitmap),
  ),
);

gulp.task('svgmin', minsvg);
gulp.task('svgcopy', copysvg);
gulp.task('svgrenew', gulp.series(minsvg, copysvg));

gulp.task('bitmapmin', minbitmap);
gulp.task('bitmapcopy', copybitmap);
gulp.task('bitmaprenew', gulp.series(minbitmap, copybitmap));
