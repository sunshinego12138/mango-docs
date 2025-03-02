---
page: true
title:  WebSocket
---

# WebSocket

```ts
import { WebSocket } from 'mango-core'
import type { WebSocketContext } from 'mango-types'
import { t } from 'elysia'

@Controller({ prefix: '/posts' })
export class PostController {

  @WebSocket('/ws', {
    body: t.Object({
      name: t.String(),
      age: t.Number(),
    }),
  })
  websocket(ws: WebSocketContext, message: any) {
    ws.send(message)
  }
}
```