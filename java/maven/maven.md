# 基础参数

```cmd
mvn -v

### usage ###
-DgroupId=		# 组织名
-DartifactId=	# 模块名
-Dversion=		# 版本号
-Dpackage=		# 包名
-DarchetypeArtifactId=maven-archetype-webapp
-DinteractiveMode=false

```

# 常用构建命令

```cmd
mvn clean	# 清理

mvn compile	# 编译

mvn test	# 测试

mvn package	# 打包

mvn install	# 上传到本地仓库
```

# 拉取包方式

寻找路径

​	1.本地仓库

​	2.远程仓库（这里分为私服仓库、中央仓库或中央镜像仓库）

```xml
<localRepository></localRepository>
```

# pom文件

```xml
<dependencied>
    <!-- dependency -->
	<dependency>
    	<groupId></groupId>
        <artifactId></artifactId>
        <version></version>
        <scope>使用的区域</scope><!-- compile test provided runtime system -->
        <type>类型</type>
        <optional>选项参数</optional>
        <exclusions>
        	<exclusion>如上dependency参数，用来排除jar包中的依赖，避免不同版本的冲突</exclusion>
        </exclusions>
    </dependency>
</dependencied>

<build>
	<plugins>
    	<plugin>
        	<groupId></groupId>
            <artifactId></artifactId>
            <version></version>
        </plugin>
    </plugins>
</build>
```

|  scope   | 编译时 | 测试时 | 运行时 |      example      |
| :------: | :----: | :----: | :----: | :---------------: |
| compile  |   √    |   √    |   √    |       core        |
|   test   |        |   √    |        |       junit       |
| provided |   √    |   √    |        |    servlet-api    |
| runtime  |        |   √    |   √    |     connector     |
|  system  |   √    |   √    |        | maven仓库外的类库 |

|  生命周期  |           常见插件           |      description      |
| :--------: | :--------------------------: | :-------------------: |
|   clean    |    maven-clean-plugin:2.5    |       清理项目        |
| resources  |  maven-resources-plugin:2.6  |     处理资源文件      |
|  compile   |    maven-compiler-plugin     |      编译源代码       |
|    test    | maven-surefire-plugin:2.12.4 |     执行测试文件      |
|    jar     |       maven-jar-plugin       |        打jar包        |
|            |    maven-assembly-plugin     |                       |
|            |      maven-shade-plugin      |                       |
|  install   |     maven-install-plugin     | 编译并打包到本地仓库  |
| dependency |   maven-dependency-plugin    | 拷贝jar包到target目录 |

# 远程仓库

https://help.sonatype.com/repomanager3/product-information/download

下载安装

密码在安装目录下sonatype-work/nexus3/admin.password

更改密码后文件消失

仓库类型

| type   | description |
| ------ | ----------- |
| proxy  | 远程仓库    |
| hosted | 本地仓库    |
| group  | 分组        |

```xml
<!-- maven conf -->
<servers>
    <!-- auth -->
	<server>
    	<id>release</id>
        <username>admin</username>
        <password>123456</password>
    </server>
</servers>
```

```xml
<!-- pom.xml -->

<!-- 如果需要上传到私服 -->
<distributionManagement>
	<repository>
    	<id>maven conf中的server_id做对应</id>
        <url>仓库地址(http://localhost:8081/repository/maven-releases)</url>
    </repository>
</distributionManagement>

<!-- 如果需要引用私服jar -->
<repositories>
	<repository>
    	<id>nexus</id>
        <url>http://localhost:8081/repositories/maven-public</url>
        <releases><enable>true</enable></releases>
        <snapshots><enable>true</enable></snapshots>
    </repository>
</repositories>
```

