---
page: true
title:  配置项
---

# ElysiaOption配置项

:::tip
Mango继承于Elysia，对应的配置项与Elysia一致

具体详见[文档](https://elysiajs.com/patterns/configuration.html)
:::

## 最大请求体大小
我们可以通过在 `serve` 配置中设置 [`serve.maxRequestBodySize`](#maxrequestbodysize) 来设置最大请求体大小。

```ts
import { Elysia } from 'elysia'

new Elysia({
  serve: {
    maxRequestBodySize: 1024 * 1024 * 256 // 256MB
  }
})
```

默认情况下，最大请求体大小为 128MB（1024 * 1024 * 128）。

## TLS
我们可以通过传递密钥和证书的值来启用 TLS（SSL 的后继者）；两者都是启用 TLS 所必需的。

```ts
import { Elysia, file } from 'elysia'

new Elysia({
  serve: {
    tls: {
      cert: file('cert.pem'),
      key: file('key.pem')
    }
  }
})
```

Elysia 扩展了 Bun 配置，支持开箱即用的 TLS，基于 BoringSSL。

请参阅 [TLS 选项](#tls-options) 以获取可用配置。

## 配置
以下是 Elysia 接受的配置：

## prefix
@default `""`

实例的路径前缀

## name
实例的名称，用于调试和插件去重目的

## seed
用于生成校验和的种子，用于 [插件去重](/essential/plugin.html#plugin-deduplication)

## detail
用于文档生成的 OpenAPI 文档

此配置扩展了 [Swagger 规范](https://swagger.io/specification)。

@see [Swagger 规范](https://swagger.io/specification)

## tags
用于文档生成的 OpenAPI 标签

为所有实例路由装饰标签

此配置扩展了 [标签对象](https://swagger.io/specification/#tag-object)

@see [标签对象](https://swagger.io/specification/#tag-object)

## precompile
@default `false`

在启动服务器之前预热 Elysia

这将执行提前编译并生成路由处理程序的代码

如果设置为 false，Elysia 将执行即时编译

仅对根实例（使用 listen 的实例）有效

## aot
@default `false`

提前编译

性能降低，但启动时间更快

## strictPath
@default `false`

Elysia 是否应该容忍后缀 `/` 或反之

### 示例
如果 `strictPath` 设置为 `true`，Elysia 将匹配 `/id` 而不是 `/id/`

```ts
import { Elysia } from 'elysia'

new Elysia({
  strictPath: true
})
  .get('/id', 'work')
```

通常情况下，`/id` 和 `/id/` 都将匹配路由处理程序（默认值为 `false`）。

## cookie
设置默认的 cookie 选项

## normalize
@default `true`

如果启用，处理程序将在传入和传出请求体上运行 [clean](https://github.com/sinclairzx81/typebox?tab=readme-ov-file#clean)，而不是直接失败。

这允许在请求体中发送未知或不允许的属性。这些属性将被简单地过滤掉，而不是使请求失败。

当模式允许附加属性时，这不会产生影响。

由于这使用动态模式，可能会对性能产生影响。

## nativeStaticResponse
@default `true`
@since 1.1.11

启用 Bun 静态响应。

Elysia 是否应该使用 Bun 的静态响应。

这使得 Elysia 能够提高静态内容性能并显著减少内存使用。

### 示例
Elysia 将为静态内容使用 Bun 的静态响应
```ts
import { Elysia } from 'elysia'

new Elysia()
  .get('/static', 'work')
```

上述代码等价于：
```ts
Bun.serve({
  static: {
    'static': 'work',
    '/static': '/work'
  }
})
```

::: tip
此配置仅在使用 Bun > 1.1.27 作为服务器时有效
:::

## websocket
覆盖 WebSocket 配置

建议保持默认设置，因为 Elysia 会自动生成适合处理 WebSocket 的配置。

此配置扩展了 [Bun WebSocket API](https://bun.sh/docs/api/websockets)。

## serve
Bun serve 配置。

```ts
import { Elysia } from 'elysia'

new Elysia({
  serve: {
    hostname: 'elysiajs.com',
    tls: {
      cert: Bun.file('cert.pem'),
      key: Bun.file('key.pem')
    }
  },
})
```

此配置扩展了 [Bun Serve API](https://bun.sh/docs/api/http) 和 [Bun TLS](https://bun.sh/docs/api/http#tls)。

以下内容从 Bun JSDoc 和 Bun 文档中移植：

## port
@default `3000`

监听的端口

## unix
如果设置，HTTP 服务器将监听 Unix 套接字而不是端口。

（不能与主机名 + 端口一起使用）

## hostname
@default `0.0.0.0`

设置服务器监听的主机名

## maxRequestBodySize
@default `1024 * 1024 * 128`（128MB）

设置请求体的最大大小（以字节为单位）

## reusePort
@default `true`

是否应设置 `SO_REUSEPORT` 标志

这允许多个进程绑定到同一端口，这对负载均衡很有用。

此配置被覆盖并默认由 Elysia 启用。

## id
使用 ID 唯一标识服务器实例

此字符串将用于热重载服务器，而不会中断待处理的请求或 WebSocket。如果未提供，将生成一个值。要禁用热重载，请将此值设置为 `null`。

## rejectUnauthorized
@default `NODE_TLS_REJECT_UNAUTHORIZED` 环境变量

如果设置为 `false`，将接受任何证书。

## TLS 选项
此配置扩展了 [Bun TLS API](https://bun.sh/docs/api/http#tls)。

```ts
import { Elysia } from 'elysia'

new Elysia({
  tls: {
    cert: Bun.file('cert.pem'),
    key: Bun.file('key.pem')
  }
})
```

## cert
PEM 格式的证书链。每个私钥应提供一个证书链。

每个证书链应包含为提供的私钥格式化的 PEM 证书，后跟 PEM 格式的中间证书（如果有），按顺序排列，不包括根 CA（根 CA 必须事先为对等方所知，见 ca）。

在提供多个证书链时，它们不必与其私钥在 key 中的顺序相同。

如果未提供中间证书，对等方将无法验证证书，握手将失败。

## key
PEM 格式的私钥。PEM 允许私钥加密的选项。加密密钥将使用 options.passphrase 解密。

可以提供使用不同算法的多个密钥，作为未加密密钥字符串或缓冲区的数组，或以对象的形式提供数组。

对象形式只能出现在数组中。

**object.passphrase** 是可选的。如果提供，加密密钥将使用 **object.passphrase** 解密，如果没有提供，则使用 **options.passphrase**。

## ca
可选地覆盖受信任的 CA 证书。默认情况下信任 Mozilla 精心挑选的知名 CA。

当使用此选项显式指定 CA 时，Mozilla 的 CA 将完全被替换。

## passphrase
单个私钥和/或 PFX 的共享密码短语。

## dhParamsFile
自定义 Diffie Helman 参数的 .pem 文件路径。

## requestCert
@default `false`

如果设置为 `true`，服务器将请求客户端证书。

## secureOptions
可选地影响 OpenSSL 协议行为，通常不需要。

如果使用，请谨慎处理！

值是来自 OpenSSL 选项的 SSL_OP_* 选项的数字位掩码。

## serverName
显式设置服务器名称。

## lowMemoryMode
@default `false`

将 `OPENSSL_RELEASE_BUFFERS` 设置为 1。

这会降低整体性能，但节省一些内存。