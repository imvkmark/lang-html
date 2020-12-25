// 导入路径解析
const path = require("path");
// 导入 webpack 库
const webpack = require("webpack");
// 导入vue 架子啊器
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
	// 入口文件
	entry : "./src/index.js",
	module : {
		rules : [
			// 它会应用到普通的 `.css` 文件
			// 以及 `.vue` 文件中的 `<style>` 块
			{
				test : /\.less$/,
				use : [
					{
						loader : "style-loader"
					},
					{
						loader : "css-loader"
					},
					{
						loader : "less-loader"
					}
				]
			},
			// 它会应用到普通的 `.js` 文件
			// 以及 `.vue` 文件中的 `<script>` 块
			{
				test : /\.(js)$/,
				exclude : /node_modules/,
				use : ["babel-loader"]
			},
			// 加载 vue 模块
			{
				test : /\.vue$/,
				loader : "vue-loader"
			}
		]
	},
	output : {
		filename : "bundle.js",
		path : path.resolve(__dirname, "dist")
	},
	plugins : [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		// 请确保引入这个插件！
		new VueLoaderPlugin()
	],
	devServer : {
		//设置基本目录结构
		contentBase : path.resolve(__dirname, "dist"),
		//服务器的IP地址，可以使用IP也可以使用localhost
		host : "localhost",
		//配置服务端口号
		port : 3456,
		historyApiFallback : {
			index : '/index.html' //与output的publicPath有关(HTMLplugin生成的html默认为index.html)
		}
	},
	resolve : {
		alias : {
			vue$ : "vue/dist/vue.esm.js"
		}
	}
};
