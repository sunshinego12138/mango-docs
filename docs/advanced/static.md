---
page: true
title: Static 
---

# Static

静态服务

:::tip
使用[@elysiajs/static](https://github.com/elysiajs/elysia-static)
:::

| 属性名              | 类型                          | 默认值               | 描述                                                                                                         |
|-------------------|-----------------------------|---------------------|------------------------------------------------------------------------------------------------------------|
| assets            | `string`                    | "public"            | 作为公共路径暴露的资源路径                                                                                     |
| prefix            | `string`                    | '/public'           | 用于为静态目录创建虚拟挂载路径的路径前缀                                                                         |
| staticLimit       | `number`                    | 1024                | 如果总文件数超过此数字，文件将通过通配符处理而不是静态路由，以减少内存使用                                          |
| alwaysStatic      | `boolean`                   | false (除非 `NODE_ENV` 为 'production') | 文件是否始终以静态方式提供                                                                                     |
| ignorePatterns    | `Array<string | RegExp>`    | []                  | 要忽略发布的文件数组。如果匹配到其中一个模式，文件将不会被暴露。                                               |
| noExtension       | `boolean`                   | -                   | 指示是否需要文件扩展名，仅在 `alwaysStatic` 设置为 true 时有效                                                  |
| enableDecodeURI   | `boolean`                   | -                   | 当 URL 需要解码时使用，仅在 `alwaysStatic` 设置为 false 时有效                                                  |
| resolve           | `(...pathSegments: string[]) => string` | -                   | Node.js 解析函数                                                                                               |
| headers           | `Record<string, string> | undefined` | -                   | 设置响应头                                                                                                     |
| noCache           | `boolean`                   | false               | 如果设置为 true，浏览器缓存将被禁用                                                                             |
| directive         | `'public' | 'private' | 'must-revalidate' | 'no-cache' | 'no-store' | 'no-transform' | 'proxy-revalidate' | 'immutable'` | public             | Cache-Control 头部的指令                                                          |
| maxAge            | `number | null`            | 86400               | 指定资源被视为新鲜的最大时间（以秒为单位）。此新鲜度生命周期是相对于请求时间计算的。此设置有助于控制浏览器缓存行为。`maxAge` 为 0 将防止缓存，要求请求在使用前与服务器验证。 |
| indexHTML         | `boolean`                   | true                | 启用将 index.html 作为默认路由的服务                                                                              |