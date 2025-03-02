---
page: true
title:  可能的错误
---

# 可能的错误

## 依赖注入提示：【注入失败】
- 检查是否使用的是`interface`而非`class`
- 是否在`tsconfig.json`中开启了装饰器
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

## 编写了controller和method但是访问失败

请检查程序的入口文件

- `businessPath`为项目的业务路径，所有的代码都要放到这个目录下，默认为`src`
- `controllerPath`为控制器目录，默认为`modules`，在`businessPath/controllerPath`下的所有index.ts为控制器文件，需要默认导出被`@Controller`装饰的类作为装饰器，否则不会生效


## 自定义装饰器失效

由于TS装饰器执行顺序的原因，所有的自定义装饰器需要放在`Mango`装饰器的下方
```ts
import { Controller, Get, createParameterDecorator } from 'mango-core'

const Logger = createParameterDecorator(async ({ query }) => {
  console.log('log')
  return true
})


@Logger // >>>>> 使用错误❌
@Controller({
  name: '测试模块',
  prefix: '/test',
  detail: {
    description: '这是一段测试模块的备注',
    tags: ['测试']
  }
})
@Logger // >>>>> 使用正确✅
export default class DemoController {

  @Logger // >>>>> 使用错误❌
  @Get('')
  @Logger // >>>>> 使用正确✅
  async hello() {
    return this.service.hello()
  }
}

```

## 类型提示丢失

可能会出现`@Controller`,`@Get`等装饰器的参数类型提示失效

这个是由于vscode的typescript版本过低导致的

由于`Elysia`使用了`NoInfer`类型工具，而typescript是从5.4版本开始支持的