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

# amqp-client的使用

declare queue

 queue_name durable exclusive autoDelete args

publish

exchange routekey basicProperties body

consume

queue_name autoAck DeliverCallback CanalCallBack

## basic consume & produce

```java
//create connectionFactory
private static ConnectionFactory connectionFactory = new ConnectionFactory();

static {
    connectionFactory.setHost("nas.010free.cn");
    connectionFactory.setPort(5672);
    connectionFactory.setUsername("liukangjie");
    connectionFactory.setPassword("Lkj19981013.");
}

//create connection & open channel & declare queue
Connection connection = connectionFactory.newConnection();
Channel channel = connection.createChannel();
channel.queueDeclare("durable_queue",true,false,false,null);

//produce or consume

channel.close();
connection.close();
```



```java
//produce
channel.basicPublish(
                "",//exchange
                "durable_queue",//routingKey or queueName
                false,//manatory
                MessageProperties.PERSISTENT_TEXT_PLAIN,//properties
                nowTime.toString().getBytes(StandardCharsets.UTF_8)//body
        );
//consume
channel.basicConsume(
        "durable_queue",//queueName
        true,//autoAck
        "",//consumerTag
        new DeliverCallback() {
            @Override
            public void handle(String consumerTag, Delivery message) throws IOException {

            }
        },
        new CancelCallback() {
            @Override
            public void handle(String consumerTag) throws IOException {

            }
        }
);
```

## 持久化durable

1. 需要持久化的队列，declare队列时就需要
2. 其次需要持久化的消息，持久化到硬盘中，在publish时设置对应的properties参数

## 手动返回ack

```java
channel.basicConsume(
        "durable_queue",
        false,
        "",
        (consumerTag, message) -> {
            System.out.println(consumerTag);
            System.out.println(new String(message.getBody()));
            channel.basicAck(message.getEnvelope().getDeliveryTag(), false);
        },
        (consumerTag) -> {
            System.out.println("拒绝策略");
        }
);
```

设置autoAck

通过channel.basic()响应队列Ack值

