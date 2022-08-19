const os = require('os')
const path = require('path')    //nodejs 的核心模块，专门用来出来路径问题
const HtmlWebpackPlugin = require('html-webpack-plugin');   //html模版
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");    //提取css成单独的文件
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); //压缩css
const TerserWebpackPlugin = require("terser-webpack-plugin")
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

// npx webpack --config ./config/webpack.prod.js

const threads = os.cpus().length;   //cup的核数

function getStyleLoader() {

}

module.exports = {
    //入口
    entry: "./src/main.js",
    //输出
    output: {
        //文件输出路径
        // __dirname 代表当前文件夹目录
        path: path.resolve(__dirname, "../dist"),    //绝对路径
        //入口打包文件输出名
        filename: "static/js/[name].js",
        //给打包输出的其他文件名
        chunkFilename: "static/js/[name].chunk.js",
        //图片字体等通过type:asset处理资源命名方式
        assetModuleFilename: 'static/images/[hash][ext][query]',
        //自动清空上次打包结果
        clean: true
    },
    //加载器
    module: {
        rules: [
            //loader的配置
            {
                oneOf: [
                    {
                        test: /\.css$/, //只监测.css结尾的文件
                        use: [  //执行顺序从右到左，从下到上
                            MiniCssExtractPlugin.loader,    //提取css成单独的文件
                            'css-loader',    //将css资源编译成commonjs的模块到js中
                            {
                                loader: "postcss-loader",
                                options: {
                                    postcssOptions: {
                                        plugins: [
                                            [
                                                "postcss-preset-env",
                                                {
                                                    browsers: 'last 2 versions'
                                                }
                                            ]
                                        ]
                                    }
                                }
                            }
                        ]
                    },
                    {
                        test: /\.less$/,
                        //use能使用多个loader
                        use: [{
                            loader: MiniCssExtractPlugin.loader,    //提取css成单独的文件
                        }, {
                            loader: "css-loader" //将css资源编译成commonjs的模块到js中
                        }, {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            "postcss-preset-env",
                                            {
                                                browsers: 'last 2 versions'
                                            }
                                        ]
                                    ]
                                }
                            }
                        }, {
                            loader: "less-loader" // 将less编译成css
                        }]
                    },
                    {
                        test: /\.(png|jpe?g|gif|webp|svg)$/,
                        type: 'asset',  //会转base64
                        parser: {
                            dataUrlCondition: {
                                //小于10kb的图片转base64
                                //减少请求数量
                                maxSize: 10 * 1024 // 10kb
                            }
                        },
                        // generator: {
                        //     //图片输出的目录
                        //     filename: 'static/images/[hash][ext][query]'
                        // }
                    },
                    {
                        test: /\.(ttf|woff2?|map3|map4|avi)$/,
                        type: 'asset/resource',  //会转原封不动的输出
                        // generator: {
                        //     //图片字体的目录名称
                        //     //[hash:10] 取前十位
                        //     filename: 'static/media/[hash:10][ext][query]'
                        // }
                    },
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/, //排除node_modules中的js文件（这些文件不处理）
                        use: [
                            {
                                loader: "thread-loader",    //开启多进程
                                options: {
                                    workers: threads,
                                }
                            },
                            {
                                loader: 'babel-loader',
                                options: {
                                    cacheDirectory: true,    //开启babel缓存
                                    cacheCompression: false, //关闭缓存文件压缩
                                    plugins: ['@babel/plugin-transform-runtime'],   //减少代码体积
                                }
                            }
                        ],
                    }
                ]
            }
        ]
    },
    //插件
    plugins: [
        //plugins配置
        new ESLintPlugin({
            //检测哪些文件
            context: path.resolve(__dirname, "../src"),
            exclude: "node_modules",
            cache: true,    //开启缓存
            cacheLocation: path.resolve(__dirname, "../node_modules/.cache/eslintcache"),
            threads,    //开启多进程和设置进程数量
        }),
        new HtmlWebpackPlugin({
            //模版
            template: path.resolve(__dirname, "../public/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].css",
            chunkFilename: "static/css/[name].chunk.css",
        }),
        new CssMinimizerPlugin(),   //压缩css
        //压缩js
        new TerserWebpackPlugin({   //开启多进程和设置进程数量
            parallel: threads
        }),
        new PreloadWebpackPlugin({
            rel: 'preload',
            as: 'script'
        }),
        new WorkboxPlugin.GenerateSW({
            // 这些选项帮助快速启用 ServiceWorkers
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaim: true,
            skipWaiting: true,
        }),
    ],
    optimization: {
        //代码分割配置
        splitChunks: {
            chunks: "all",   //对所有模块进行分割
            // minSize: 20000,
            // minRemainingSize: 0,
            // minChunks: 1,
            // maxAsyncRequests: 30,
            // maxInitialRequests: 30,
            // enforceSizeThreshold: 50000,
            // cacheGroups: {
            //     defaultVendors: {
            //         test: /[\\/]node_modules[\\/]/,
            //         priority: -10,
            //         reuseExistingChunk: true,
            //     },
            //     default: {
            //         minChunks: 2,
            //         priority: -20,
            //         reuseExistingChunk: true,
            //     },
            // },

        },
        runtimeChunk: {
            name: (entrypoint) => `runtime~${entrypoint.name}.js`
        }
    },
    performance: {
        hints: 'warning',
        //入口起点的最大体积 整数类型（以字节为单位）
        maxEntrypointSize: 50000000,
        //生成文件的最大体积 整数类型（以字节为单位 300k）
        maxAssetSize: 30000000,
        //只给出 js 文件的性能提示
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith('.js');
        }
    },
    //生产模式不需要服务器
    //模式
    mode: "production",
    devtool: "source-map"
}