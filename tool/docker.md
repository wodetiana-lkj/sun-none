# 安装

```shell
# 卸载旧版本docker
sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-engine

sudo yum install -y yum-utils
# 增加docker的yum镜像
sudo yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
sudo yum-config-manager --disable docker-ce-nightly

# 安装docker客户端、服务端和docker-compose
sudo yum install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 查询相关docker版本
yum list docker-ce --showduplicates | sort -r
```

# 设置docker镜像加速器

```shell
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["http://hub-mirror.c.163.com","https://docker.mirrors.ustc.edu.cn","https://8mcnxf6j.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

### 国内加速地址

1. 中国区官方镜像
    https://registry.docker-cn.com

2. 网易
    http://hub-mirror.c.163.com

3. ustc 
    https://docker.mirrors.ustc.edu.cn

4. 中国科技大学
    https://docker.mirrors.ustc.edu.cn

# 构建镜像

## commit构建镜像

1. docker run images:tag
2. apt install net-tools vim -y
3. docker commit containerId

## DockerFile构建镜像

docker build

### FROM

FROM image:tag	基于的镜像

### MAINTAINER

镜像创建者和邮箱地址

### RUN

docker build 时运行的shell命令你个

shell 或者 exec 格式命令

即

```dockerfile
RUN yum install -y net-tools
RUN ['yum','install -y','net-tools']
```

### WORKDIR

指定容器入口目录

```dockerfile
WORKDIR /opt
```

### ENV

设置环境变量

```dockerfile
ENV JAVA_HOME /usr/local/jdk1.8_u333
```

### VOLUME

容器卷

### COPY

拷贝文件

```dockerfile
COPY ["src","destination"]
```

### ADD

拷贝文件到镜像中，自动处理URL和解压tar压缩包

```dockerfile
ADD
```

**此处和 COPY 命令对比，多了解压和执行sh脚本等功能**

### CMD

容器启动后的命令

```dockerfile
CMD ["exec filename","args..."]
```

**允许多个命令，只有最后一个生效，docker run 的参数会替换它**

### EXPOSE

暴露端口

```dockerfile
EXPOSE 8080
```

### ENTRYPOINT

作为指定的执行脚本，类似CMD但是不会被覆盖

```dockerfile
ENTRYPOINT ["nginx","-c"] # 定参
CMD ["/etc/nginx/nginx.conf"] # 需要传入的参数 
```

