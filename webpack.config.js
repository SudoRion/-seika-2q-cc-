// const nodeExternals = require('webpack-node-externals');
module.exports = {
	// externals: [nodeExternals()],
	// externals: [
	// 	nodeExternals(),
	// 	{
	// 	  swiper: 'Swiper', // Swiperの正確な名前に置き換える必要があります
	// 	}
	//     ],
	watch: true,
	devtool: 'inline-source-map',
	module: {
		rules: [
		    {
			  test: /\.css$/i,
			  use: ["style-loader", "css-loader"],
		    },
		],
	  },
	  entry: {
		main: './src/index.js',
		app: './src/app.js',
	  },
	  output: {
		filename: '[name].js',
		path: __dirname + '/dist'
	  },
	//   resolve: {
	// 	fallback: {
	// 	  path: require.resolve('path-browserify'),
	// 	  util: require.resolve('util/'),
	// 	  fs: false
	// 	}
	//     }
};