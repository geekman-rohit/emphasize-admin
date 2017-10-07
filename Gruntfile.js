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
          'css/extra/loaders.css':'sass/extra/loaders.scss',
        }
      }
    },
    watch: {
        sass: {
            files: ["sass/**/*.scss"],
            tasks: ['sass','copy']
        },
        js: {
          files: ["scripts/**/*.js"],
          tasks: ['uglify','copy']
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
                  src: ['**/*.html','!**/parts/*.html'],
                  dest: 'dist/',
                  ext: '.html'
                },
                ],
        },
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
            baseDir: "./dist",
            directory: false,
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
              {expand: true, src: ['css/**/*.css'], dest: 'dist', filter: 'isFile'},
              {expand: true, src: ['scripts/**/*.js'], dest: 'dist', filter: 'isFile'},
              {expand: true, src: ['img/**/*'], dest: 'dist', filter: 'isFile'},
              {expand: true, src: ['vendor/**/*'], dest: 'dist', filter: 'isFile'},
          ]
      }
  },
  bowercopy: {
      options:{
          runBower:true
      },
      dist: {
          options: {
              destPrefix: 'dist/vendor'
          },
          files: {
              'animate.css/animate.min.css': 'animate.css/animate.min.css',
              'bootstrap/dist/': 'bootstrap/dist/',
              'bootstrap-switch/dist/': 'bootstrap-switch/dist/',
              'bootstrap3-wysihtml5-bower/dist/': 'bootstrap3-wysihtml5-bower/dist/',
              'c3/c3.min.js':'c3/c3.min.js',
              'c3/c3.min.css': 'c3/c3.min.css',
              'chart.js/dist': 'chart.js/dist',
              'chartist/dist':'chartist/dist',
              'datatables/media/js/jquery.dataTables.min.js':'datatables/media/js/jquery.dataTables.min.js',
              'datatables/media/js/dataTables.bootstrap.min.js':'datatables/media/js/dataTables.bootstrap.min.js',
              'datatables/media/css/dataTables.bootstrap.min.css':'datatables/media/css/dataTables.bootstrap.min.css',
              'd3/d3.min.js':'d3/d3.min.js',
              'dropzone/dist':'dropzone/dist',
              'font-awesome/css':'font-awesome/css',
              'font-awesome/fonts':'font-awesome/fonts',
              'fullcalendar/dist':'fullcalendar/dist',
              'iCheck/skins/square/':'iCheck/skins/square/',
              'iCheck/icheck.min.js':'iCheck/icheck.min.js',
              'jquery-slimscroll/jquery.slimscroll.min.js':'jquery-slimscroll/jquery.slimscroll.min.js',
              'jquery.easy-pie-chart/dist':'jquery.easy-pie-chart/dist',
              'loaders.css/loaders.min.css':'loaders.css/loaders.min.css',
              'loaders.css/loaders.css.js':'loaders.css/loaders.css.js',
              'mdi/css':'mdi/css',
              'mdi/fonts':'mdi/fonts',
              'moment/min/moment.min.js':'moment/min/moment.min.js',
              'morris.js/morris.min.js':'morris.js/morris.min.js',
              'morris.js/morris.css':'morris.js/morris.css',
              'open-iconic/font':'open-iconic/font',
              'peity/jquery.peity.min.js':'peity/jquery.peity.min.js',
              'raphael/raphael.min.js':'raphael/raphael.min.js',
              'sweetalert2/dist':'sweetalert2/dist',
              'toastr':'toastr',
              'jquery/dist/jquery.min.js':'jquery/dist/jquery.min.js',
          }
      }
  },
  cssmin: {
      target: {
          files: [{
              expand: true,
              cwd: 'css',
              src: ['**/*.css', '!**/*.min.css'],
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
              'scripts/emphasize-all.min.js': ['scripts/classtoggle.js', 'scripts/collapsibleMenu.js', 'scripts/colors.js', 'scripts/init.js', 'scripts/panel.js', 'scripts/sidebar.js',]
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
  grunt.loadNpmTasks('grunt-bowercopy');
  // Default task(s).
  grunt.registerTask('build', ['processhtml','sass','postcss','cssmin','uglify','copy','bowercopy']);
  grunt.registerTask('default', ['build','browserSync','watch']);

};
