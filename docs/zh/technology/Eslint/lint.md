# 让优美的代码深入到骨髓里~

## Vscode
### 保存代码的时候自动格式化

1. 安装Eslint插件

2. Vscode配置：
    - editor.formatOnSave置为false，以防默认的文件格式化配置和Eslint和Prettier冲突
    - eslint.autoFixOnSave置为true，这样当我们每次保存文件的时候就可以自动fix文件的错误格式。

## Lint-staged
::: tip
[Lint-staged](https://github.com/okonet/lint-staged)帮助你在暂存文件的时候能够让错误格式代码不会提交到你分支。
:::

因为提交代码前的检查是最后一个管控代码质量的一个环节，所以在提交代码之前进行lint检查意义重大。这样可以确保没有错误的语法和代码样式被提交到仓库上。但是在整个项目上执行`Lint`进程会很低效，所以最好的做法就是检查那个被改动的文件。而`Lint-staged`就是做这个的。  
根据上面我们提供的生态圈依赖包，在`package.json`中配置该字段：

``` js
"lint-staged": {
  "**/*.{tsx,ts}": [ // 这里的文件后缀可以修改成自己需要的文件后缀
    "prettier-eslint --write",
    "git add"
  ]
}
```

## Husky
为了让`lint-staged`可以在`change`被`staged`之前执行，我们这时候需要借助`git`的钩子功能，而提供钩子功能的社区解决方案就是[husky](https://github.com/typicode/husky)，该工具提供了`git`在多个阶段前执行的操作，比如我们这次要在预提交的时候进行`Lint`检查，配置如下：

``` js
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
}
```
这样每次commit的时候会执行lint操作，如之前所说，prettier-eslint-cli会将代码prettier一遍后再eslint --fix，如果没有错误，那么就会直接执行git add，否则报错退出。

## EditorConfig
因为并不是所有的人都使用VS code，所以为了在同样的项目下保持一致，比如tab的宽度或者行尾要不要有分号，我们可以使用`.editorconfig`来统一这些配置。

下面是模板配置里面推荐的editorconfig的配置:

``` shell

# 统一编码样式
# 告诉EditorConfig插件，这是根文件，不用继续往上查找
root = true 

[*] # 匹配全部文件
charset=utf-8   # 设置字符集
end_of_line=lf  # 结尾换行符，可选"lf"、"cr"、"crlf"
insert_final_newline=false  # 在文件结尾插入新行
indent_style=space  # 缩进风格，可选"space"、"tab"
indent_size=2   # 缩进的空格数

[*.yml]
indent_style = space
indent_size = 2

[*.md]
trim_trailing_whitespace = false  # 删除一行中的前后空格

```