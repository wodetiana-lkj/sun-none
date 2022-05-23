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

1.[Docker](https://so.csdn.net/so/search?q=Docker&spm=1001.2101.3001.7020)中国区官方镜像
 https://registry.docker-cn.com

2.网易
 http://hub-mirror.c.163.com

3.ustc 
 https://docker.mirrors.ustc.edu.cn

4.中国科技大学
 https://docker.mirrors.ustc.edu.cn

5.阿里云容器 生成自己的加速地址

登录：cr.console.aliyun.com
