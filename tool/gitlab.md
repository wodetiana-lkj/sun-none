# gitlab部署

gitlab rpm下载地址

https://packages.gitlab.com/gitlab/gitlab-ce



vim /etc/gitlab/gitlab.rb file

设置环境变量 external_url

sudo gitlab-ctl reconfigure

# gitlab runner

## job

作业中最少要拥有一个script shell命令



作业属性

stages指定有几个，执行顺序

stage填名称

.pre .post一个第一，一个最后

before_script:

script:

after_script:

```yml
variables:
	DOMAIN: "www.baidu.com"
```

​	