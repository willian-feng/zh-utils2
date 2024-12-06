## Installation
```bash
npm install zh-utils2
```

## Usage
### es6
```javascript
import zh from 'zh-utils2';

var res = zh.zh2firstChar('单车');

console.log(res);
// [ 'SJ', 'DJ', 'CJ', 'SC', 'DC', 'CC' ];
// 适用：首字母搜索过滤
```
### es5
```javascript
var zh = require("zh-utils2");

var a = zh['default'].zh2firstChar("单车");

console.log(a);
// [ 'SJ', 'DJ', 'CJ', 'SC', 'DC', 'CC' ];
// 适用：首字母搜索过滤
```
### 项目中结合 antd.Select 使用示例
```javascript
import React from 'react';
import { Select } from 'antd';
import zh from 'zh-utils2';
// ....
  <Select
    showSearch={true}
    value={value}
    onChange={this.handleChange}
    style={{ width: '200px' }}
    filterOption={(input, option) => {
      input = String(input);
      const zw = zh(option.props.children);
      const result = zw.some(s => s.indexOf(input.toUpperCase()) > -1);
      return option.props.children.toUpperCase().indexOf(input.toUpperCase()) > -1 || result;
    }}>
    // ... <Select.Option> list
  </Select>
// ...
```
