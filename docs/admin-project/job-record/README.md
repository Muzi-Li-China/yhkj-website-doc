---
title: 工作日志模块
sidebar: auto
sidebarDepth: 2
---
## 使用范围
> 用于总部办公人员，记录每天工作情况

用到的组件
标签页：Tabs
## 业务逻辑

### 未提交的日志

#### 新增
新增按钮，弹出工作日志填写窗口

![](/images/job-record/add_window.png)

**在窗口中：**
- **姓名，部门，岗位，** 在登陆时从后端自动获取
- **日期** 只能选择今日之前的日期
- **分类** 下拉选项，每个人都有自己的分类，有一个添加按钮
- **工时** 数值，步长为0.5
- **性质** 工作内容的性质
    - 日常态工作
    - 周常态工作
    - 月常态工作
    - 季常态工作
    - 年常态工作
    - 非常态工作
- **等级** 工作的等级程度
    - 重要/紧急
    - 重要/不紧急
    - 不重要/紧急
    - 不重要/不紧急
- **进展** 工作进展情况
    - 完成
    - 进行中
    - 暂停
- **配合** 完成工作是否需要配合
    - 个人处理
    - 本部门协助
    - 公司其它部门协助
    - 公司外部门协助
- **描述** 工作的具体描述
- **反馈** 工作的反馈情况


