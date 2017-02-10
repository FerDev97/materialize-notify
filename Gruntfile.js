module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				compress: {
					drop_console: true
				},
				preserveComments: 'some'
			},
			default: {
				files: {
					'materialize-notify.min.js': ['materialize-notify.js']
				}
			}
		},
		jshint: {
			options: {
				jshintrc: 'jshintrc.json'
			},
			default: {
				src: 'materialize-notify.js'
			}
		},
		exec: {
			'meteor-test': 'node_modules/.bin/spacejam test-packages ./'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('test', ['jshint', 'exec:meteor-test']);
	grunt.registerTask('default', ['uglify']);
};
