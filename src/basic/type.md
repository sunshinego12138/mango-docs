---
page: true
title:  类型
---

# 智能类型

得益于Elysia的智能类型，Mango的类型也相对智能

但是为了获取更好的开发体验，牺牲掉了一定的智能性，所以Mango提供了一份很方便的弥补方案用来弥补缺失的智能类型提示

## 基础类型
> Mango.Context，[类型与路由的参数类型一致](./router#context)

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

## 单类型设置
> Mango.Context是一个类型工具可以传递类型参数
> 可以为某个参数设置类型
```ts
import { Controller } from '@mango/core'
import type { Mango } from '@mango/types'
import { t } from 'elysia'

const query = t.Object({
  name: t.String()
})

@Controller({
  name: '测试',
  prefix: '/test',
  query: query,
  detail: {
    description: '测试的接口',
    tags: ['test'],
  },
})
export class PostController {
  @Get('/')
  hello(ctx: Mango.Context<'query', typeof query.static>) {
    return ctx.query.name
  }
}
```

## 多类型设置
> Mango.Merge
> 可以为context设置类型
```ts
import { Controller } from '@mango/core'
import type { Mango } from '@mango/types'
import { t } from 'elysia'

const query = t.Object({
  name: t.String()
})

const body = t.Object({
  id: t.String()
})

type ctxType = typeof query.static & typeof body.static

@Controller({
  name: '测试',
  prefix: '/test',
  query: query,
  detail: {
    description: '测试的接口',
    tags: ['test'],
  },
})
export class PostController {
  @Get('/', {
    query,
    body
  })
  hello(ctx: Mango.Merge<Mango.Context, ctxType>) {
    return ctx.query.name
  }
}
```