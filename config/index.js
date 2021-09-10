module.exports = {
    dev: {
        host: '0.0.0.0',
        port: 1395,
        api: '/api',
        target: 'http://api.kyuuu.be',
        publicPath: "/",
        devtoolType: "source-map"
    },
    build: {
        publicPath: "/dashboard/",
        devtoolType: "source-map",
        staticPath: "static",
        api: "http://api.kyuuu.be",
    },
}
