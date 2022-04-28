1.解析xml 理解fieldName和schema即xsd文件，有一个demo分支以供参考

 https://github.com/JabRef/jabref/tree/citavixml

2.创建一个导入者给citavi的xml文件，最好是整个压缩文件进行解析

3.创建citavi和bibtex的映射，这个参考biblatex的字段指南

4.单元测试和集成测试



node1 192.168.2.179

node2 192.168.2.190

node3 192.168.2.181



hadoop 2.7.2

hbase 1.3.1

zookeeper 3.4.10



# zk集群部署

zoo.cfg 修改数据文件目录，增加myid文件对应服务器

增加slave详情目录 server.id=ip:2888:3888

2888数据通信port 3888选举端口

注意ip对应的服务器，本地使用0.0.0.0



# hadoop集群部署

## 修改core-site.xml 设置namenode的url 和临时文件目录

```xml
		<!-- namenode url -->
        <property>
                <name>fs.defaultFS</name>
                <value>hdfs://node1:9000</value>
        </property>
        <property>
                <name>hadoop.tmp.dir</name>
                <value>/root/hadoop-2.10.1/tmp</value>
        </property>
```

## 修改hadoop-env.sh

java_home地址

## 修改hdfs-site.xml

```xml
<!-- hdfs数量 -->
<property>
	<name>dfs.relication</name>
    <value>3</value>
</property>

<!-- 暂时不了解 -->
<property>
	<name>dfs.namenode.secondary.http-address</name>
    <value>node2:50090</value>
</property>
```

格式化namenode

hdfs namenode -format

启动namenode

hadoop-daemon.sh start namenode

启动datanode

hadoop-daemon.sh start datanode



# hbase

## env

java_home

jdk1.7的注释掉

取消使用本身自己的zk

## hbase-site.xml

```xml
<property>
	<name>hbase.rootdir</name>
    <value>hdfs://node1:9000/hbase</value>
</property>

<!-- 默认端口 -->
<property>
	<name>hbase.master.port</name>
    <value>16000</value>
</property>
<property>
	<name>hbase.master.info.port</name>
    <value>16010</value>
</property>

<!-- zk -->
<property>
	<name>hbase.zookeeper.quorum</name>
    <value>node1,node2,node3</value>
</property>
<property>
	<name>hbase.zookeeper.property.dataDir</name>
    <value>/data/zookeeper/</value>
</property>
<property>
    <name>hbase.cluster.distributed</name>
    <value>true</value>
</property>
```



时间同步很重要