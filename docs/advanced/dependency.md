---
page: true
title:  依赖注入
---

# 依赖注入

依赖注入是本系统的核心，可以很方便的进行依赖注入

## 使用
:::danger
如果`Autowired`注入失败:
- 请检查是否为class而非interface

- 请在`tsconfig.json`中添加
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```
:::

```ts
import { Autowired } from 'mango-core'

class Test {
  @Autowired
  serve: TestServe
}

class TestServe {
  helloWord() {
    return 'Hello Word'
  }
}
```

