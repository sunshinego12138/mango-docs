---
page: true
title:  依赖注入
---

# 依赖注入

依赖注入是本系统的核心，可以很方便的进行依赖注入

## 使用
:::tip
被Autowired装饰后，会根据它的类型将示例注入

注意：TestServe只能是一个类，如果是type或者interface会报错
:::
```ts
import { Autowired } from '@mango/core'

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
