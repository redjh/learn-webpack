/* 基础配置文件 */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist'),
		// publicPath: 'dist/' //指定公共路径
	},
	module: {
		rules: [
			/* 处理css */
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			/* 处理less */
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "less-loader" // compiles Less to CSS
				}]
			},
			/* 处理图片～还需要安装file-loader */
			{
				test: /\.(png|jpg|gif|jpeg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						/* 图片体积大于 limit 采用file-loader来处理 */
						/* 图片体积小于 limit 会将图片编译为base64字符串形式 */
						limit: 10240,
						/* 指定生存图片的命名规则:路径／[图片名].[8位hash值].[扩展名] */
						name: 'img/[name].[hash:8].[ext]'
					}
				}]
			},
			/* es6 转 es5 */
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			/* 处理vue文件 */
			{
				test: /\.vue$/,
				use: ['vue-loader']
			}
		]
	},
	resolve: {
		/* 使用vue-runtime-compiler:采用index.html <div id='app'></div>来挂载vue实例 ～～>需要配置Vue别名 */
		/* 使用vue-runtime-only:采用render函数来挂载vue实例 不需要配置 */
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
		extensions: ['.vue', '.js'] //导入文件不需要指定文件后缀名
	},
	/* 插件使用 */
	plugins: [
		new webpack.BannerPlugin('最终版本归属redjh所有'),
		new HtmlWebpackPlugin({
			template: 'index.html'
		}) //指定html模版打包到dist文件
	]
}
