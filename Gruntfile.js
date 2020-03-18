module.exports = function (grunt) {
  grunt.initConfig({
    less:{
      compile:{
        files:{'dist/baidu.css':'*.css'}
      }
    },
    htmlhint:{
      options:{
        htmlhintrc:'./.htmlhintrc'
      },
      src:['*.html']
    },
    csslint: {
      options: {
        csslintrc: './.csslintrc'   
      },
      src: ['*.css']      
    },
    concat: {
      js: {
        src: ['baidu.js'],
        dest: 'dist/bundle.js'                      
      },
      css:{
        src:['*.css'],
        dest:'dist/bundle.css'                               
      }
    },
    sprite: {
      all: {
        src: '*.jpg',
        dest: 'dist/spritesheet.png',
        destCss: 'dist/sprites.css'                                            
      }
    },
    htmlmin: {
      options: {
        collapseWhitespace: true,
        preserveLineBreaks: false                       
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'                 
      }     
    },
    cssmin: {  
      'dist/baidu.min.css': 'baidu.css'
    },
    uglify: {
      release:{
        files: {
          'dist/baidu.min.js': 'baidu.js'                      
        }             
      }                  
    },
    imagemin: {                               
      files: {
        expand: true,
        src: ['./*.{png,jpg,gif}'],
        dest: 'dist/'                                        
      }
    }

  });
   
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['less:compile','htmlhint','concat:js','concat:css','sprite','htmlmin','cssmin','uglify:release','imagemin']);

};
