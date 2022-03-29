安装erlang

jdk

wx-Widgets

```
yum install -y  ncurses-devel
./configure --enable-compat28
```

安装server

安装前端

```bash
rabbitmq-plugins enable rabbitmq_management
```

```shell
rabbitmqctl add_user liukangjie Lkj19981013.

rabbitmqctl set_user_tags liukangjie administrator

set_permissions

rabbitmqctl set_permissions liukangjie ".*" ".*" ".*"
rabbitmqctl list_users 
```

declare queue

 queue_name durable exclusive autoDelete args

publish

exchange routekey basicProperties body

consume

queue_name autoAck DeliverCallback CanalCallBack