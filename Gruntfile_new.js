// Grunt tasks

module.exports = function (grunt) {
	"use strict";

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
		banner: '/*!\n' +
		'* <%= pkg.name %> - v<%= pkg.version %> - MIT LICENSE <%= grunt.template.today("yyyy-mm-dd") %>. \n' +
		'* @author <%= pkg.author %>\n' +
		'*/\n',

		clean: {
			dist: ['public/src']
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			app: {
				src: ['public/app/modules/**/*.js']
			},
			core: {
				src: 'public/dist/js/app.js'
			},
			demo: {
				src: 'public/dist/js/demo.js'
			},
			pages: {
				src: 'public/dist/js/pages/*.js'
			}
		},
		
		// Validate CSS files
		csslint: {
			options: {
				csslintrc: 'build/less/.csslintrc'
			},
			dist: [
				'public/dist/css/AdminLTE.css',
			]
		},

		// Validate Bootstrap HTML
		bootlint: {
			options: {
				relaxerror: ['W005']
			},
			files: ['pages/**/*.html', '*.html']
		},

		// Delete images in build directory
		// After compressing the images in the build/img dir, there is no need
		// for them
		clean: {
			build: ["build/img/*"]
		},

		exec: {
			bowerInstaller: 'bower-installer',
			startServer: 'node index.js'
		},

		concat: {
			options: {
				banner: '<%= banner %>',
				stripBanners: false
			},
			base: {
				src: [
					// Angular Project Dependencies,
					'public/app/app.js',
					'public/app/app.config.js',
					'public/app/modules/**/*Module.js',
					'public/app/modules/**/*Route.js',
					'public/app/modules/**/*Ctrl.js',
					'public/app/modules/**/*Service.js',
					'public/app/modules/**/*Directive.js',
					'public/app/lib/Chart.js',
					'public/app/lib/angular-chart.js'

				],
				dest: 'public/app/assets/js/<%= pkg.name %>-appbundle.js'
			},
			build: {
				src: [
					// Angular Project Dependencies,
					'public/app/assets/libs/angular/angular.js',
					'public/app/assets/libs/**/*.js'

				],
				dest: 'public/app/assets/js/<%= pkg.name %>-angularbundle.js'
			}
		},

		uglify: {
			options: {
				banner: '<%= banner %>',
				report: 'min'
			},
			base: {
				src: ['<%= concat.base.dest %>'],
				dest: 'public/app/assets/js/<%= pkg.name %>-angscript.min.js'
			},
			basePlugin: {
				src: ['public/src/plugins/**/*.js'],
				dest: 'public/app/assets/js/plugins/',
				expand: true,
				flatten: true,
				ext: '.min.js'
			}, 
			my_target: {
				files: {
				    'public/dist/js/app.min.js': ['public/dist/js/app.js']
				}
			}
		},
		
		// Optimize images
		image: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'build/img/',
					src: ['**/*.{png,jpg,gif,svg,jpeg}'],
					dest: 'public/dist/img/'
				}]
			}
		},
		
		concurrent: {
			tasks: ['exec:startServer', 'watch'],
			options: {
				logConcurrentOutput: true
			}
		},

		watch: {
			app: {
				files: ['public/app/**/*', "build/less/*.less", "build/less/skins/*.less", "public/dist/js/app.js"],
				tasks: ['jshint:app', "less", "uglify"],
				options: {
					livereload: true
				}
			}
		},
		less: {
			// Development not compressed
			development: {
				options: {
					// Whether to compress or not
					compress: false
				},
				files: {
					// compilation.css  :  source.less
					"public/dist/css/AdminLTE.css": "build/less/AdminLTE.less",
					//Non minified skin files
					"public/dist/css/skins/skin-blue.css": "build/less/skins/skin-blue.less",
					"public/dist/css/skins/skin-black.css": "build/less/skins/skin-black.less",
					"public/dist/css/skins/skin-yellow.css": "build/less/skins/skin-yellow.less",
					"public/dist/css/skins/skin-green.css": "build/less/skins/skin-green.less",
					"public/dist/css/skins/skin-red.css": "build/less/skins/skin-red.less",
					"public/dist/css/skins/skin-purple.css": "build/less/skins/skin-purple.less",
					"public/dist/css/skins/skin-blue-light.css": "build/less/skins/skin-blue-light.less",
					"public/dist/css/skins/skin-black-light.css": "build/less/skins/skin-black-light.less",
					"public/dist/css/skins/skin-yellow-light.css": "build/less/skins/skin-yellow-light.less",
					"public/dist/css/skins/skin-green-light.css": "build/less/skins/skin-green-light.less",
					"public/dist/css/skins/skin-red-light.css": "build/less/skins/skin-red-light.less",
					"public/dist/css/skins/skin-purple-light.css": "build/less/skins/skin-purple-light.less",
					"public/dist/css/skins/_all-skins.css": "build/less/skins/_all-skins.less"
				}
			},
			// Production compresses version
			production: {
				options: {
				  // Whether to compress or not
				  compress: true
				},
				files: {
					// compilation.css  :  source.less
					"public/dist/css/AdminLTE.min.css": "build/less/AdminLTE.less",
					// Skins minified
					"public/dist/css/skins/skin-blue.min.css": "build/less/skins/skin-blue.less",
					"public/dist/css/skins/skin-black.min.css": "build/less/skins/skin-black.less",
					"public/dist/css/skins/skin-yellow.min.css": "build/less/skins/skin-yellow.less",
					"public/dist/css/skins/skin-green.min.css": "build/less/skins/skin-green.less",
					"public/dist/css/skins/skin-red.min.css": "build/less/skins/skin-red.less",
					"public/dist/css/skins/skin-purple.min.css": "build/less/skins/skin-purple.less",
					"public/dist/css/skins/skin-blue-light.min.css": "build/less/skins/skin-blue-light.less",
					"public/dist/css/skins/skin-black-light.min.css": "build/less/skins/skin-black-light.less",
					"public/dist/css/skins/skin-yellow-light.min.css": "build/less/skins/skin-yellow-light.less",
					"public/dist/css/skins/skin-green-light.min.css": "build/less/skins/skin-green-light.less",
					"public/dist/css/skins/skin-red-light.min.css": "build/less/skins/skin-red-light.less",
					"public/dist/css/skins/skin-purple-light.min.css": "build/less/skins/skin-purple-light.less",
					"public/dist/css/skins/_all-skins.min.css": "build/less/skins/_all-skins.less"
				}
			}
		},

		injector: {
			options: {
				ignorePath: "public"
			},
			dev: {
				files: {
					'views/pages/index.ejs': [
						'bower.json',
						'public/app/app.js',
						'public/app/app.config.js',
						'public/app/**/*Module.js',
						'public/app/**/*Route.js',
						'public/app/**/*Ctrl.js',
						'public/app/**/*Service.js',
						'public/app/**/*Directive.js',
					]
				}
			},
			production: {
				files: {
					'index.html': [
						'bower.json',
						'public/app/dist/css/**/*.css',
						'public/app/dist/js/*.js'
					]
				}
			}
		},

		ngtemplates: {
			app: {
				src: 'public/app/modules/**/*.html',
				dest: 'public/app/dist/js/templates.js',
				options: {
					module: '<%= pkg.name %>',
					root: 'public/app/',
					standAlone: false
				}
			}
		}



	});

	require('time-grunt')(grunt);
	require('load-grunt-tasks')(grunt);

	// Making grunt default to force in order not to break the project if something fail.
	grunt.option('force', true);
	
	// LESS Compiler
	grunt.loadNpmTasks('grunt-contrib-less');
	// Watch File Changes
	grunt.loadNpmTasks('grunt-contrib-watch');
	// Compress JS Files
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// Include Files Within HTML
	grunt.loadNpmTasks('grunt-includes');
	// Optimize images
	grunt.loadNpmTasks('grunt-image');
	// Validate JS code
	grunt.loadNpmTasks('grunt-contrib-jshint');
	// Delete not needed files
	grunt.loadNpmTasks('grunt-contrib-clean');
	// Lint CSS
	grunt.loadNpmTasks('grunt-contrib-csslint');
	// Lint Bootstrap
	grunt.loadNpmTasks('grunt-bootlint');
	
	// Linting task
	grunt.registerTask('lint', ['jshint', 'csslint', 'bootlint']);

	// The default task (running "grunt" in console) is "watch"
	grunt.registerTask('dev', [
		"watch", 
		"jshint",
		"exec:bowerInstaller",
		"concat",
		"ngtemplates",
		"injector:production",
		"concurrent",
		"clean", 
		"concurrent",
		"injector:dev"
	]);
	
	// The default task (running "grunt" in console) is "watch"
	grunt.registerTask('prod', [
		"jshint",
		"exec:bowerInstaller",
		"concat",
		"ngtemplates",
		"injector:production",
		"concurrent",
		"clean", 
		"concurrent",
		"injector:production"
	]);

};
