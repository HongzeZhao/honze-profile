module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd")%>*/\n'
			},
			build: {
				src: 'build/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		babel: {
	        options: {
	            sourceMap: true,
	            presets: ['babel-preset-es2015']
	        },
	        dist: {
	            files: {
	                'build/<%= pkg.name %>.js': 'src/**/*.js'
	            }
	        }
	    }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-babel');

	grunt.registerTask('default', ['babel','uglify']);
};
