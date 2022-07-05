主从通过docker启动

这里需要使用到

# master

```shell
docker run -d \
	--name mysql-master \
	--restart=always \
	-v /data/mysql-master/conf.d:/etc/mysql/conf.d \
	-v /data/mysql-master/datadir:/var/lib/mysql \
	-p 10000:3306 \
	-e MYSQL_ROOT_PASSWORD= \
	b2500a44757f
```

```
[mysqld]

server_id=101
binlog_ignore_db=mysql
log-bin=mall-mysql-bin
binlog_cache_size=1M
binlog_format=mixed
expire_logs_days=7
slave_skip_errors=1062
```



# slave

```shell
docker run -d \
        --name mysql-slave \
        --restart=always \
        -v /data/mysql-slave/conf.d:/etc/mysql/conf.d \
        -v /data/mysql-slave/datadir:/var/lib/mysql \
        -p 10001:3306 \
        -e MYSQL_ROOT_PASSWORD= \
        b2500a44757f
```

```
[mysqld]
server_id=102

binlog-ignore-db=mysql
log-bin=mall-mysql-slave1-bin

binlog_cache_size=1M
binlog_format=mixed
expire_logs_days=7
slave_skip_errors=1062

relay_log=mall-mysql-relay-bin
log_slave_updates=1
read_only=1
```

# master配置

```sql
# 创建用户
create user 'slave'@'%' identified by '123456';
# 赋权
grant replication slave,replication client on *.* to 'slave'@'%'

#解决mysql8中的默认密码是caching_sha2_password加密而导致的错误
SELECT plugin FROM `user` where user = 'slave';
ALTER USER 'slave'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
```



# slave关联配置

```sql
# 绑定到主数据库
change master to master_host='192.168.1.7',master_user='slave',master_password='123456',master_port=10000,master_log_file='mall-mysql-bin.000003',master_log_pos=645,master_connect_retry=30;
```

# 查看状态

```sql
show master status;
show slave status\G
start slave;
stop slave;

```

