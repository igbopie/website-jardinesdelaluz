'use strict';

import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import browserSync from 'browser-sync';

gulp.task('resources', function() {

  return gulp.src(config.resources.src)
      .pipe(changed(config.resources.dest)) // Ignore unchanged files
      .pipe(gulp.dest(config.resources.dest))
      .pipe(browserSync.stream());

});
