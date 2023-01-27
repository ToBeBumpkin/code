const {
    override,
    fixBabelImports,
    addWebpackAlias,
    addLessLoader,
    addDecoratorsLegacy,
    adjustStyleLoaders,
} = require("customize-cra");
const path = require("path");
const rewirePostcss = require("react-app-rewire-postcss");

module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd-mobile",
        libraryDirectory: "es",
        // style: "css",
        style: true,
    }),
    addLessLoader({
        // postcssOptions 按需加载antd关键
        lessOptions: {
            javascriptEnabled: true,
            modifyVars: { "@primary-color": "#1890ff" }, //配置相关主题颜色
        },
    }),
    adjustStyleLoaders(({ use: [, , postcss] }) => {
        const postcssOptions = postcss.options;
        postcss.options = { postcssOptions };
    }),
    // 配置文件别名
    addWebpackAlias({
        "@": path.resolve(__dirname, "src"),
        "@scss": path.resolve(__dirname, "src/assets/scss"),
        "@images": path.resolve(__dirname, "src/assets/images"),
        "@views": path.resolve(__dirname, "src/views"),
        "@network": path.resolve(__dirname, "src/network"),
        "@store": path.resolve(__dirname, "src/store"),
        "@components": path.resolve(__dirname, "src/components"),
    }),
    addDecoratorsLegacy(),
    (config, env) => {
        // 重写postcss
        rewirePostcss(config, {
            plugins: () => [
                require("postcss-flexbugs-fixes"),
                require("postcss-preset-env")({
                    autoprefixer: {
                        flexbox: "no-2009",
                    },
                    stage: 3,
                }),
                require("postcss-px2rem-exclude")({
                    // 设计稿宽度/10
                    remUnit: 375 / 10,
                    exclude: /node-modules/i,
                }),
            ],
        });
        return config;
    }
);