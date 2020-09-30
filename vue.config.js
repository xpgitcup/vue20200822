let proxyObj = {};
proxyObj['/'] = {
    ws: false,
    target: 'http://localhost:8000',
    changeOrigin: true,
    pathRewrite: {
        '^/api': ''
    }
}

module.exports = {
    devServer: {
        proxy: proxyObj
    },

    lintOnSave: false
}
