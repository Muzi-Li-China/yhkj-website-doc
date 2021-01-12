---
title: 分布式版本控制系统
sidebar: auto
sidebarDepth: 2
---

# 分布式版本控制系统 => git

## 查看配置信息

``` js
git config --list 
```

## 初始化

| **初始化**                                      | **描述**       |
| ----------------------------------------------- | -------------- |
| git init                                        | 初始化本地仓库 |
| git config --global user.name "your name"       | 设置你的名字   |
| git config --global user.email "you@domain.com" | 设置你的邮箱   |
| ssh-keygen -o                                   | 生成密钥       |
| cat ~/.ssh/id_rsa.pub                           | 查看密钥       |

## 常用命令

| **常用命令**             | **描述**         |
| ------------------------ | ---------------- |
| git status               | 查看仓库信息     |
| git log                  | 查看历史记录     |
| git fetch origin --prune | 更新远程分支信息 |

## 本地操作

| **文件操作**                   | **描述**                     |
| ------------------------------ | ---------------------------- |
| git add [file]                 | 添加文件                     |
| git add .                      | 将目录下所有文件都添加到仓库 |
| git commit -m "content"        | 提交文件                     |
| git reset --hard comitID       | 回滚到指定的版本             |
| git diff [file]                | 查看工作区和暂存区差别       |
| git rm [file]                  | 删除文件                     |
| git reflog                     | 记录所有的操作记录           |
| git checkout -- [file]         | 把工作区修改撤销掉           |
| git reset HEAD [file]          | 把暂存区修改撤销掉           |
| git stash                      | 将工作区修改内容保存到贮藏区 |
| git stash pop                  | 将贮藏区内容恢复到工作区     |
| git tag                        | 列出代码库中所有的标签       |
| git tag -a <版本号> -m message | 新增一个版本号               |

## 分支操作

| 分支操作                               | 描述             |
| -------------------------------------- | ---------------- |
| git remote update origin --prune       | 更新远程分支     |
| git branch -a                          | 列出所有分支     |
| git switch -c [name]                   | 创建一个新的分支 |
| git switch [name]                      | 切换分支         |
| git merge [from name]                  | 合并分支         |
| git branch -d [name]                   | 删除分支         |
| git push origin --delete [branch_name] | 删除远程分支     |

## 远程操作

| 远程操作                           | 描述                                       |
| ---------------------------------- | ------------------------------------------ |
| git clone [项目url]                | 从远程代码库下载                           |
| git remote ass <remeto name> <url> | 链接一个远程库                             |
| git fetch                          | 从远程代码库下载所有的变动                 |
| git pull                           | 从远程库拉取代码                           |
| git push [remote][branch]          | 将当前代码库推送到远程remote库的branch分支 |

