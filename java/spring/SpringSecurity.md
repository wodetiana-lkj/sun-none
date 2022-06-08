# 初入SpringSecurity

```xml
<!-- 引入依赖 -->
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.5.6</version>
    <relativePath/> <!-- lookup parent from repository -->
</parent>

<dependencies>
	<dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-security</artifactId>
    </dependency>
</dependencies>
```



## 简单密码配置

### 直接启动

日志打印密码： 

默认账号：**user**

Using generated security password: **c24fb21a-fc6b-426d-b508-3e0fa1fe889f**

### yml配置

```yaml
spring:
  security:
    user:
      name: root
      password: root
```

### SpringConfig

1. 继承 **WebSecurityConfigurerAdapter** 类
2. 重写方法 **configure(AuthenticationManagerBuilder auth)** 方法

```java
// AuthorityUtils.commaSeparatedStringToAuthorityList("admin,user");

@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        PasswordEncoder encoder = passwordEncoder();
        String password = encoder.encode("root");
        auth.inMemoryAuthentication()
                .withUser("root")
                .password(password)
                .roles("admin");
    }
    
    //创建密码加密
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

### 自定义校验

1. 实现 **UserDetailService** 接口
2. 继承 **WebSecurityConfigurerAdapter** 类

```java
@Service
public class UserService implements UserDetailsService {
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if (!containsOfUser(username)) {
            throw new UsernameNotFoundException("username is not valid");
        }
        String password = String password = new BCryptPasswordEncoder().encode("truePassword");
        List<GrantedAuthority> authorities = AuthorityUtils.commaSeparatedStringToAuthorityList("admin,user");
        return new User(username,password,authorities);
    }
}
```

```java
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    UserService userService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService).passwordEncoder(passwordEncoder());
    }
}
```

