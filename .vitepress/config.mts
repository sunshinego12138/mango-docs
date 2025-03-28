import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Mango🥭',
  base: '/mango-docs/', // 要与仓库名一致
  description: '一个基于Elysia的web框架',
  lang: 'zh-CN',
  themeConfig: {
    outline: {
      label: '大纲',
      level: [2, 6]
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/start/introduction' },
      { text: '可能的错误', link: '/docs/error/index' },
      {
        text: '国内访问',
        link: 'http://sunshinego.top/mango-docs',
        target: '_blank',
      },
      {
        text: '国外访问',
        link: 'https://sunshinego12138.github.io/mango-docs',
        target: '_blank'
      }
    ],

    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '简介', link: '/docs/start/introduction' },
          { text: '快速开始', link: '/docs/start/quick-start' }
        ]
      },
      {
        text: '基础',
        items: [
          { text: '路由', link: '/docs/basic/router' },
          { text: '控制器', link: '/docs/basic/controller' },
          { text: '类型', link: '/docs/basic/type' },
          { text: '配置项', link: '/docs/basic/config' }
        ]
      },
      {
        text: '进阶',
        items: [
          { text: '依赖注入', link: '/docs/advanced/dependency' },
          { text: '装饰器', link: '/docs/advanced/decorators' },
          { text: 'ORM', link: '/docs/advanced/prisma' },
          { text: '日志', link: '/docs/advanced/logger' },
          { text: 'Static', link: '/docs/advanced/static' },
          { text: '环境变量', link: '/docs/advanced/env' },
          { text: '定时任务', link: '/docs/advanced/cron' },
          { text: 'WebSocket', link: '/docs/advanced/websocket' },
          { text: '接口转发', link: '/docs/advanced/proxy' },
          { text: 'Elysia插件', link: '/docs/advanced/plugin' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sunshinego12138/mango' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/mango-core/access' }
    ]
  }
})
