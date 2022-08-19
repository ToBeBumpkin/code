const os = require('os')
const path = require('path')    //nodejs 的核心模块，专门用来出来路径问题
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

// npx webpack serve --config ./config/webpack.dev.js

const threads = os.cpus().length;   //cup的核数

module.exports = {
    //入口
    entry: "./src/main.js",
    //输出
    output: {
        //开发模式没有输出
        path: undefined,
        //入口打包文件输出名
        filename: "static/js/[name].js",
        //给打包输出的其他文件名
        chunkFilename: "static/js/[name].chunk.js",
        //图片字体等通过type:asset处理资源命名方式
        assetModuleFilename: 'static/images/[hash][ext][query]',
    },
    //加载器
    module: {
        rules: [
            //loader的配置
            {
                //提升性能，只被一个处理
                oneOf: [
                    {
                        test: /\.css$/, //只监测.css结尾的文件
                        use: [  //执行顺序从右到左，从下到上
                            'style-loader', //将js中的css通过创建style标签添加到html文件中
                            'css-loader'    //将css资源编译成commonjs的模块到js中
                        ]
                    },
                    {
                        test: /\.less$/,
                        //use能使用多个loader
                        use: [{
                            loader: "style-loader" // 将js中的css通过创建style标签添加到html文件中
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
                        // include:path.resolve(__dirname,"../src"),   //只处理src目录下的文件，其他文件不处理
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
    ],
    //开发服务器，不会输出资源，在内存中编译打包
    devServer: {
        host: "localhost",   //启动服务器域名
        port: "3001",   //启动服务器端口
        open: true,   //是否自动打开浏览器
        hot: true,   //模块热加载HMR
    },
    //模式
    mode: "development",
    devtool: "cheap-module-source-map"
}