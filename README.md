# vue3-vant3-h5-template-ts [![Build Status](https://travis-ci.org/quliangen/vue3-vant3-h5-template-ts.svg?branch=master)](https://travis-ci.org/quliangen/vue3-vant3-h5-template-ts)
### 预览地址(h5项目请自行f12)：https://quliangen.github.io/vue3-vant3-h5-template-ts/
## Features：
1. vue3 + vue-router4 + vuex4
2. vant-ui3(按需import组件)
3. axios(0.20.0) + 封装示例 + devServer配置示例
4. pug
5. less
6. h5 px 2 viewPort
7. eslint + prettier （风格校验 + 一键修复）
8. travis CI push代码自行构建gh-pages
9. 页面demo：基于vant-demo/base 购物车及详情页
10. 集成：[plop](https://plopjs.com/documentation/)


## RoadMap:
1. styleLint
2. changLog
3. 定制主题

## 配置项目本地服务代理设置(⭐️⭐️⭐️)
+ 配置项目服务器：复制.env.development.local.demo文件并重命名为：.env.development.local，根据实际需要配置 VUE_APP_BASE_API，具体配置看.local文件内的注释说明， .local为本地文件已添加gitignore，此项必须配置否则yarn serve找不到配置文件

## Project setup
```
yarn
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Run plop create components
```
yarn plop:cmp
```

### Run plop create view
```
yarn plop:view
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 模板项目正确使用姿势：

> 说明：此方法适合小微团队，有多个相同技术栈子项目的开发场景。

> 目标：利用模板项目统一管理多个子项目技术栈。

> 适用： 中后台项目、H5项目

> 注意：此方法适用git共享仓，模板项目可向子项目merge，子项目不可pull到模板项目污染模板。

> Tips: 说了这么多此方法其实就是人肉手动版的github fork。

具体步骤：
1. 先行体验并查阅本项目技术栈是否适合贵司业务及技术栈
2. 方法:
  + 拉取项目到本地（修改为贵司模板后）推送到私有git/gitLab仓
  + 创建新的H5项目时，拉取贵司模板到本地，修改git remote origin源为template，添加子项目私有仓为origin，推送到子项目仓。
  + 后续依赖包升级、基础框架升级、公共模块开发等，在模板项目中开发后，子项目中 git pull template 分支名称，可同步模板项目修改到子项目。
