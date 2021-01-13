# 规则参考列表（中文）
> 2021-01-12 翻译[官网](https://stylelint.io/user-guide/rules/list)

## Possible errors 可能的错误

**Color 颜色**
- `color-no-invalid-hex:` 禁止无效的十六进制颜色

**Font family 字体系列**
- `font-family-no-duplicate-names:` 禁止重复的字体族名称
- `font-family-no-missing-generic-family-keyword:` 不允许在字体族名称列表中丢失泛型族

**Function 函数**
- `function-calc-no-unspaced-operator:` 禁止在 calc 函数内的运算符间省略空格
- `function-linear-gradient-no-nonstandard-direction:` 禁止在 linear-gradient() 内使用不符合标准语法的值

**String 字符串**
- `string-no-newline:` 不允许字符串（非转义）换行

**Unit**
- `unit-no-unknown:` 不允许未知的单位

**Property 属性**
- `property-no-unknown:` 不允许未知属性

**Keyframe declaration**
- `keyframe-declaration-no-important:` 不允许!important在关键帧声明

**Declaration block 声明块**
- `declaration-block-no-duplicate-properties:` 禁止在声明块内出现重复属性
- `declaration-block-no-shorthand-property-overrides:` 禁止使用速记属性重写相关属性

**Block**
- `block-no-empty:` 不允许空块

**Selector**
- `selector-pseudo-class-no-unknown:` 不允许未知的伪类选择器
- `selector-pseudo-element-no-unknown:` 不允许未知的伪元素选择器
- `selector-type-no-unknown:` 不允许未知类型选择器

**Media feature**
- `media-feature-name-no-unknown:` 不允许未知的媒体功能的名字

**At-rule**
- `at-rule-no-unknown:` 不允许at-rules不明

**Comment**
- `comment-no-empty:` 不允许空注释

**General / Sheet**
- `no-descending-specificity:` 不允许选择器之后覆盖选择器的低特异性更高的特异性
- `no-duplicate-at-import-rules:` 在样式表中禁止重复的@import规则
- `no-duplicate-selectors:` 不允许重复的选择器
- `no-empty-source:` 不允许空的来源
- `no-extra-semicolons:` 不允许额外的分号
- `no-invalid-double-slash-comments:` 不允许双斜杠注释(/ /…)不支持的CSS

## Limit language features 限制语言特性

**color 颜色**
- `color-named:` 在特定的情况下不允许使用命名的颜色值
- `color-no-hex:` 禁止使用十六进制的颜色

**Function 函数**
- `function-blacklist:` 指定一个不允许使用函数的黑名单
- `function-url-no-scheme-relative:` 不允许文档相对的URL
- `function-url-scheme-blacklist:` 指定允许URL方案的黑名单
- `function-url-scheme-whitelist:` 指定允许URL方案的白名单
- `function-whitelist:` 指定允许的功能的白名单

**Keyframes**
- `keyframes-name-pattern:` 为关键帧名称指定一个模式

**Number 数值**
- `number-max-precision:` 限制数值的小数位数

**Time**
- `time-min-milliseconds:` 指定时间值的最小毫秒数

**Unit**
- `unit-blacklist:` 指定不允许使用单位的黑名单
- `unit-whitelist:`  指定允许单位的白名单

**Shorthand property**
- `shorthand-property-no-redundant-values:`  不允许在简写属性冗余值

**Value 值**
- `value-no-vendor-prefix:`  禁止值添加供应商前缀值

**Custom property 自定义属性**
- `custom-property-pattern:`  指定自定义属性的模式

**Property 属性**
- `property-blacklist:`  指定一个不允许使用属性的黑名单
- `property-no-vendor-prefix:`  禁止属性添加供应商前缀
- `property-whitelist:`  指定一个允许使用属性的白名单

**Declaration 声明**
- `declaration-block-no-redundant-longhand-properties:`  不允许手写属性,可以组合成一个简写属性
- `declaration-no-important:`  不允许!important声明
- `declaration-property-unit-blacklist:`  指定一个黑名单内不允许声明属性
- `declaration-property-unit-whitelist:`  指定一个白名单内允许声明属性
- `declaration-property-value-blacklist:` 指定一个黑名单,不允许在声明属性和值对
- `declaration-property-value-whitelist:`  指定一个允许属性和值对声明的白名单

**Declaration block 声明块**
- `declaration-block-single-line-max-declarations:`  在单行声明块中限制声明的数量

**Selector 选择器**
- `selector-attribute-operator-blacklist:`  指定一个黑名单不允许属性的操作符
- `selector-attribute-operator-whitelist:`  指定一个属性允许运营商的白名单
- `selector-class-pattern:`  指定类选择器的模式（模式指的是正则表达式）
- `selector-combinator-blacklist:`  指定一个不允许的组合符黑名单
- `selector-combinator-whitelist:`  指定允许的组合符白名单
- `selector-id-pattern:`  指定id选择器的模式
- `selector-max-attribute:`  限制选择器中属性选择器的数量
- `selector-max-class:`  限制选择器中类的数量
- `selector-max-combinators:`  限制选择器中选择符的数量
- `selector-max-compound-selectors:`  在一个选择器里面限制复合选择器的数量
- `selector-max-empty-lines:`  限制内相邻的空行选择器的数量
- `selector-max-id:`  限制一个选择器中ID选择器的数量
- `selector-max-pseudo-class:`  限制选择器中伪类的数量
- `selector-max-specificity:`  限制选择器的特异性
- `selector-max-type:`  限制选择器中的类型数目
- `selector-max-universal:`  限制选择器中通用选择器的数量
- `selector-nested-pattern:`  指定一个模式选择器的规则嵌套规则
- `selector-no-qualifying-type:`  不允许符合条件的选择器的类型
- `selector-no-vendor-prefix:`  不允许选择器的前缀
- `selector-pseudo-class-blacklist:`  指定一个黑名单禁止伪类选择器
- `selector-pseudo-class-whitelist:`  指定一个白名单禁止伪类选择器
- `selector-pseudo-element-blacklist:`  指定不允许伪元素选择器的黑名单
- `selector-pseudo-element-whitelist:`  指定允许的伪元素选择器的白名单

**Media feature 媒体特性**
- `media-feature-name-blacklist:`  指定不允许的媒体特性名称黑名单
- `media-feature-name-no-vendor-prefix:`  禁止媒体特性属性名添加供应商前缀
- `media-feature-name-value-whitelist:`  指定允许的媒体特性名称和值对的白名单
- `media-feature-name-whitelist:`  指定允许的媒体特性名的白名单

**Custom media 自定义媒体**
- `custom-media-pattern:`  指定自定义媒体查询的名称模式

**At-rule AT规则**
- `at-rule-blacklist:`  不允许at-rules，指定一个黑名单。
- `at-rule-no-vendor-prefix:`  禁止AT规则 添加供应商前缀
- `at-rule-whitelist:` 指定允许at-rules的白名单

**Comment 注释**
- `comment-word-blacklist:`  指定一个黑名单内不允许的话评论

**General / Sheet**
- `max-nesting-depth:`  限制的深度嵌套
- `no-unknown-animations:`  不允许动画名称不对应@keyframes声明

## Stylistic issues 格式上的问题

**颜色**
- `color-hex-case:`  指定十六进制颜色的大小写
- `color-hex-length:`  指定十六进制颜色的长度

**Font family 字体系列**
- `font-family-name-quotes:`  指定字体系列不应用于单双引号内

**Font weight 字体粗细**
- `font-weight-notation:`  要求一致的数值或命名作为 font-weight 的值

**Function 函数**
- `function-comma-newline-after:`  在函数的逗号后指定一个换行符或禁止留有空格
- `function-comma-newline-before:`  在函数的逗号前指定一个换行符或禁止留有空格
- `function-comma-space-after:`  在函数的逗号后指定一个空格或禁止留有空格
- `function-comma-space-before:`  在函数的逗号前指定一个空格或禁止留有空格
- `function-max-empty-lines:`  限制函数内相邻空行数(可自动修复)
- `function-name-case:`  指定函数名的小写或大写(可自动修复)
- `function-parentheses-newline-inside:`  在函数括号内指定一个换行符或禁止留有空格
- `function-parentheses-space-inside:`  在函数括号内指定一个空格或禁止留有空格
- `function-url-quotes:`  为urls指定单引或双引号
- `function-whitespace-after:`  在函数后指定一个空格或禁止留有空格

**Number 数值**
- `number-leading-zero:`  要求或不允许数值小于 1 的数字前面添加 0
- `number-no-trailing-zeros:`  禁止在数值内尾随 0

**String 字符串**
- `string-quotes:`  为字符串指定单引或双引号

**Length 长度**
- `length-zero-no-unit:`  禁止单位零长度

**Unit 单位**
- `unit-case:`  指定大写或小写的单位

**Value 值**
- `value-keyword-case:`  指定大写或小写关键字的值

**Value list 值列表**
- `value-list-comma-newline-after:`  在值列表的逗号后指定一个换行符或禁止留有空格
- `value-list-comma-newline-before:`  在值列表的逗号前指定一个换行符或禁止留有空格
- `value-list-comma-space-after:`  在值列表的逗号后指定一个空格或禁止留有空格
- `value-list-comma-space-before:`  在值列表的逗号前指定一个空格或禁止留有空格
- `value-list-max-empty-lines:`  限制相邻的数量值列表内空行

**Custom property 自定义属性**
- `custom-property-empty-line-before:`  自定义属性之前equire或不允许空行

**Property 属性**
- `property-case:`  为属性指定小写或大写

**Declaration**
- `declaration-bang-space-after:`  bang声明之后需要一个空格或者不允许空白
- `declaration-bang-space-before:`  bang声明之前需要一个空格或者不允许空白
- `declaration-colon-newline-after:`  冒号后的声明需要一个换行符或不允许空白
- `declaration-colon-space-after:`  冒号后的声明需要一个空格或不允许空白
- `declaration-colon-space-before:`  冒号之前的声明需要一个空格或不允许空白
- `declaration-empty-line-before:`  要求声明前不允许空一行

**Declaration block**
- `declaration-block-semicolon-newline-after:`  要求一个换行符或不允许空白块分号后
- `declaration-block-semicolon-newline-before:`  要求一个换行符或不允许空白块分号之前的声明
- `declaration-block-semicolon-space-after:`  要求一个空间或不允许空白块分号后的声明
- `declaration-block-semicolon-space-before:`  要求一个空间或不允许空白块分号之前的声明
- `declaration-block-trailing-semicolon:`  要求或不允许在声明块后面的分号

**Block 块**
- `block-closing-brace-empty-line-before:`  要求或不允许关闭括号前空一行
- `block-closing-brace-newline-after:`  在块的右大括号后指定一个换行符或禁止留有空格
- `block-closing-brace-newline-before:`  在块的右大括号前指定一个换行符或禁止留有空格
- `block-closing-brace-space-after:`  在块的右大括号后指定一个空格或禁止留有空格
- `block-closing-brace-space-before:`  在块的右大括号前指定一个空格或禁止留有空格
- `block-opening-brace-newline-after:`  在块的左大括号后制定一个换行符
- `block-opening-brace-newline-before:`  在块的左大括号前指定一个换行符或禁止留有空格
- `block-opening-brace-space-after:`  在块的左大括号后指定一个空格或禁止留有空格
- `block-opening-brace-space-before:`  在块的左大括号前指定一个空格或禁止留有空格

**Selector 选择器**
- `selector-attribute-brackets-space-inside:`  在括号里的属性选择器需要一个空格或者不允许空白
- `selector-attribute-operator-space-after:`  需要一个空间或不允许空格后运营商在属性选择器
- `selector-attribute-operator-space-before:`  需要一个空间或不允许空格内运营商之前属性选择器
- `selector-attribute-quotes:`  需要或不允许引用属性值
- `selector-combinator-space-after:`  在复合选择器之后要求或不允许留有一个空格
- `selector-combinator-space-before:`  在复合选择器之前要求或不允许留有一个空格
- `selector-descendant-combinator-no-non-space:`  不允许的字符的后代组合子选择器进行技术改造
- `selector-pseudo-class-case:`  为伪类选择器指定小写或大写
- `selector-pseudo-class-parentheses-space-inside:`  需要一个空格或不允许空格在括号里面的伪类选择器
- `selector-pseudo-element-case:`  为伪元素选择器指定小写或大写
- `selector-pseudo-element-colon-notation:`  为适用的伪元素指定单引号或双冒号符号
- `selector-type-case:`  指定小写或大写类型选择器

**Selector list 选择器列表**
- `selector-list-comma-newline-after:`  在选择器列表的逗号后指定一个换行符或禁止留有空格
- `selector-list-comma-newline-before:`  在选择器列表的逗号前指定一个换行符或禁止留有空格
- `selector-list-comma-space-after:`  在选择器列表的逗号后指定一个空格或禁止留有空格
- `selector-list-comma-space-before:`  在选择器列表的逗号前指定一个空格或禁止留有空格

**Rule 规则**
- `rule-empty-line-before:`  不允许rules前空一行

**Media feature 媒体特性**
- `media-feature-colon-space-after:`  在媒体特性的冒号后指定一个空格或禁止留有空格
- `media-feature-colon-space-before:`  在媒体特性的冒号前指定一个空格或禁止留有空格
- `media-feature-name-case:`  为媒体特性名称指定小写或大写
- `media-feature-parentheses-space-inside:`  需要一个空间或不允许空格在括号里面的媒体功能
- `media-feature-range-operator-space-after:`  需要一个空间或不允许空白范围运算符后媒体的特性
- `media-feature-range-operator-space-before:`  之前需要一个空间或不允许空格符范围在媒体功能

**Media query list 媒体查询列表**
- `media-query-list-comma-newline-after:`  需要一个换行符或不允许空格后媒体查询的逗号分隔列表
- `media-query-list-comma-newline-before:`  需要一个换行符或不允许空格之前媒体查询的逗号分隔列表
- `media-query-list-comma-space-after:`  需要一个空间或不允许空格后媒体查询的逗号分隔列表
- `media-query-list-comma-space-before:` 需要一个空间或不允许空格之前媒体查询的逗号分隔列表

**At-rule AT规则**
- `at-rule-empty-line-before:`  在 AT规则 前要求或不允许留有空行
- `at-rule-name-case:`  指定at-rules小写或大写的名字
- `at-rule-name-newline-after:`  at-rule名称后需要一个换行符
- `at-rule-name-space-after:`  需要一个空格后at-rule名称
- `at-rule-semicolon-newline-after:`  需要一个换行符之后at-rules的分号
- `at-rule-semicolon-space-before:`  需要一个空格之后at-rules的分号

**Comment 注释**
- `comment-empty-line-before:`  要求或不允许注释前面留有一个空格
- `comment-whitespace-inside:`  要求或不允许注释内留有一个空格

**General / Sheet 常用样式**
- `indentation:`  指定缩进
- `linebreaks:`  指定unix或windows的换行符(可自动修复)
- `max-empty-lines:`  限制相邻的空行数
- `max-line-length:`  限制每行的长度
- `no-eol-whitespace:`  禁止行尾留有空白
- `no-missing-end-of-source-newline:`  不允许丢失end-of-source换行
- `no-empty-first-line:`  禁止首行为空。(Autofixable)

