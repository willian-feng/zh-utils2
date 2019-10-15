### 使用示例
```javascript es6
import zh from 'zh-utils2';

var res = zh.zh2firstChar('单车');

console.log(res);
// [ 'SJ', 'DJ', 'CJ', 'SC', 'DC', 'CC' ];
// 适用：首字母搜索过滤
```

```javascript es5
var zh = require("zh-utils2");

var a = zh['default'].zh2firstChar("单车");

console.log(a);
// [ 'SJ', 'DJ', 'CJ', 'SC', 'DC', 'CC' ];
// 适用：首字母搜索过滤
```