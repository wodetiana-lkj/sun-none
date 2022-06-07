我是直接采用注解切面AOP编程进行了解

首先是注解的编写

# 1.注解

这里需要了解的是元注解

```java
@Target(ElementType.METHOD)				//限定标注位置
@Retention(RetentionPolicy.RUNTIME)		//发生作用位置
//文档注释可以选择性地配置，这里会添加到文档注释中
@Documented
```

| ElementType     | Usage                                                        | Description                  |
| :-------------- | ------------------------------------------------------------ | ---------------------------- |
| TYPE            | Class, interface (including annotation type), or enum declaration | 类，接口(包括注解)，枚举声明 |
| FIELD           | Field declaration (includes enum constants)                  | 变量声明                     |
| METHOD          | Method declaration                                           | 方法声明                     |
| PARAMETER       | Formal parameter declaration                                 | 一般参数声明                 |
| CONSTRUCTOR     | Constructor declaration                                      | 构造方法声明                 |
| LOCAL_VARIABLE  | Local variable declaration                                   | 本地变量声明                 |
| ANNOTATION_TYPE | Annotation type declaration                                  | 注解类型声明                 |
| PACKAGE         | Package declaration                                          | 包声明                       |
| TYPE_PARAMETER  | Type parameter declaration                                   | 类型参数声明                 |
| TYPE_USE        | Use of a type                                                |                              |

| RetentionPolicy | Usage                                                        | Description |
| --------------- | ------------------------------------------------------------ | ----------- |
| SOURCE          | Annotations are to be discarded by the compiler.             |             |
| CLASS           | Annotations are to be recorded in the class file by the compiler but need not be retained by the VM at run time.  This is the default behavior. |             |
| RUNTIME         | Annotations are to be recorded in the class file by the compiler and retained by the VM at run time, so they may be read reflectively. | 运行时      |

设置注解内的值，for example:

```java
@Documented
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface GetParam {
    boolean value() default true;
}
```

# 2.切面编程对于切面需要引入依赖

```java
<dependency>
	<groupId>org.springframework.boot</groupId>
	<artifactId>spring-boot-starter-aop</artifactId>
</dependency>
```



```java
@Aspect		//标志为切面加载内容
@Component	//注册到组件
```

创建类后，通过注解方法限制作用的各点位置的操作

```java
@Pointcut			//切点

@Before				//切点前
@After				//切点后的结果操作
@Around				//切点环绕
@AfterReturning		//返回ModelAndView后的操作
@AfterThrowing		//抛出异常后
```

注解的内容配置

before,after,around的注解参数为

| name     | type   |      |
| -------- | ------ | ---- |
| value    | String |      |
| argNames | String |      |

AfterReturning,AfterThrowing

| name               | type   |      |
| ------------------ | ------ | ---- |
| value              | String |      |
| pointcut           | String |      |
| returning/throwing | String |      |
| argNames           | String |      |

# 3.example

```java
//建立pointcut

/*
value定义
execution执行环境
权限+返回类型(可以用*)+包名+.+类+.+方法+.+(入参类型)
*/

//使用切点

//其中相对特殊的是around
//可以使用ProceedingJointPoint
//其他使用JointPoint
```
