安装erlang

jdk

wx-Widgets

```
yum install -y  ncurses-devel
```

安装server

安装前端

```shell
rabbitmqctl add_user admin Lkj19981013.

rabbitmqctl set_user_tags admin administrator

set_permissions

rabbitmq set_permissions -p "/" ".*" ".*" ".*"
rabbitmqctl list_users 
```

declare queue

 queue_name durable exclusive autoDelete args

publish

exchange routekey basicProperties body

consume

queue_name autoAck DeliverCallback CanalCallBack