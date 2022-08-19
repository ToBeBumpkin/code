const path = require("path")
const { DefinePlugin } = require("webpack")
const EslintWebpackPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')

//返回处理样式loader的函数
const getStyleLoader = (pre) => {
    return [
        "vue-style-loader",
        "css-loader",
        {
            //处理css兼容性
            //配合package.json中的browserslist来指定兼容性
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: ["postcss-preset-env"],
                }
            }
        },
        pre
    ].filter(Boolean)
}

module.exports = {
    entry: './src/main.js',
    output: {
        path: undefined,
        filename: "static/js/[name].js",
        chunkFilename: "static/js/[name].chunk.js",
        assetModuleFilename: "static/media/[hash:10][ext][query]",
    },
    module: {
        rules: [
            //css
            {
                test: /\.css$/,
                use: getStyleLoader()
            },
            //less
            {
                test: /\.less$/,
                use: getStyleLoader("less-loader"),
            },
            //sass
            {
                test: /\.s[as]ss$/,
                use: getStyleLoader("sass-loader"),
            },
            //sass
            {
                test: /\.styl$/,
                use: getStyleLoader("stylus-loader"),
            },
            //图片
            {
                test: /\.(jpe?g|png|gif|webp|svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                }
            },
            //处理其他资源
            {
                test: /\.(woff2?|tts)$/,
                type: "asset/resource",
            },
            //js
            {
                test: /\.js?$/,
                include: path.resolve(__dirname, "../src"),
                loader: "babel-loader",
                options: {
                    cacheDirectory: true,
                    cacheCompression: false,
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new EslintWebpackPlugin({
            context: path.resolve(__dirname, "../src"),
            exclude: "node_modules",
            cache: true,
            cacheLocation: path.resolve(__dirname, "../node_modules/.cache/.eslintcache")
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        }),
        new VueLoaderPlugin(),
        new DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__:false,
        })
    ],
    mode: "development",
    devtool: "cheap-module-source-map",
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        runtimeChunk: {
            name: entrypoint => `runtime~${entrypoint.name}.js`
        }
    },
    resolve: {
        //自动补全扩展名
        extensions: [".vue", ".js", ".json"]
    },
    devServer: {
        host: "localhost",
        port: 3000,
        // open: true,
        hot: true,
        historyApiFallback: true,    //解决前端路由刷新404问题
    }
}   