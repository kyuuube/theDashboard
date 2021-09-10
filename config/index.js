module.exports = {
    dev: {
        host: '0.0.0.0',
        port: 1395,
        api: '/api',
        target: 'http://159.75.80.54:8709/',
        publicPath: "/",
        devtoolType: "source-map"
    },
    build: {
        publicPath: "/dashboard/",
        devtoolType: "source-map",
        staticPath: "static",
        api: "http://159.75.80.54:8709/",
    },
}
