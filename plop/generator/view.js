const getDirs = require('../util/index.js');
const prefix = '🐯';

// 页面配置
const conf = {
  //定义生成文件明恒
  description: 'VUE页面生成器',
  // cmd交互
  prompts: [
    {
      type: 'input', // 交互类型
      name: 'name', // 参数名称
      prefix: prefix,
      message: '请输入页面名称', // 交互提示
      default: 'my-page',
    },
    {
      type: 'list',
      name: 'path',
      prefix: prefix,
      message: '请选择页面创建路径：',
      choices: ['src/views', ...getDirs('src/views', ['.', 'base', 'template'])],
    },
    {
      type: 'list',
      name: 'tpl',
      prefix: prefix,
      message: '请选择copy页面模板：',
      choices: [...getDirs('plop/templates/views')],
    },
  ],
  actions(data) {
    const { name, tpl } = data;
    let { path } = data;
    // 重置路径
    if (path === 'src/views') path = '';
    path = 'src/views/' + path + '/';

    return [
      {
        type: 'add', //代表添加文件
        path: `${path}${name}/index.vue`, //生成文件的地址
        templateFile: `plop/templates/views/${tpl}`, //添加的模板
      },
    ];
  },
};

module.exports = plop => {
  plop.setGenerator('view', conf);
};
