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
::: tip 提示
rules 优先级大于 extends
:::

## CSS书写顺序
::: tip 提示
浏览器是根据 CSS 书写顺序将之按照 DOM 树的结构分布渲染样式，然后开始遍历每个树结点的 CSS 样式进行解析，在解析过程中，一旦发现某个元素的定位变化影响布局，则需要倒回去重新渲染。正确的书写顺序能让渲染引擎更高效的工作。
:::

1. 影响文档流的属性
```
比如 position、left、top、right、bottom、z-index、display、float、clear、overflow 等
```
2. 自身盒模型的属性
```
比如 margin、border、 padding、width、height 等
```
3. 文字相关属性
```
比如 font、 line-height、text-align、text-indent、vertical-align 等
```
4. 外观相关相关属性
```
比如 color、 background 等
```
5. CSS3新增属性
```
比如 transition、 transform、animation 等
```
6. 其他
```
比如 opacity、box-shadow、cursor 等
```
