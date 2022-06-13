# nginx

```json
events {
	worker_connections 1024;
}

http {
	// 扩容文件名
	include	file_name;

	server {
		location {
			
		}
	}
}
```

http模块内容

```json
types {
    application/zip	zip;
}

//默认传输的数据类型
default_type application/octet-stream;

//数据零拷贝
sendfile	on;

keepalive_timeout	5000;

//主机
server {
    listen	80;
    
    // server_name 解析来源于泛解析的域名，即反向代理的转发服务
    server_name	localhost;
    
    
}
```

