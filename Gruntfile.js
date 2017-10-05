module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      build: {
        options: {
          style: 'expanded',
          sourcemap: 'auto'
        },
        files: {
          'css/style.css':'sass/style.scss',
        }
      }
    },
    watch: {
        sass: {
            files: ["**/*.scss"],
            tasks: ['sass']
        },
        js: {
          files: ["js/**/app.js"],
          tasks: ['uglify']
        },
        html: {
          files: ["html/**/*.html"],
          tasks: ['processhtml']
        }
    },
    processhtml: {
        options: {

        },
        build: {
            files: [
                {
                  expand: true,
                  cwd: './html',
                  src: ['**/*.html'],
                  dest: 'web/',
                  ext: '.html'
                },
                ],
        },
        dist: {
            files: [
                {
                  expand: true,
                  cwd: './html',
                  src: ['**/*.html'],
                  dest: 'dist/web',
                  ext: '.html'
                },
                ],
        }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'css/style.css',
          ]
        },
        options: {
          watchTask: true,
          open:false,
          server: {
            baseDir: "./",
            directory: true
          }

        }
      }
  },
  postcss: {
      options: {
          map: true,
          processors: [
              require('autoprefixer')({browsers: 'last 3 versions'}), // add vendor prefixes
          ]
      },
      build: {
          src: 'css/*.css'
      }
  },
  copy: {
      options:{

      },
      dist: {
          files: [
              {expand: true, src: ['web/**/*.html'], dest: 'dist', filter: 'isFile'},
              {expand: true, src: ['css/**/*.css'], dest: 'dist', filter: 'isFile'},
              {expand: true, src: ['scripts/**/*.js'], dest: 'dist', filter: 'isFile'},
              {expand: true, src: ['img/**/*'], dest: 'dist', filter: 'isFile'},
              {expand: true, src: ['bower_components/**/*'], dest: 'dist', filter: 'isFile'},
          ]
      }
  },
  cssmin: {
      target: {
          files: [{
              expand: true,
              cwd: 'css',
              src: ['*.css', '!*.min.css'],
              dest: 'css',
              ext: '.min.css'
          }]
      }
  },

  uglify: {
      options: {
          mangle:false,
      },
      build: {
          files: {
              'scripts/classtoggle.min.js': 'scripts/classtoggle.js',
              'scripts/collapsibleMenu.min.js': 'scripts/collapsibleMenu.js',
              'scripts/colors.min.js': 'scripts/colors.js',
              'scripts/init.min.js': 'scripts/init.js',
              'scripts/panel.min.js': 'scripts/panel.js',
              'scripts/sidebar.min.js':'scripts/sidebar.js',
              'scripts/emphasize.min.js': ['scripts/classtoggle.js', 'scripts/collapsibleMenu.js', 'scripts/colors.js', 'scripts/init.js', 'scripts/panel.js', 'scripts/sidebar.js',]
          }
      }
  }


  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-postcss');
  // Default task(s).
  grunt.registerTask('build', ['processhtml:build','sass','postcss','cssmin','uglify']);
  grunt.registerTask('dist', ['build','copy']);
  grunt.registerTask('default', ['build','browserSync','watch']);

};
