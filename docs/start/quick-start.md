---
page: true
title: 快速开始 
---

# 快速开始

:::tip
本章节将会带你实现一个简单的Hello Word
:::

## 创建项目目录

```bash
mkdir mango-project

cd mango-project

bun init

bun add mango-core mango-types elysia
```

## 完善目录结构

```bash
mango-project
├── bun.lockb
├── package.json
├── src # businessPath,业务路径
├── ├── index.ts  # 程序入口
│   └── modules # controllerPath，控制器路径
│       └── index.ts  # 控制器
└── tsconfig.json
```

### index.ts

```ts
import { InferContext } from 'elysia'
import MongoCore from 'mango-core'

MongoCore.init({
  businessPath: 'src',
  controllerPath: 'modules',
  name: 'Mango elysia',
  version: '1.0.0',
  swagger: {},
}).listen(8899)

export type Context = InferContext<typeof app>

```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    // 允许在类中定义变量不用初始化值
    "strictPropertyInitialization": false,
    // 导入类型的时候前面必须添加type
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}

```

### src/modules/index.ts
```ts
import {
  Controller,
  Get,
} from 'mango-core'

@Controller({
  name: '测试模块',
  prefix: '/test',
  detail: {
    description: '这是一段测试模块的备注',
    tags: ['测试'],
  },
})
export default class DemoController {

  @Get('')
  async hello() {
    return 'Hello Word!'
  }
}
```

## 添加scripts
```json
{
  ...
  "scripts": {
    "dev": "bun run --watch ./src/index.ts", // 如果需要设置环境变量，可以安装cross-env
    "build:linux": "rm -rf ./dist/server && bun build --compile --target=bun-linux-x64 --minify --sourcemap --bytecode ./src/index.ts --outfile dist/server"
  }
  ...
}
```

## 运行项目
```bash
bun run dev
```


此时，你会看到类似如下的输出代表项目运行成功：
```bash
  __  __                                _           _             _             _           _ 
 |  \/  | __ _ _ __   __ _  ___     ___| |_   _ ___(_) __ _   ___| |_ __ _ _ __| |_ ___  __| |
 | |\/| |/ _` | '_ \ / _` |/ _ \   / _ \ | | | / __| |/ _` | / __| __/ _` | '__| __/ _ \/ _` |
 | |  | | (_| | | | | (_| | (_) | |  __/ | |_| \__ \ | (_| | \__ \ || (_| | |  | ||  __/ (_| |
 |_|  |_|\__,_|_| |_|\__, |\___/   \___|_|\__, |___/_|\__,_| |___/\__\__,_|_|   \__\___|\__,_|
                     |___/                |___/                                                              
    
version 1.0.0

-- [start] name: Mango elysia
-- [start] env: local
-- [start] version: 1.0.0
-- [start] baseDir: /Users/macbook/Desktop/myProject/@SelfWebFarmWork/sun-elysia
-- [start] businessPath: src
-- [start] controllerPath: src/modules

🐑 Swagger UI: http://localhost:8899/swagger
🦊【Mango elysia】running at http://localhost:8899/
```

## 访问
```bash
curl http://127.0.0.1:8899/test

# Hello Word!
```
