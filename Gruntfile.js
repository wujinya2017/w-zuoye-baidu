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
    }

  });
   
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.registerTask('default', ['less:compile','htmlhint','csslint']);

};
