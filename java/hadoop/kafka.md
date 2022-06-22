安装kafka bin

kafka_2.11-0.10.0.1.tgz 下载 解压 

启动zk

配置conf/server.properties

```powershell
delete.topic.enable=true
```

brocker.id 、zk 、logs_path进行设置



# topic

```shell
./kafka-topics.sh --zookeeper localhost:2181 --list

./kafka-topics.sh --zookeeper localhost:2181 --create --topic demo-topic --partitions 2 --replication-factor 2

# topic名称、分区、副本数量

./kafka-topics.sh --zookeeper localhost:2181 --describe topic-demo

./kafka-topics.sh --zookeeper localhost:2181 --delete --topic demo-topic
```



# producer and consumer

```shell
./kafka-console-producer.sh --topic first --broker-list localhost:9092
./kafka-console-consumer.sh --topic first --bootstrap-server localhost:9092

# old version can connect by zk
./kafka-console-consumer.sh --topic first --zookeeper localhost:2181 --from-begining
```

