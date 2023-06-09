const {
    createProxyMiddleware
} = require('http-proxy-middleware')

module.exports = (req, res) => {
    let target = ''
    if (req.url.startsWith('/api')) {
        target = 'https://2504.qiangtu.com:5231'
    }

    createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: {
            '^/api/': '/api/'
        }
    })(req, res)
}