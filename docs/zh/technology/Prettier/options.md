# 配置文件

## 如何自定义配置
`Prettier`提供了一套默认的配置，有三种方法可以做到：
1. `prettierrc` 文件
2. `prettier.config.js` 文件
3. `package.json` 中配置prettier属性

Prettier会检查配置文件并自动读取文件中的配置，我们只需要选一种方法配置就好了。  
在项目根目录添加配置文件`prettier.config.js` 如下：

``` js
{
  "printWidth": 140, // int，达到该宽度即换行
  "semi": false,    //  bool，在语句末尾添加分号
  "singleQuote": true,  // bool，使用单引号而非双引号
  "trailingComma": "none",  //  ‘none’/‘es5’/‘all’，在任何可能的多行中输入尾逗号
  "arrowParens": "avoid"    // 	(x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
}
```
## 保存时自动格式化代码

在`.vscode/settings.json`中添加如下代码：
```
"editor.formatOnSave": false
```

