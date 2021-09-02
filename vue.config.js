const config = require("./config/index.js");
module.exports = {
    publicPath:
        process.env.NODE_ENV !== "production"
            ? config.dev.publicPath
            : config.build.publicPath,
    outputDir: "dist",
    devServer: {
        disableHostCheck: true,
        port: config.dev.port,
        proxy: {
            "/api": {
                target: config.dev.target,
                pathRewrite: {
                    "^/api": "",
                },
            },
        },
        overlay: {
            warnings: true,
            errors: true,
        },
    },
    assetsDir: 'public',
    chainWebpack: (config) => {
        config.module.rule('fonts')
            .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)
            .use('url-loader')
            .loader('url-loader')
        config.plugin('html')
            .tap(args => {
                args[0].title = '物业智能数据监控中心'
                return args
            })
    }
}
