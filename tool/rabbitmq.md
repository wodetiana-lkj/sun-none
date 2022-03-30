# 安装erlang

jdk环境

wx-Widgets环境

```
yum install -y  ncurses-devel
./configure --enable-compat28
```

# 安装server

```shell
rpm -ivh rabbitmq-server.rpm
```

# 安装前端

安装插件

```bash
rabbitmq-plugins enable rabbitmq_management
```

添加账号、角色、权限

```shell
rabbitmqctl add_user liukangjie Lkj19981013.

rabbitmqctl set_user_tags liukangjie administrator

set_permissions

rabbitmqctl set_permissions liukangjie ".*" ".*" ".*"
rabbitmqctl list_users 
```

# client使用

declare queue

 queue_name durable exclusive autoDelete args

publish

exchange routekey basicProperties body

consume

queue_name autoAck DeliverCallback CanalCallBack