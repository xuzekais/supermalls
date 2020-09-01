module.exports ={
  configurewebpack: {
    resolve: {
      alias:{
        // 配置文件路径别名
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}