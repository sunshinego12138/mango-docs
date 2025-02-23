---
page: true
title: Prisma 
---
# ORM

## Prisma
:::tip
以Prisma为例，写一个实际的案例
:::

```ts
import { PrismaClient } from '@prisma/client'
import { t } from 'elysia'
import { Autowired,Get, Post, Put, Delete, All, Option, Patch, Custom, createParameterDecorator } from '@mango/core'
import type { Mango } from '@mango/types'

class PrismaService extends PrismaClient {
  private static instance: PrismaService

  constructor() {
    // 缓存prisma实例，防止重复实例化
    if (PrismaService.instance) {
      return PrismaService.instance as unknown as PrismaService
    }
    super({
      log: ['query'],
    })
    // 保存实例
    PrismaService.instance = this
  }
}


@Controller({ prefix: '/posts' })
export class PostController {
  @Autowired
  prisma: PrismaService

  @Get('/', {
    query: t.Object({
      title: t.String(),
    })
  })
  async test(ctx: Mango.Context) {
    return await this.prisma.user.findMany()
  }
}
```