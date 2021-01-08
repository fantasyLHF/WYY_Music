module.exports = {//配置页面
    //配置打包路径
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    configureWebpack: {//配置代理
        devServer: {
            proxy: {
                "/a": {
                    target: 'http://musicapi.leanapp.cn/',
                    changeOrigin: true
                    // 当你请求 /search?123123 时 会代理到 'http://musicapi.leanapp.cn/search?123123'
                },
                // '/personalized/newsong': {
                //     target: 'http://musicapi.leanapp.cn/',
                //     changeOrigin: true
                // }
            }
        }
    }
}