module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 19.2,
            minPixelValue: 4,
            propList: ['*'],
            selectorBlackList: ['origin-'],
        }
    }
}
