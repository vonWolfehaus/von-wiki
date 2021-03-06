var src = '../src/';
var dest = '../client/';
var jsFolder = src+'js/';
var js = {
	entries: [
		jsFolder+'main.js'
	],
	destFile: 'main.js',
	all: jsFolder+'**/*.js',
	libs: jsFolder+'lib/**/*.js'
};

module.exports = {
	sass: {
		src: src+'style/**/*.{sass,scss}',
		cssLib: src+'style/lib',
		dest: dest,
		settings: {
			imagePath: 'img' // Used by the image-url helper
		}
	},
	html: {
		src: src+'htdocs/**',
		dest: dest
	},
	images: {
		src: src+'img/**',
		dest: dest+'img'
	},
	browserify: {
		entries: js.entries,
		debug: false,
		paths: ['../node_modules', jsFolder, js.libs], // allows you to omit './' when requiring local modules
		extensions: ['.jsx', '.tag'],
		noparse: [],
	},
	browserifyDebug: {
		entries: js.entries,
		debug: true,
		paths: ['../node_modules', jsFolder, js.libs], // allows you to omit './' when requiring local modules
		extensions: ['.jsx', '.tag'],
		noparse: [],
		cache: {}, packageCache: {}, fullPaths: true // required by watchify
	},
	js: js,
	release: false, // set to true by passing `--dist` as a gulp argument
	src: src,
	dest: dest
};
