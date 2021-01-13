// 导航栏配置

module.exports = [
  {
    text: '快速上手', 
    link: '/guide.md'
  },
  {
    text: '项目文档', 
    ariaLabel: '项目文档',
    items: [
      {
        text: '工作日志', 
        link: '/admin-project/job-record/'
      }
    ]
  },
  {
    text: '技术文档',
    ariaLabel: '技术文档', 
    items: [
      {
        text: 'Git', 
        link: '/zh/technology/Git/'
      },
      {
        text: 'stylelint', 
        link: '/zh/technology/stylelint/'
      }
    ]
  },
  // {
  //   text: '微博', 
  //   link: 'https://baidu.com'
  // }
]
