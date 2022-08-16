### 安装
    git --version 查看版本
### 初始化配置
    git config --global user.name "名称"
    git config --global user.email "邮箱"
        git config --list 查看配置信息
### 区域
    工作区
    暂存区
    版本库
### 对象
    Git对象
    树对象
    提交对象
### 底层概念（底层命令）
    clear 清除屏幕
    echo "测试写入" 往控制台输出信息
    echo "测试写入">test.txt 创建文件并写入内容
    ll : 将当前目录下的子孙文件&子孙目录平铺在控制台
    find 目录名 ： 将对应目录下的子孙文件&子孙目录平铺在控制台
    find 目录名 -type f  ： 将对应目录下的子孙文件平铺在控制台
    rm 文件名 ：删除文件
    mv 原文件名 新文件名 ：重命名
    cat 文件的url ： 查看文件内容
    vim 文件的url（在英文状态下）
        按 i 进入插入模式，进行文件的编辑
        按 esc 退出插入模式
        按 ： 进行命令的执行
            q! 强制退出（不保存）
            wq 保存退出
            set nu 设置行号
### 高层命令
    git init    初始化仓库
    git status  查看文件状态
    git diff    查看哪些修改还没有缓冲
    git diff --staged    查看哪些修改被暂存了 还没提交
    git add ./  将修改添加到暂存区
    git rm 文件名   删除工作目录中对应的文件 再将修改添加到暂存区
    git mv 原文件名 新文件名    将工作目录中的文件重命名 再将修改添加到暂存区
    git commit 
    git commit -a   跳过暂存区直接提交到版本库
    git commit -m "注释"  将暂存区提到版本库
    git log --oneline    查看提交历史记录
    git log --pretty=oneline    查看提交历史记录
    git log --oneline --decorate --graph --all  查看项目分叉历史
### 分支
    master 主分支
    git branch  显示分支列表
    git branch 分支名   创建分支
    git branch -D 分支名   强制删除分支
    git branch 分支名 commitHash    新建一个分支并指向对应的提交对象
    git checkout 分支名   切换分支
    git checkout -b 分支名 创建并切换到分支
### 配别名
    git config --global alias.别名 命令
### 合并分支
    git merge 被合并分支
### 后悔药
    工作区
        git checkout 文件名
    暂存区
        git restore --staged 文件名
    版本库

### http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html

Workspace：工作区
Index / Stage：暂存区
Repository：仓库区（或本地仓库）
Remote：远程仓库

### 一、新建代码库
    git init  在当前目录新建一个Git代码库
    git init [project-name]   新建一个目录，将其初始化为Git代码库
    git clone [url]   下载一个项目和它的整个代码历史
### 二、配置
    Git的设置文件为.gitconfig，它可以在用户主目录下（全局配置），也可以在项目目录下（项目配置）。

    git config --list 显示当前的Git配置
    git config -e [--global]  编辑Git配置文件

    设置提交代码时的用户信息
        $ git config [--global] user.name "[name]"
        $ git config [--global] user.email "[email address]"
### 三、增加/删除文件
    $ git add [file1] [file2] ...   添加指定文件到暂存区
    $ git add [dir] 添加指定目录到暂存区，包括子目录
    $ git add . 添加当前目录的所有文件到暂存区

    # 添加每个变化前，都会要求确认
    # 对于同一个文件的多处变化，可以实现分次提交
    $ git add -p

    $ git rm [file1] [file2] ...    删除工作区文件，并且将这次删除放入暂存区
    $ git rm --cached [file]    停止追踪指定文件，但该文件会保留在工作区
    $ git mv [file-original] [file-renamed] 改名文件，并且将这个改名放入暂存区

### 四、代码提交
    $ git commit -m [message]   提交暂存区到仓库区
    $ git commit [file1] [file2] ... -m [message]   提交暂存区的指定文件到仓库区
    $ git commit -a 提交工作区自上次commit之后的变化，直接到仓库区
    $ git commit -v 提交时显示所有diff信息

    # 使用一次新的commit，替代上一次提交
    # 如果代码没有任何新变化，则用来改写上一次commit的提交信息
    $ git commit --amend -m [message]

    # 重做上一次commit，并包括指定文件的新变化
    $ git commit --amend [file1] [file2] ...
五、分支

    # 列出所有本地分支
    $ git branch

    # 列出所有远程分支
    $ git branch -r

    # 列出所有本地分支和远程分支
    $ git branch -a

    # 新建一个分支，但依然停留在当前分支
    $ git branch [branch-name]

    # 新建一个分支，并切换到该分支
    $ git checkout -b [branch]

    # 新建一个分支，指向指定commit
    $ git branch [branch] [commit]

    # 新建一个分支，与指定的远程分支建立追踪关系
    $ git branch --track [branch] [remote-branch]

    # 切换到指定分支，并更新工作区
    $ git checkout [branch-name]

    # 切换到上一个分支
    $ git checkout -

    # 建立追踪关系，在现有分支与指定的远程分支之间
    $ git branch --set-upstream [branch] [remote-branch]

    # 合并指定分支到当前分支
    $ git merge [branch]

    # 选择一个commit，合并进当前分支
    $ git cherry-pick [commit]

    # 删除分支
    $ git branch -d [branch-name]

    # 删除远程分支
    $ git push origin --delete [branch-name]
    $ git branch -dr [remote/branch]
六、标签

    # 列出所有tag
    $ git tag

    # 新建一个tag在当前commit
    $ git tag [tag]

    # 新建一个tag在指定commit
    $ git tag [tag] [commit]

    # 删除本地tag
    $ git tag -d [tag]

    # 删除远程tag
    $ git push origin :refs/tags/[tagName]

    # 查看tag信息
    $ git show [tag]

    # 提交指定tag
    $ git push [remote] [tag]

    # 提交所有tag
    $ git push [remote] --tags

    # 新建一个分支，指向某个tag
    $ git checkout -b [branch] [tag]
七、查看信息

    # 显示有变更的文件
    $ git status

    # 显示当前分支的版本历史
    $ git log

    # 显示commit历史，以及每次commit发生变更的文件
    $ git log --stat

    # 搜索提交历史，根据关键词
    $ git log -S [keyword]

    # 显示某个commit之后的所有变动，每个commit占据一行
    $ git log [tag] HEAD --pretty=format:%s

    # 显示某个commit之后的所有变动，其"提交说明"必须符合搜索条件
    $ git log [tag] HEAD --grep feature

    # 显示某个文件的版本历史，包括文件改名
    $ git log --follow [file]
    $ git whatchanged [file]

    # 显示指定文件相关的每一次diff
    $ git log -p [file]

    # 显示过去5次提交
    $ git log -5 --pretty --oneline

    # 显示所有提交过的用户，按提交次数排序
    $ git shortlog -sn

    # 显示指定文件是什么人在什么时间修改过
    $ git blame [file]

    # 显示暂存区和工作区的差异
    $ git diff

    # 显示暂存区和上一个commit的差异
    $ git diff --cached [file]

    # 显示工作区与当前分支最新commit之间的差异
    $ git diff HEAD

    # 显示两次提交之间的差异
    $ git diff [first-branch]...[second-branch]

    # 显示今天你写了多少行代码
    $ git diff --shortstat "@{0 day ago}"

    # 显示某次提交的元数据和内容变化
    $ git show [commit]

    # 显示某次提交发生变化的文件
    $ git show --name-only [commit]

    # 显示某次提交时，某个文件的内容
    $ git show [commit]:[filename]

    # 显示当前分支的最近几次提交
    $ git reflog
八、远程同步

    # 下载远程仓库的所有变动
    $ git fetch [remote]

    # 显示所有远程仓库
    $ git remote -v

    # 显示某个远程仓库的信息
    $ git remote show [remote]

    # 增加一个新的远程仓库，并命名
    $ git remote add [shortname] [url]

    # 取回远程仓库的变化，并与本地分支合并
    $ git pull [remote] [branch]

    # 上传本地指定分支到远程仓库
    $ git push [remote] [branch]

    # 强行推送当前分支到远程仓库，即使有冲突
    $ git push [remote] --force

    # 推送所有分支到远程仓库
    $ git push [remote] --all
九、撤销

    # 恢复暂存区的指定文件到工作区
    $ git checkout [file]

    # 恢复某个commit的指定文件到暂存区和工作区
    $ git checkout [commit] [file]

    # 恢复暂存区的所有文件到工作区
    $ git checkout .

    # 重置暂存区的指定文件，与上一次commit保持一致，但工作区不变
    $ git reset [file]

    # 重置暂存区与工作区，与上一次commit保持一致
    $ git reset --hard

    # 重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变
    $ git reset [commit]

    # 重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致
    $ git reset --hard [commit]

    # 重置当前HEAD为指定commit，但保持暂存区和工作区不变
    $ git reset --keep [commit]

    # 新建一个commit，用来撤销指定commit
    # 后者的所有变化都将被前者抵消，并且应用到当前分支
    $ git revert [commit]

    # 暂时将未提交的变化移除，稍后再移入
    $ git stash
    $ git stash pop
十、其他

    # 生成一个可供发布的压缩包
    $ git archive