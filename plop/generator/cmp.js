const getDirs = require('../util/index.js');
const prefix = '🦋';
// 组件配置
const conf = {
  //定义生成文件明恒
  description: 'VUE基础组件生成器',
  // cmd交互
  prompts: [
    {
      type: 'input', // 交互类型
      name: 'name', // 参数名称
      prefix: prefix, // 命令行提示前缀
      message: '请输入组件名称', // 交互提示
      default: 'PlopCmp',
    },
    {
      type: 'list',
      name: 'path',
      prefix: prefix,
      message: '请选择组件创建路径：',
      choices: ['src/components', ...getDirs('src/views', ['.'])],
      filter: function(val) {
        return val === 'src/components' ? (val = '') : '/' + val + '/';
      },
    },
    {
      when: function(answers) {
        return answers.path;
      },
      type: 'list',
      name: 'childPath',
      prefix: prefix,
      message: '请选择组件创建子路径：',
      choices: function(answers) {
        return [...getDirs(`src/views/${answers.path}`, ['.'])];
      },
      filter: function(val) {
        return (val = '/' + val);
      },
    },
    {
      type: 'list',
      name: 'tpl',
      prefix: prefix,
      message: '选择copy组件模板：',
      choices: [...getDirs('plop/templates/components')],
    },
  ],
  actions(data) {
    const { name, childPath, tpl } = data;
    let { path } = data;
    // 重置路径
    if (path) path = `src/views/${path + childPath}/components`;
    else path = 'src/components';
    return [
      {
        type: 'add', //代表添加文件
        path: `${path}/${name}/index.vue`, //生成文件的地址
        templateFile: `plop/templates/components/${tpl}`, //添加的模板
      },
    ];
  },
};

module.exports = plop => {
  plop.setGenerator('cmp', conf);
};
