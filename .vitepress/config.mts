import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mango",
  description: "一个基于Elysia的web框架",
  lang: 'zh-CN',
  themeConfig: {
    outline: {
      label: '大纲',
      level: [2,6]
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/src/start/introduction' }
    ],

    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '简介', link: '/src/start/introduction' },
          { text: '快速开始', link: '/src/start/quick-start' },
        ]
      },
      {
        text: '基础',
        items: [
          { text: '路由', link: '/src/basic/router' },
          { text: '控制器', link: '/src/basic/controller' },
          { text: '类型', link: '/src/basic/type' },
          { text: '配置项', link: '/src/basic/config' },
        ]
      },
      {
        text: '进阶',
        items: [
          { text: '依赖注入', link: '/src/advanced/dependency' },
          { text: '装饰器', link: '/src/advanced/decorators' },
          { text: 'ORM', link: '/src/advanced/prisma' },
          { text: '日志', link: '/src/advanced/logger' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
