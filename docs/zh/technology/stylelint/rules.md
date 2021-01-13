# 配置文件

配置文件名是`stylelint.config.js`
详细的配置说明可以参考：
- [stylelint官网](https://stylelint.io/user-guide/rules/)
- [GitHub stylelint](https://github.com/stylelint/stylelint)

## 规则配置格式

**`stylelint`有上百条规则，可以分为三类：**
- 用于校对风格的规则 （主要针对空格（比如说冒号附近的空格）、换行、缩进等等）
- 用于判别代码可维护性的规则 （判断在CSS选择器中是否有使用某个ID，或者在某条声明当中是否应用了!important关键词）
- 用于判断代码错误的规则 （检测错误的HEX颜色写法或者某条简写属性是否会覆盖其他的声明语句） 规则属性是一个对象，键是规则的名称，值是规则配置。每个规则配置符合下列格式之一：
- 单个值（primary option）
- 一个有两个值的数组（[primary option,secondary option]）
- null (关闭规则)

## 增加其它规则

修改`stylelint.config.js`文件，添加选项，比如：

``` js
module.exports = {  
    "extends": "stylelint-config-recommended",  
    "rules":{  
        "unit-no-unknown": false,  
        "indentation": "tab",       //缩进  
        "unit-no-unknown": true,    //禁止未知单位  
        "color-hex-case": [  
          "lower", {  
          "message": "Lowercase letters are easier to distinguish from numbers"  
          }  
        ],  
        "max-empty-lines": 2,  
        "unit-whitelist": ["em", "rem", "%", "s", "px", "upx"],  
        "number-leading-zero": null  
    }  
  }  
```
