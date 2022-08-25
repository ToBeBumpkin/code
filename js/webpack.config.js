
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].js",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")
        })
    ],
    devServer: {
        host: "localhost",   //启动服务器域名
        port: "3001",   //启动服务器端口
        // open: true,   //是否自动打开浏览器
        hot: true,   //模块热加载HMR
        client: {
            logging: 'error',//只打印报错，其实只要这个配置就好了
            overlay: {  //有报错发生，直接覆盖浏览器视窗，显示错误
                errors: true,
                warnings: false,
            },
        },
    },
    mode: "development"
}