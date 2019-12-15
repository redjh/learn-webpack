/* 生产环境配置文件 */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js')
module.exports = merge(baseConfig, {
	/* 插件使用 */
	plugins: [
		new UglifyJsPlugin() //webpack 3.6.0版本 搭配 1.3.0版本打包才不会报错
	]
})
