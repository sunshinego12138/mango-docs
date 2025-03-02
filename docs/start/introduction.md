---
page: true
title: 简介
---

<script setup>
  import Button from '@theme/components/button.vue'
  // <Button />
</script>



# 简介

<p style="display: flex;align-items: center;gap: 4px;"><img src="https://img.shields.io/npm/dm/mango-core" alt="npm downloads"><a href="https://github.com/sunshinego12138/mango" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/stars/sunshinego12138/mango?style=social" alt="GitHub stars"></a><a href="https://github.com/sunshinego12138/mango" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/forks/sunshinego12138/mango?style=social" alt="GitHub forks"></a></p>

<!-- ![npm downloads](https://img.shields.io/npm/dm/mango-core)
[![GitHub stars](https://img.shields.io/github/stars/sunshinego12138/mango?style=social)](https://github.com/sunshinego12138/mango)
[![GitHub forks](https://img.shields.io/github/forks/sunshinego12138/mango?style=social)](https://github.com/sunshinego12138/mango) -->


## 介绍
**Mango - 重新定义全栈开发的优雅范式**  

**[🚀 高性能 | 🧩 开箱即用 | 🤖 智能类型推导 | 🧭 MVC 友好 ]**  

厌倦了在性能与开发体验间做妥协？**Mango** 应运而生——基于 Bun 的下一代全栈框架，巧妙融合 Elysia 的极速响应与 NestJS 的工程化哲学。无论是轻量级 API 还是企业级应用，都能以 TypeScript 的极致优雅，书写高可维护性的 MVC 架构代码。  

🌟 **核心优势**  
- **「性能怪兽」**：Bun 原生运行时 + Elysia 内核，吞吐量高的一批
- **「零配置魔法」**：自动路由发现、依赖注入、装饰器语法，5 分钟开启全栈项目  
- **「类型即文档」**：端到端类型安全，IDE 智能提示覆盖请求/响应/中间件全链路  
- **「模块化自由」**：Controller-Service-Repository 分层架构，随项目复杂度无缝扩展  

📦 **开箱即用**  
```typescript
import {
  Controller,
  Get,
} from 'mango-core'

@Controller({
  name: '测试模块',
  prefix: '/test',
  detail: {
    description: '这是一段测试模块的备注',
    tags: ['测试'],
  },
})
export default class DemoController {

  @Get('')
  async hello() {
    return 'Hello Word!'
  }
}
```

🔥 **为什么选择 Mango**  
- 有着Bun的性能以及MVC的开发模式
- 保留 Elysia 所有特性：精确的路径参数推断、自定义错误边界、插件生态  

💡 **适合场景**  
- 全栈 TypeScript 应用开发  
- 需要高性能后端但拒绝裸写 Elysia 的团队  
- 从 Express/NestJS 迁移寻求性能突破  




## 前置准备
:::tip 环境要求
开始之前建议将`Bun`更新到最新版本
:::

::: tip 前置知识
本框架基于[Elysia](https://elysiajs.com/)编写，需要对它有一定的了解
:::
```bash 
bun upgrade 
```

## 安装依赖
:::tip 注意
- 如果使用bun安装依赖失败，请更换镜像源
:::


::: code-group
```bash [bun]
bun add mango-core mango-types elysia
```

```bash [npm]
# 需要安装适配node的elysia插件:https://github.com/bogeychan/elysia-polyfills
npm install mango-core mango-types elysia
```

```bash [yarn]
# 需要安装适配node的elysia插件:https://github.com/bogeychan/elysia-polyfills
yarn add mango-core mango-types elysia
```

```bash [pnpm]
# 需要安装适配node的elysia插件:https://github.com/bogeychan/elysia-polyfills
pnpm install mango-core mango-types elysia
```
:::

::: danger 注意
注意存放代码的目录及所有父级目录最好不要存在中文、韩文、日文以及空格，否则可能会出现预料外的问题。
:::


## init参数

| 属性               | 类型                                       | 默认值                       | 描述                              |
|--------------------|------------------------------------------|------------------------------|-----------------------------------|
| `name`             | `string`                                 | `Elysia SunShine`            | 应用名称                          |
| `version`          | `string`                                 | `v1.0.0`                     | 应用版本                          |
| `baseDir`         | `string`                                 | 项目根目录                   | 项目基础路径, 无需填写自动获取   |
| `businessPath`     | `string`                                 | `src`                        | 业务路径                          |
| `controllerPath`   | `string`                                 | `modules`                    | 存放Elysia控制器的路径,会自动识别该文件夹下所有的index.ts文件中被Controller装饰的类作为控制器           |
| `cors`             | `boolean`                                | 默认不开启                           | 是否开启cors                     |
| `swagger`          | `ElysiaSwaggerConfig`     | 默认不开启                            | 是否启用swagger                  |
| `logger`           | `LogesticOptions`      | 默认不开启                            | 是否启用日志，有三种样式选择     |
| `ElysiaOption`           | `ElysiaConfig<string, false>`      | -                            | Elysia的配置     |