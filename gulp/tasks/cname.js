'use strict';

import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import browserSync from 'browser-sync';

gulp.task('cname', function() {

  return gulp.src(config.cname.src)
      .pipe(changed(config.cname.dest)) // Ignore unchanged files
      .pipe(gulp.dest(config.cname.dest))
      .pipe(browserSync.stream());

});
