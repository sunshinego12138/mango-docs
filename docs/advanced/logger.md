---
page: true
title:  日志
---

# 日志

## 开启日志

```ts
import MongoCore from '@mango/core'

MongoCore.init({
  businessPath: 'src',
  controllerPath: 'modules',
  name: 'Mango elysia',
  version: '1.0.0',
  swagger: {},
  logger: {
    type: 'fancy'
  }
}).listen(8899)

```

## 参数

loger继承于`logestic`，提供了默认三种类型


| 属性               | 类型                                       | 默认值                       | 描述                              |
|--------------------|------------------------------------------|------------------------------|-----------------------------------|
| `type`             | `"fancy" | "common" | "commontz"`                                 | `-`            |  日志样式                         |
| `dest`             | `BunFile`                                 | `-`            | 存储地址, `example: Bun.file('server.log')`                          |
| `showLevel`             | `boolean`                                 | `true`            | 显示日志级别                          |
| `logLevelColour`             | `LogLevelColour`                                 | `-`            | 分别设置各个级别日志的颜色                          |
| `explicitLogging`             | `boolean`                                 | `true`            | 是否允许显式创建的日志                          |
| `httpLogging`             | `boolean`                                 | `true`            | 是否记录所有传入的 HTTP 请求                          |