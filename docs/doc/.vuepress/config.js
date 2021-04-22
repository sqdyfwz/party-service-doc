const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'party-service-docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  lang: 'zh-cn',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: '指南',
        link: '/guide/',
      },
      {
        text: '前端工程化',
        link: '/product/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '开发指南',
          collapsable: false,
          children: [
            ['','项目结构'],
          ]
        },
        {
          title: '组件库相关',
          collapsable: false,
          children: [
              'vant'
          ]
        },
        {
          title: '工具函数',
          collapsable: false,
          children: [
              'utils'
          ]
        },{
          title: '后端接口',
          collapsable: false,
          children: [
              'api'
          ]
        },{
          title: '自定义指令',
          collapsable: false,
          children: [
              'directive'
          ]
        }
      ],
      '/product/':[{
        title: '前端工程化',
        collapsable: false,
        children: [
          '',
          'git',
          'jenkins',
          'sentry',
          'nexus'
        ]
      }]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
