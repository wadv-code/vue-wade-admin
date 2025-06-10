<div align="center">
  <a href="https://github.com/wadv-code/vue-wade-admin">
    <img alt="WadeAdmin Logo" width="215" src="http://nm.hzwima.com:8100/docs/dog.svg">
  </a>
  <br>
  <br>

<!-- [![license](http://nm.hzwima.com:8100/docs/dog.svg)](LICENSE) -->

  <h1>Vue Wade Admin</h1>
</div>

<!-- [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=wadejs_vue-wade-admin&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=wadejs_vue-wade-admin) ![codeql](https://github.com/wadejs/vue-wade-admin/actions/workflows/codeql.yml/badge.svg) ![build](https://github.com/wadejs/vue-wade-admin/actions/workflows/build.yml/badge.svg) ![ci](https://github.com/wadejs/vue-wade-admin/actions/workflows/ci.yml/badge.svg) ![deploy](https://github.com/wadejs/vue-wade-admin/actions/workflows/deploy.yml/badge.svg) -->

## 简介

Vue Wade Admin 是 Wadv Admin 的升级版本。作为一个免费开源的中后台模板，它采用了最新的 Vue 3、RsBuild、Turborepo、TypeScript、BiomeJs、NestJs 等主流技术开发，开箱即用，可用于中后台前端开发，也适合学习参考。

## 升级提示

该版本为最新版本 `2.0`，与其他版本不兼容，如果你是新项目，建议使用最新版本。如果你想查看旧版本，请使用 [v1](https://github.com/wadv-code/wadv-admin)

## 特性

- **最新技术栈**：使用 Vue3/RsBuild/BiomeJs/Turborepo/NestJs 等前端前沿技术开发
- **TypeScript**：应用程序级 JavaScript 的语言
- **RsBuild**：Webpack最新构建工具 [RsBuild](https://rsbuild.rs/zh/)
- **BiomeJs**：高性能 linter 检查及格式化工具 [BiomeJs](https://biomejs.dev/zh-cn/)
- **Turborepo**：专为‌ Monorepo 而设计，显著加速 Monorepo 的构建 [Turborepo](https://turborepo.com/docs)
- **主题**：提供多套主题色彩，可配置自定义主题
- **国际化**：内置完善的国际化方案
- **权限**：内置完善的动态路由权限生成方案

## 预览

- [Wade Admin](https://wade.pro/) - 完整版中文站点

测试账号：wade/123456

<!-- <div align="center">
  <img alt="WadeAdmin Logo" width="100%" src="https://anncwb.github.io/anncwb/images/preview1.png">
  <img alt="WadeAdmin Logo" width="100%" src="https://anncwb.github.io/anncwb/images/preview2.png">
  <img alt="WadeAdmin Logo" width="100%" src="https://anncwb.github.io/anncwb/images/preview3.png">
</div> -->

### 使用 Gitpod

在 Gitpod（适用于 GitHub 的免费在线开发环境）中打开项目，并立即开始编码。

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/wadv-code/vue-wade-admin)

## 文档

[文档地址](https://doc.wade.pro/)

# 快速开始

## 前置准备

::: info 环境要求

在启动项目前，你需要确保你的环境满足以下要求：

- [Node.js](https://nodejs.org/en) 20 及以上版本，推荐使用 [fnm](https://github.com/Schniz/fnm) 或者 [nvm](https://github.com/nvm-sh/nvm) 进行版本管理。
<!-- - [Git](https://git-scm.com/) 任意版本。 -->

验证你的环境是否满足以上要求，你可以通过以下命令查看版本：

```bash
# 出现相应 node LTS版本即可
node -v
```

:::

## 安装使用

1. 获取项目代码

```bash
git clone https://github.com/wadv-code/vue-wade-admin.git
```

2.安装依赖

```bash
# 进入项目目录
cd vue-wade-admin

# 使用项目指定的pnpm版本进行依赖安装
corepack enable

# 安装依赖
pnpm install

# 重新安装依赖
pnpm reinstall

# 卸载依赖
pnpm clean
```

::: tip 注意

- 项目只支持使用 `pnpm` 进行依赖安装，默认会使用 `corepack` 来安装指定版本的 `pnpm`。:
- 如果你的网络环境无法访问npm源，你可以设置系统的环境变量`COREPACK_REGISTRY=https://registry.npmmirror.com`，然后再执行`pnpm install`。
- 如果你不想使用`corepack`，你需要禁用`corepack`，然后使用你自己的`pnpm`进行安装。

:::

3.多个运行

```bash
pnpm dev
```

4.单个运行

```bash
pnpm single
```

5.全部运行

```bash
pnpm dev:all
```

6.多个打包

```bash
pnpm build
```

7.单个打包

```bash
pnpm build:single
```

8.全部打包

```bash
pnpm build:all
```

9.打包分析（结束后手动前往dist包查看分析html）

```bash
pnpm build:analyze
```

10.后端API（依赖mysql，选装后api中配置mysql账户密码）

```bash
pnpm api
```

此时，你会看到类似如下的输出，选择你需要运行的项目：

多个

```bash
pnpm dev
│
◆  Pick multiple projects to run [dev]:
│  ■ @wade/api
│  □ @wade/mobile
│  □ @wade/web
│  ■ @wade/backend
│  □ @wade/docs
└
```

单个

```bash
pnpm single
│
◆  Pick multiple projects to run [single]:
│  ● @wade/api
│  ○ @wade/mobile
│  ○ @wade/web
│  ○ @wade/backend
│  ○ @wade/docs
└
```

## 项目说明

- `@wade/api` 后端api工程
- `@wade/mobile` 移动web端
- `@wade/web` 前台web端
- `@wade/backend` 后台web端
- `@wade/docs` 项目文档工程

现在，你可以在浏览器访问 `http://localhost:3000 (对应端口)` 查看项目。

## 更新日志

[CHANGELOG](https://github.com/wadv-code/vue-wade-admin/releases)

<!-- ## 如何贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/wadv-code/vue-wade-admin/issues/new/choose) 或者提交一个 Pull Request。

**Pull Request 流程：**

1. Fork 代码
2. 创建自己的分支：`git checkout -b feature/xxxx`
3. 提交你的修改：`git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支：`git push origin feature/xxxx`
5. 提交 `pull request` -->

<!-- ## Git 贡献提交规范

参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `ci` 持续集成
- `types` 类型定义文件更改 -->

## 浏览器支持

本地开发推荐使用 `Chrome 80+` 浏览器

支持现代浏览器，不支持 IE

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :-: | :-: | :-: | :-: |
| last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 维护者

[@Wade](https://github.com/wadv-code)
