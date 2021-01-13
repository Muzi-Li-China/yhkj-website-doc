# 安装依赖

## 依序安裝

``` bash
npm install -D stylelint
npm install -D stylelint-config-standard
npm install -D stylelint-config-prettier
npm install -D stylelint-scss
npm install -D stylelint-order
```

## 一键安装

``` bash
npm install -D stylelint stylelint-config-standard stylelint-config-prettier stylelint-scss stylelint-order
```

## 依赖说明

::: tip 提示
stylelint：运行工具  
stylelint-config-standard：推荐配置  
stylelint-config-prettier：防止与prettier规则冲突，将它放在extends数组的最后，可以覆盖prettier的配置  
stylelint-scss：scss拓展，增加支持scss语法  
stylelint-order：强制按照规定的顺序编写 css  
:::
