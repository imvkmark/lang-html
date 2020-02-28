const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ],
    devServer: {
        //设置基本目录结构
        contentBase: path.resolve(__dirname, "dist"),
        //服务器的IP地址，可以使用IP也可以使用localhost
        host: "localhost",
        //配置服务端口号
        port: 3456
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js"
        }
    }
};
