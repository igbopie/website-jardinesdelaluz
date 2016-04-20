'use strict';

import gulp from 'gulp';
import ghPages from 'gulp-gh-pages';

gulp.task('deploy', ['prod'], function() {
  return gulp.src('./build/**/*')
        .pipe(ghPages());

});