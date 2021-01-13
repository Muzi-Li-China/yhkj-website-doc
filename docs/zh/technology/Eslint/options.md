# Eslint配置文件

1. **env:** 预定义那些环境需要用到的全局变量，可用的参数是：`es6`、`broswer`、`node`等。  
    `es6`会使能所有的`ECMAScript6`的特性除了模块(这个功能在设置`ecmaVersion`版本为6的时候会自动设置)  
    `browser`会添加所有的浏览器变量比如`Windows`  
    `node`会添加所有的全局变量比如`global`  
    更多环境配置参考[Specifying Environments](https://eslint.org/docs/user-guide/configuring#specifying-environments)  

2. **extends:** 指定扩展的配置，配置支持递归扩展，支持规则的覆盖和聚合。

3. **plugins:** 配置那些我们想要Linting规则的插件。

4. **parser:** 默认ESlint使用[Espree](https://github.com/eslint/espree)作为解析器，但是一旦我们使用babel的话，我们需要用babel-eslint。

5. **parserOptions:** 当我们将默认的解析器从Espree改为babel-eslint的时候，我们需要指定parseOptions，这个是必须的。  

    **ecmaVersion:** 默认值是5，可以设置为3、5、6、7、8、9、10，用来指定使用哪一个ECMAScript版本的语法。也可以设置基于年份的JS标准，比如2015(ECMA 6) 

    **sourceType:** 如果你的代码是ECMAScript 模块写的，该字段配置为module，否则为script(默认值)  

    **ecmaFeatures：** 该对象指示你想使用的额外的语言特性  

    ``` js
    globalReturn：允许全局范围内的`return`语句
    impliedStrict：使能全局`strict`模式
    jsx：使用JSX
    ```

6. **rules:** 自定义规则，可以覆盖掉extends的配置。

7. **settings** 该字段定义的数据可以在所有的插件中共享。这样每条规则执行的时候都可以访问这里面定义的数据

**更多配置选项参考官方文档[Eslint](https://eslint.org/docs/user-guide/configuring)**

## 配置文件解析
``` js
module.exports =  {
  parser:  'babel-eslint',  // 指定ESLint解析器
  parserOptions: {
    ecmaVersion: 2015, // 指定您想要的ECMAScript语法版本 use: 2015 => (ES6)
    sourceType:  'module',  // 允许使用入口
    ecmaFeatures: {
      jsx: true, // 使用JSX
      impliedStrict: true // 启用全局严格模式
    }
  },
  extends:  [
    'airbnb',  // 使用airbnb，它包括react规则(eslint-plugin-react/eslint-plugin-jsx-a11y)
    'plugin:promise/recommended',
    // 'prettier', // 使用prettier，它可以禁用所有与prettier冲突的规则
    // 'prettier/react' // 使用prettier/react来代替pretty react语法
  ],
  settings: {
    'import/resolver': { // 该配置被eslint-import-resolver-webpack使用
      webpack: {
        config: './webpack/webpack-common-config.js'
      }
    },
  },
  env: {
    browser: true // 启用所有浏览器全局变量
  },
  'plugins': ['react-hooks', 'promise'], // ['prettier', 'react-hooks']
  rules:  {
    // 指定ESLint规则的位置。可以用来覆盖从扩展的配置中指定的规则
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    "react-hooks/rules-of-hooks": "error",
    "semi": ["error", "never"],
    "react/jsx-one-expression-per-line": 0,
    /**
     * @description eslint-plugin-prettier规则
     */
    // 'prettier/prettier': [
    //   'error', {
    //     'singleQuote': true,
    //     'semi': false
    //   }
    // ]
  },
};
```
