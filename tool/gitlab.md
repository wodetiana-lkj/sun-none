# gitlab部署

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



### tag

```yaml
job1:
	stage: test
	script:
		- echo "123"
	allow_failure: true	# 允许job失败
	
```



### when

| on_success | 成功执行(默认)                     |
| ---------- | ---------------------------------- |
| on_failure | 前面失败执行                       |
| always     | 总是执行                           |
| manual     | 手动执行                           |
| delayed    | 延迟执行(start_in: '30',unit:秒/s) |

可以搭配allow_failure使用



### retry

重试

```yaml
job1:
	retry: "2"
```



![image-20220610103207610](C:\Users\LIUKANGJIE\AppData\Roaming\Typora\typora-user-images\image-20220610103207610.png)

属性：

1. max
2. when

```yaml
max: 1
when:
  - always
```

### timout

超时时间

timeout: 3 hours 30 minutes

### parallel

作业内的并行操作

```yaml
job1:
	parallel: 5
```

### 触发机制

1. only
2. except
3. rules
4. workflow



only限制特定分支和tag执行

except不执行

rules构建规则

```yaml
rules:
	if: $DOMAIN="example.com"
	
```



chages

exists



