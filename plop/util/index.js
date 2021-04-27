const fs = require('fs');
module.exports = function getDirs(path, limitArr = []) {
  const dirs = fs.readdirSync(path);
  return dirs.filter(item => {
    return !limitArr.some(limit => {
      return item.includes(limit);
    });
  });
};
