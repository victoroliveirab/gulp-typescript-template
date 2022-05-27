const fs = require('fs');
const { dest, src, parallel, series, watch } = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const tsify = require('tsify');
const server = require('gulp-webserver');

const paths = {
  entryFile: 'src/index.ts',
  static: 'public/*',
  outDir: './www',
  ts: 'src/**/*.ts',
};

const debug = true;
const entries = ['src/index.ts'];

function cleanWww(cb) {
  fs.rmSync(paths.outDir, { recursive: true, force: true });
  fs.mkdirSync(paths.outDir);
  cb && cb();
}

function copyStaticAssets(cb) {
  src(paths.static).pipe(dest(paths.outDir));
  cb && cb();
}

function compileTs(cb) {
  browserify({
    basedir: '.',
    debug,
    entries,
    cache: {},
    packageCache: {},
  })
    .plugin(tsify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(dest(paths.outDir));
  cb && cb();
}

function devServer(cb) {
  src(paths.outDir).pipe(
    server({
      livereload: true,
      port: 3000,
    })
  );
  cb && cb();
}

exports.default = series(cleanWww, parallel(copyStaticAssets, compileTs));
exports.server = function () {
  cleanWww();
  watch(paths.static, { ignoreInitial: false }, copyStaticAssets);
  watch(paths.ts, { ignoreInitial: false }, compileTs);
  return devServer();
};
