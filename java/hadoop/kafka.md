安装kafka bin

kafka_2.11-0.10.0.1.tgz 下载 解压 

启动zk

配置conf/server.properties

```powershell
delete.topic.enable=true
```

brocker.id 、zk 、logs_path进行设置

```shell
docker run -d --name zookeeper_1 \
        -p 2181:2181 \
        -p 2888:2888 \
        -p 3888:3888 \
        -v /data/zookeeper1/data:/data \
        -v /data/zookeeper1/conf:/conf \
        --restart=always \
        53bd045d4a25
```



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
# new version need kafka server
./kafka-console-consumer.sh --topic test --bootstrap-server localhost:9092 --from-beginning
```

