---
page: true
title:  Plugin
---

# Elysia插件

## 使用Elysia的插件
Mango基于`Elysia`所编写，可以直接使用Elysia的插件

```ts
import {Elysia} from 'elysia'

const plugin = new Elysia().decorate('test', 123)

// 入口程序
const app = MongoCore.init({
  businessPath: 'src',
  controllerPath: 'modules',
  name: 'Mango elysia',
  version: '1.0.0',
  swagger: {}
})
  .use(plugin)
  .listen(8899)
```

返回的app就是一个`Elysia`实例，可以直接在这里使用Elysia的插件


## 类型提示

由于在框架内无法获取到`MongoCore.init`的类型，所以用户自己使用的插件无法使用`Context`获取到类型

:::tip

针对这种情况`Mango`提供了一种解决方案

将Context从程序入口处生成

:::

```ts
// 根目录的入口文件
import {Elysia} from 'elysia'
import { InferContext } from 'elysia'

const plugin = new Elysia().decorate('test', 123)

// 入口程序
const app = MongoCore.init({
  businessPath: 'src',
  controllerPath: 'modules',
  name: 'Mango elysia',
  version: '1.0.0',
  swagger: {}
})
  .use(plugin)
  .listen(8899)

export type Context = InferContext<typeof app>


// 使用
import { t } from 'elysia'
import { Get, Post, Put, Delete, All, Option, Patch, Custom } from 'mango-core'
import type { Context } from '@/index.ts' // <<< 从入口处导入Context而不是在mango-types
import type { Merge } from 'mango-types'

const createPostType = t.Object({
  title: t.String(),
  content: t.String()
})

@Controller({ prefix: '/posts' })
export class PostController {

  @Post('/', {
    body: createPostType
  })
  createPost(ctx: Merge<Context, typeof createPostType.static>) {
    console.log(ctx.test) // <<< 就可以获取到插件中的类型了
    // 创建文章
  }
}
```