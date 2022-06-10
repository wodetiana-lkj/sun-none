https://help.sonatype.com/repomanager2/download/download-archives---repository-manager-oss

https://help.sonatype.com/repomanager3/product-information/download/download-archives---repository-manager-3

nexus部署完成后，首先配置maven私服和本地仓库的关联

1. 本地仓库拉取私服仓库组地址和账号密码
2. 项目配置账号密码以及上传地址

maven setting.xml

```xml
<localRepository>repo_url</localRepository>

<servers>
	<server>
    	<id>key_id</id>
        <username>private_username</username>
        <password>private_password</password>
    </server>
</servers>

<mirrors>
	<mirror>
    	<id>private-mirror</id>
        <mirrorOf>*</mirrorOf>
        <name></name>
        <url>http://localhost:8081/repository/maven-public/</url>
    </mirror>
</mirrors>
```

pom.xml

```xml
<distributionManagement>
	<repository>
    	<id>key_id</id>
        <url>deploy_repository_url</url>
    </repository>
    <snapshotRepository>
    	<id></id>
        <url></url>
    </snapshotRepository>
</distributionManagement>
```

