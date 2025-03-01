---
page: true
title: 快速开始 
---

# 快速开始

## 框架入口
调用MongoCore.init方法初始化项目

项目根目录下的index.ts就是本项目的入口文件

## 参数
```ts
import MongoCore from '@mango/core'

MongoCore.init({
  businessPath: 'src',
  controllerPath: 'modules',
  name: 'Mango elysia',
  version: '1.0.0',
  swagger: {},
}).listen(8899)

```
| 属性               | 类型                                       | 默认值                       | 描述                              |
|--------------------|------------------------------------------|------------------------------|-----------------------------------|
| `name`             | `string`                                 | `Elysia SunShine`            | 应用名称                          |
| `version`          | `string`                                 | `v1.0.0`                     | 应用版本                          |
| `baseDir`         | `string`                                 | 项目根目录                   | 项目基础路径, 无需填写自动获取   |
| `businessPath`     | `string`                                 | `src`                        | 业务路径                          |
| `controllerPath`   | `string`                                 | `modules`                    | 存放Elysia控制器的路径,会自动识别该文件夹下所有的index.ts文件中被Controller装饰的类作为控制器           |
| `cors`             | `boolean`                                | 默认不开启                           | 是否开启cors                     |
| `swagger`          | `ElysiaSwaggerConfig`     | 默认不开启                            | 是否启用swagger                  |
| `logger`           | `LogesticOptions`      | 默认不开启                            | 是否启用日志，有三种样式选择     |
| `ElysiaOption`           | `ElysiaConfig<string, false>`      | -                            | Elysia的配置     |