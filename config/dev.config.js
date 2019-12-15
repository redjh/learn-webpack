/* 开发环境配置文件 */
const path = require('path')
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js')
module.exports = merge(baseConfig, {
	/* 搭建本地服务 */
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		inline: true,
		port: 9000
	}
})