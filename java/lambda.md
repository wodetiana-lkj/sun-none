# Consumer

消费型接口

```java
Consumer<T>
void accept(T t)
```



# Supplier

供给型接口

```java
Supplier<T>
T get()
```



# Function

函数型接口

```java
Function<T,R>
R apply(T t)
```



# Predicate

判断型接口

```java
Predicate<T>
boolean test(T t)
```



# 语法糖 -> 方法引用



# Stream

集合面向内存数据的

stream是面向cpu的操作内存集合数据操作的operate

## 创建流

> 普通流

> 并行流

> 数组流

Arrays.stream()

## 无限流

迭代或者生成

```java
Stream.iterate();
Stream.generate();
```

## API中间操作

### 筛选和分片

1. fiter(Predicate pre)
2. limit(int i)
3. skip(int i)
4. distinct()

### 映射

1. map(Function func)
2. flatMap(Function func) 聚合流

### 排序

1. sorted()
2. sort(Comparable comp)

comparable , compareTo <0 -1 =0 0 >0 1 默认从小到大排序

### 中止操作

1. allMatch(Predicate pre) boolean
2. anyMatch(Predicate pre) boolean
3. noneMatch(Predicate pre) boolean
4. findFirst
5. findAny
6. count() int
7. max(Comparable comp)
8. min(Comparable comp)
9. foreach(Consummer)

### 归约

1. reduce(T t,BinaryOperator bo)
2. reduce(BinaryOperator bo)

初始值和规约操作

### 收集

1. collect(Collector c)

