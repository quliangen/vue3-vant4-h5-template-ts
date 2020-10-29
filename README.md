# vue3-vant3-h5-template-ts [![Build Status](https://travis-ci.org/quliangen/vue3-vant3-h5-template-ts.svg?branch=master)](https://travis-ci.org/quliangen/vue3-vant3-h5-template-ts)
### 项目预览地址：https://quliangen.github.io/vue3-vant3-h5-template-ts/(h5项目请自行f12)
## 集成技术栈：
1. vue3 + vue-router4 + vuex4
2. vant-ui3(按需import组件)
3. axios(0.20.0) + 封装示例 + devServer配置示例
4. pug
5. less
6. h5 px 2 viewPort
7. eslint + prettier （风格校验 + 一键修复）
8. travis CI push代码自行构建gh-pages
9. 页面demo：基于vant-demo/base 购物车及详情页


## Feature:
1. 模板项目正确使用姿势文档（共享git仓）
2. 集成：定制主题
3. styleLint
4. changLog

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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
