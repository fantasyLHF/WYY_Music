module.exports = {//配置页面
    //配置打包路径
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    configureWebpack: {//配置代理
        devServer: {
            proxy: {

                "/lyric": {
                    target: 'http://music.kele8.cn/',
                    changeOrigin: true
                }
            }
        }
    }
}