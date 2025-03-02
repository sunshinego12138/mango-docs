---
page: true
title:  环境变量
---

# 环境变量

## 介绍
可以使用`context.env`获取环境变量，会拿到`NODE_ENV`

## 使用

```ts
import { Controller, Get, createParameterDecorator, Autowired } from 'mango-core'
import { Context } from 'mango-types'

@Controller({
  name: '测试模块',
  prefix: '/test',
  detail: {
    description: '这是一段测试模块的备注',
    tags: ['测试']
  }
})
export default class DemoController {
  @Get('')
  @Logger
  async hello({env}: Context) {
    console.log(env.getEnv())
    return this.service.hello()
  }
}

```