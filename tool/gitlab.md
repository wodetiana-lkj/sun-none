gitlab rpm下载地址

https://packages.gitlab.com/gitlab/gitlab-ce



vim /etc/gitlab/gitlab.rb file

设置环境变量 external_url

sudo gitlab-ctl reconfigure





安装gitlab-runner

查询3种类型

shared group specific

token

注册到gitlab

gitlab-runner register