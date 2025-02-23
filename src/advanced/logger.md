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
  logger: 'fancy'
}).listen(8899)

```

## 参数

loger有三种类型以供选择

```bash
"fancy" | "common" | "commontz"
```