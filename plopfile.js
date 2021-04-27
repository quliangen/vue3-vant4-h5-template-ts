// 组件生成器
const useComp = require('./plop/generator/cmp');
const useView = require('./plop/generator/view');

// 页面生成器

module.exports = plop => {
  useComp(plop);
  useView(plop);
};
