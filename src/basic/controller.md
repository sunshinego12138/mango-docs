---
page: true
title:  控制器
---

# 控制器

## 概述
控制器是MVC架构的核心，使用`@Controller`装饰器定义模块化路由


## 参数
:::tip
`Mango`控制器的参数继承于`Elysia`的Elysia实例参数，可参考[文档](https://elysiajs.com/patterns/configuration.html#strictpath)
:::

## 使用案例
```ts
import { Controller } from '@mango/core'
import type { Mango } from '@mango/types'

@Controller({
  name: '测试',
  prefix: '/test',
  detail: {
    description: '测试的接口',
    tags: ['test'],
  },
})
export class PostController {
  @Get('/')
  hello(ctx: Mango.Context) {
    return 'hello'
  }
}
```

## 参数
:::tip
Mango的实现原理为将每个Controller就是一个Elysia实例，最后注册到根Elysia示例上

所以配置项与[ElysiaOption](./config)一致
:::