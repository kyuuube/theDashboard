module.exports = {
    dev: {
        port: 1395,
        api: '/api',
        target: '',
        publicPath: "/",
        devtoolType: "source-map"
    },
    build: {
        publicPath: "/dashboard/",
        devtoolType: "source-map",
        staticPath: "static",
        api: "",
    },
}
