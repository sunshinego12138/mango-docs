---
page: true
title: 简介
---

<script setup>
  import Button from '@theme/components/button.vue'
</script>

<Button />


## 前置准备
:::info 环境要求
开始之前建议将`Bun`更新到最新版本
:::

::: tip 前置知识
本框架基于[Elysia](https://elysiajs.com/)编写，需要对它有一定的了解
:::
```bash 
bun upgrade 
```

## 启动项目
::: code-group
```bash [github]
git clone xxx
```

```bash [gitee]
暂不支持
```
:::

::: danger 注意
注意存放代码的目录及所有父级目录最好不要存在中文、韩文、日文以及空格，否则可能会出现预料外的问题。
:::


## 安装依赖
```bash
# 进入项目文件夹
cd mango

# 安装依赖
bun install
```

:::tip 注意
- 如果使用bun安装依赖失败，请更换镜像源
:::

## 运行项目
执行以下命令运行项目:
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

:::info 注意
拉取下来的案例使用的是sqlite作为prisma的案例，可根据自己的需要进行更改
:::