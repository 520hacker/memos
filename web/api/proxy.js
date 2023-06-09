const {
    createProxyMiddleware
} = require('http-proxy-middleware')

module.exports = (req, res) => {
    let target = 'https://2504.qiangtu.com:5231'
    // if (req.url.startsWith('/api') || 
    // req.url.startsWith('/u/')) {
    //     target = 'https://2504.qiangtu.com:5231'
    // }

    createProxyMiddleware({
        target,
        changeOrigin: true,
        pathRewrite: {
            '^/': '/'
        }
    })(req, res)
}