

module.exports = {
  title: '个人主页',
  description: '文档笔记',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/icon/touxiang.jpg' }],
    ['link', { rel: 'manifest', href: '/images/icon/touxiang.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/icon/touxiang.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    // #697 Provided by the official algolia team.
    // 全文搜索
    // algolia: ctx.isProd ? ({
    //   apiKey: '3a539aab83105f01761a137c61004d85',
    //   indexName: 'vuepress'
    // }) : null,

    // 页面滚动
    smoothScroll: true,
    lastUpdated: '上次更新',
    nav: require('./nav/zh'),
    sidebar: {
      '/zh/technology/Git/': [
        {
         title: 'Git',
         collapsable:false,
         children:[
           ''
         ]
        }
       ],
      '/zh/technology/stylelint/': [
         {
          title: 'stylelint',
          collapsable:false,
          children:[
            '',
            'rules',
            'details-rules',
            'details-zh',
          ]
         }
        ],
    },
    // 监听任何想监听的文件，
    // 文件变动将会触发 vuepress 重新构建，并实时更新。
    extraWatchFiles: [
      '.vuepress/nav/zh.js'
    ]
  }
};


