export default {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 16, // 根元素字体大小，1rem = 16px
      unitPrecision: 3, // 转换后的精度
      propList: ['*'], // 可以从px转换为rem的属性
      selectorBlackList: ['.ignore', '.hairlines'], // 不转换的类名
      replace: true, // 是否替换包含rem的规则
      mediaQuery: false, // 是否在媒体查询的css代码中也进行转换
      minPixelValue: 1, // 最小转换数值
      exclude: [/node_modules/], // 排除文件夹
    },
  },
}