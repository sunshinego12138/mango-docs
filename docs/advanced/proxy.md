---
page: true
title:  接口转发
---

# 接口转发


:::tip
将会捕获到所有`v1/*`的请求转发到`https://api.openai.com/v1/*`
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
  beforeHandle(request: Request) {
    console.log('before')
  }
  afterHandle() {
    console.log('after')
  }
}

```