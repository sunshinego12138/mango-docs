---
page: true
title: 定时任务 
---

# 定时任务

:::tip
使用[@elysiajs/cron](https://github.com/elysiajs/elysia-cron)
:::

```ts
import { Cron } from 'mango-core'
@Controller({ prefix: '/posts' })
export class PostController {

  @Cron({
    name: 'task1',
    pattern: '*/20 * * * * *',
  })
  cronTask() {
    console.log('任务1')
  }

  @Get('/stop/task')
  stopTask({ stopCronTask }: Context) {
    stopCronTask('task1')
    return '停止任务1'
  }
}
```