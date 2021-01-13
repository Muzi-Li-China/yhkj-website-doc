# 安装

使用`yarn`安装
``` bash
yarn add prettier --dev --exact
# or globally
yarn global add prettier
```
或者使用`npm`安装
``` bash
npm install --save-dev --save-exact prettier
# or globally
npm install --global prettier
```
::: warning
由于我们会在补丁包中引入样式上的更改，所以我们推荐在你的<Badge text="package.json" vertical="middle"/>文件中明确引入的<Badge text="Prettier" vertical="middle"/>的版本号。
:::
