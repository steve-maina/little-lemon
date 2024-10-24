const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api', // Change this to whatever route you want to use
        createProxyMiddleware({
            target: 'https://raw.githubusercontent.com/courseraap/capstone/main/api.js',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/api.js', // Rewrite to the actual file
            },
        })
    );
};
