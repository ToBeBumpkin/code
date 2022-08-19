const path = require("path")
const EslintWebpackPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { DefinePlugin } = require("webpack")
const { VueLoaderPlugin } = require('vue-loader')

//获取cross-env定义的环境变量
const isProduction = process.env.NODE_ENV === "production";
//返回处理样式loader的函数
const getStyleLoader = (pre) => {
    return [
        isProduction ? MiniCssExtractPlugin.loader : "vue-style-loader",
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
        path: isProduction ? path.resolve(__dirname, "../dist") : undefined,
        filename: isProduction ? "static/js/[name].[contenthash:10].js" : "static/js/[name].js",
        chunkFilename: isProduction ? "static/js/[name].[contenthash:10].chunk.js" : "static/js/[name].chunk.js",
        assetModuleFilename: "static/media/[hash:10][ext][query]",
        clean: true,
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
        isProduction && new MiniCssExtractPlugin({
            filename: "static/css/[name].[contenthash:10].css",
            chunkFilename: "static/css/[name].[contenthash:10].chunk.css",
        }),
        isProduction && new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "../public"),
                    to: path.resolve(__dirname, "../dist"),
                    globOptions: {
                        //忽略
                        ignore: ["**/index.html"],
                    },
                },
            ],
        }),
        new VueLoaderPlugin(),
        new DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: false,
        })
    ].filter(Boolean),
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? "source-map" : "cheap-module-source-map",
    optimization: {
        splitChunks: {
            chunks: "all",
            cacheGroups: {
                vue: {
                    test: /[\\/]node_modules[\\/]react(.*)?[\\/]/,
                    name: "chunk-vue",
                    priority: 40,
                },
                elementPlus: {
                    test: /[\\/]node_modules[\\/]elementPlus[\\/]/,
                    name: "chunk-elementPlus",
                    priority: 30,
                },
                libs: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "chunk-list",
                    priority: 20,
                }
            }
        },
        runtimeChunk: {
            name: entrypoint => `runtime~${entrypoint.name}.js`
        },
        minimize: isProduction,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
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
    },
    performance: false, //关闭性能分析
}   