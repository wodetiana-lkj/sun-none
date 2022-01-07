# 1.初次安装问题

```cmd
# 配置go环境
go env -w GOPROXY=https://goproxy.io,direct
go env -w GO111MODULE=o
```

# 2.安装插件

```cmd
go get -v github.com/ramya-rao-a/go-outline
GO111MODULE=on 
go get -v golang.org/x/tools/gopls
go get -v github.com/go-delve/delve/cmd/dlv
```
