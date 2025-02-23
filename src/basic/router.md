---
page: true
title: 路由 
---

# 路由

## 基础使用
Mango 提供了一个简单的路由系统，以下是一些常用的路由示例：
:::tip 
支持Get, Post, Put, Delete, All, Option, Patch, Custom请求

其中被All装饰会命中所有的请求, 具体详见[Elysia文档](https://elysiajs.com/essential/route.html#custom-method)

Custom装饰器则是自定义请求方法，具体详见[Elysia文档](https://elysiajs.com/essential/route.html#elysia-all)
:::



```ts
import { t } from 'elysia'
import { Get, Post, Put, Delete, All, Option, Patch, Custom } from '@mango/core'
import type { Mango } from '@mango/types'

@Controller({ prefix: '/posts' })
export class PostController {
  @Get('/:id')
  getPost(ctx: Mango.Context) {
    // 获取文章
  }

  @Post('/', {
    body: t.Object({
      title: t.String(),
      content: t.String()
    })
  })
  createPost(ctx: Mango.Context) {
    // 创建文章
  }
}
```

## Context
:::tip
得益于Elysia的类型系统，我们的ctx有着完善的类型

对应的Elysia[文档](https://elysiajs.com/essential/handler.html)
:::

**Context**

-   **path** - 请求的路径
-   **body** - [请求体](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages)
-   **query** - [查询字符串参数](https://en.wikipedia.org/wiki/Query_string)
-   **params** - 路径参数
-   **headers** - [请求头](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
-   **request** - [Web Standard Request](https://developer.mozilla.org/en-US/docs/Web/API/Request)
-   **redirect** - 重定向方法
-   **store** - 控制器的store[可变]
-   **cookie** - cookie(包含get/set)
-   **set** - 设置响应值的方法
    -   **status** - [HTTP status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
    -   **headers** - 响应头
    -   **redirect** - 响应作为重定向到的路径
-   **error** - 返回自定义状态代码的函数
-   **server** - 控制器实例
-   **stopCronTask** - 关闭定时任务的方法，传入定时任务的name
-   **env** - 环境变量方法

## 类型提示
### 类型设置
```ts
import type { Mango } from '@mango/types'


```