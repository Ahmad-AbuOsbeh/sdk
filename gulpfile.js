var gulp = require('gulp');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var headerComment = require('gulp-header-comment');

//Minify files, and bundle together
gulp.task('Bundle_BuildFire_Lory_LightCarousel', function(){
    var bundle = [
        "scripts/buildfire.js",
        "scripts/lory/lory.min.js",
        "scripts/buildfire/components/carouselLight/carouselLight.js"
    ];

    return gulp.src(bundle, {base: '.'})

        .pipe(sourcemaps.init())

    /// obfuscate and minify the JS files
        .pipe(uglify())

        /// merge all the JS files together.
        .pipe(concat('buildfire_lightcarousel.min.js'))

        .pipe(sourcemaps.write(''))

        .pipe(headerComment('Minified Bundle for buildfire.js & lory.min.js & carouselLight.js'))

        ///output here
        .pipe(gulp.dest('scripts/_bundles'));
});

gulp.task('Bundle_JQuery_Angulare_Buildfire_SmartCrop', function(){
    var bundle = [
        "scripts/jquery/jquery-1.11.2.min.js",
        "scripts/angular/angular.min.js",
        "scripts/buildfire.js",
        "scripts/smartcrop.js"
    ];

    return gulp.src(bundle, {base: '.'})

        .pipe(sourcemaps.init())

        /// obfuscate and minify the JS files
        .pipe(uglify())

        /// merge all the JS files together.
        .pipe(concat('jquery_angular_buildfire_smartcrop.min.js'))

        .pipe(sourcemaps.write(''))

        .pipe(headerComment('Minified Bundle for jquery-1.11.2.js & angular.min.js & buildfire.js & smartcrop'))

        ///output here

        .pipe(gulp.dest('scripts/_bundles'));
});

gulp.task('minifyBuildfire', function(){
    return gulp.src("scripts/buildfire.js", {base: '.'})

        .pipe(sourcemaps.init())

        .pipe(uglify())

        .pipe(concat('buildfire.min.js'))

        .pipe(sourcemaps.write(''))

        ///output here
        .pipe(gulp.dest('scripts'));
});

gulp.task('minifyCarouselLight', function(){
    return gulp.src("scripts/buildfire/components/carouselLight/carouselLight.js", {base: '.'})

        .pipe(sourcemaps.init())

        .pipe(uglify())

        .pipe(concat('carouselLight.min.js'))

        .pipe(sourcemaps.write(''))

        ///output here
        .pipe(gulp.dest('scripts/buildfire/components/carouselLight'));
});

gulp.task('minifyScoreboard', function(){
    return gulp.src("scripts/buildfire/services/gamify/scoreboard.js", {base: '.'})
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('scoreboard.min.js'))
        .pipe(sourcemaps.write(''))
        ///output here
        .pipe(gulp.dest('scripts/buildfire/services/gamify'));
});


gulp.task('build', function(callback){
    runSequence('Bundle_BuildFire_Lory_LightCarousel', 'Bundle_JQuery_Angulare_Buildfire_SmartCrop', 'minifyBuildfire','minifyCarouselLight','minifyScoreboard', callback);
});