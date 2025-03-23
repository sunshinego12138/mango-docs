---
page: true
title:  接口转发
---

# 接口转发


:::tip
将会捕获到所有`v1/*`的请求转发到`https://api.openai.com/v1/*`
:::

:::tip
context是请求的上下文对象，用户可以在一个请求或者流式请求中使用同一个上下文对象
:::

```ts
import { Proxy, ProxyInstance } from 'mango-core'


@Proxy({
  prefix: 'v1/*',
  proxyURL: 'https://api.openai.com',
  headers: {
    Authorization: 'Bearer abcdefg',
  },
})
export default class ProxyController implements ProxyInstance {
  /** 请求之前 */
  beforeHandle(request: Request) {
    console.log('before')
  }
  /** 
   * 请求之后
   * 如果是sse并且客户端中断请求，也会触发afterHandle
   *  */
  afterHandle(context: Record<string, any>) {
    console.log('after', context)
  }
  /** 请求处理 */
  requestHandle(data: any, context: any) {
    context.count = context.count || 0
    context.count += 1
    console.log(context)
    return {
      ...data,
      test: 1
    }
  }
}

```