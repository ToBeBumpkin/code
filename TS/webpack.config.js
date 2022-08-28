const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    // {
                    //     loader: 'babel-loader',
                    // },
                    //配置babel
                    {
                        //指定加载器
                        loader: 'babel-loader',
                        //设置babel
                        options: {
                            //设置预定义环境
                            presets: [
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        //指定corejs的版本
                                        "corejs": "3",
                                        //使用corejs的方式,usage 表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                exclude: /(node_modules|part1|part2)/
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: "last 2 versions"
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    mode: 'production',
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        }),
    ],
    devServer: {
        port: 3001,
        host: "localhost",
        hot: true,
        // open: true,
        client: {
            logging: 'error',//只打印报错，其实只要这个配置就好了
            overlay: {  //有报错发生，直接覆盖浏览器视窗，显示错误
                errors: true,
                warnings: false,
            },
        },
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}