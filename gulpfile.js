// Definitions
var gulp = require('gulp');
var sass = require('gulp-sass');


// Paths setup
var paths = {

    styles: {
        src: './app/assets/scss',
        files: './app/assets/scss/*.scss',
        dest: './app/assets/css'
    },

    scripts: {
        src: './app/src',
        files: './app/src/*.js',
        dest: './app/src'
    }

};

var displayError = function(error) {

    // Initial building up of the error
    var errorString = '[' + error.plugin + ']';
    errorString += ' ' + error.message.replace("\n",''); // Removes new line at the end

    // If the error contains the filename or line number add it to the string
    if(error.fileName)
        errorString += ' in ' + error.fileName;

    if(error.lineNumber)
        errorString += ' on line ' + error.lineNumber;

    // This will output an error like the following:
    // [gulp-sass] error message in file_name on line 1
    console.error(errorString);

};


// Setting up the sass task
gulp.task('sass', function (){
    
    // Taking the path from the above object
    gulp.src(paths.styles.files)
    
    // Sass options - make the output compressed and add the source map
    // Also pull the include path from the paths object
    .pipe(sass({
        outputStyle: 'expanded',
        sourceComments: 'map',
        includePaths : [paths.styles.src]
    }))
    
    // If there is an error, don't stop compiling but use the custom displayError function
    .on('error', function(err){
        displayError(err);
    })

    // Funally put the compiled sass into a css file
    .pipe(gulp.dest(paths.styles.dest))

});

gulp.task('scripts', function(){

    gulp.src(ptahs.scripts.files)

    // Name of concat js file
    .pipe(concat('all.js'))

    // Location of the new concat file
    .pipe(gulp.dest(paths.scripts.dest))

    // Rename to .min
    .pipe(rename('all.min.js'))

    // Minify the concat file
    .pipe(uglify())

    // Location of the minified version 
    .pipe(gulp.dest(paths.scripts.dest));

});


// This is the default task - which is run when `gulp` is run
// The tasks passed in as an array are run before the tasks within the function
gulp.task('default', ['sass', 'scripts'], function() { 

    // Watch the files in the paths object, and when there is a change, fun the functions in the array
    gulp.watch(paths.styles.files, ['sass'])

    // Also when there is a change, display what file was changed, only showing the path after the 'sass folder'
    .on('change', function(evt) {
        console.log('[watcher] File ' + evt.path.replace(/.*(?=scss)/,'') + ' was ' + evt.type + ', compiling...');
    });

    gulp.watch(paths.scripts.files, ['scripts']);

});