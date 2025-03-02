---
page: true
title:  装饰器
---

# 装饰器

## 使用


:::warning
由于实现原理的方式不同，自己编写的装饰器对于Controller是不生效的，仅对类方法生效
:::

手写类方法装饰器

```ts
import { t } from 'elysia'
import { Get, Post, Put, Delete, All, Option, Patch, Custom, createParameterDecorator } from 'mango-core'
import type { Context } from 'mango-types'

const Logger = (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value // 保存原始方法
  descriptor.value = async function (...args: any[]) {
    console.log(args.query)
    return originalMethod.apply(this, args)
  }
  target[propertyKey] = descriptor.value
  return descriptor
}



@Controller({ prefix: '/posts' })
@Logger
export class PostController {
  @Post('/', {
    query: t.Object({
      title: t.String(),
    })
  })
  test(ctx: Context) {
    return 'hello word'
  }
}

```


## 自定义装饰器

:::tip 提示
建议使用Mango内置的使用Mango内置的createParameterDecorator编写自定义装饰器。

可以同时作用于Controller与类方法
:::

使用Mango内置的createParameterDecorator编写装饰器


```ts
import { t } from 'elysia'
import { Get, Post, Put, Delete, All, Option, Patch, Custom, createParameterDecorator } from 'mango-core'
import type { Context } from 'mango-types'

const Logger = createParameterDecorator(async ({query}) => {
  console.log(query)
  return true
})


@Controller({ prefix: '/posts' })
@Logger
export class PostController {
  @Post('/', {
    query: t.Object({
      title: t.String(),
    })
  })
  test(ctx: Context) {
    return 'hello word'
  }
}

```
