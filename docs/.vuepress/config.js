module.exports = {
  title: '个人主页',
  description: '副标题',
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
    nav:[ // 导航栏配置
      {text: '快速上手', link: '/guide.md'},  
      {
        text: '项目文档', 
        items:[
          {text: '工作日志', link: '/admin-project/job-record/'},
        ]
      },
      {
        text: '技术文档', 
        items:[
          {text: 'Git', link: '/technology/Git/'},
          {text: 'stylelint', link: '/technology/stylelint/'},
          // {text: '算法题库', link: '/algorithm/'},
          // {text: '诗和远方', link: '/others/'}
        ]
      },
      // {text: '微博', link: 'https://baidu.com'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};