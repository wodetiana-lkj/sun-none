# 开辟线程

## Thread

```java
public static void main(String[] args) {
    Thread newThread = new Thread(new ThreadClass());
    newThread.start();
}

class ThreadClass extends Thread {
    @Override
    public void run() {
        System.out.println("hello thread");
    }
}
```



## Runnable

```java
public static void main(String[] args) {
    Thread newThread = new Thread(new RunnableClass());
    newThread.start();
}  

class RunnableClass implements Runnable {
    @Override
    public void run() {
        System.out.println("hello runnable");
    }
}

```



## Callable

对于Thread类和Runnable接口

Callable并没有直接实现Runnable接口，因此无法将实现Callable实例放入Thread构造方法中

通过FutrueTask → RunnableFuture → Runnable & Future

这样的实现方式来达到将Callable接口的实现类放入Thread构造方法的目的

```java
public static void main(String[] args) throws ExecutionException, InterruptedException {
        FutureTask<Integer> task = new FutureTask<>(new newThread());
        new Thread(task).start();
        Integer result = task.get();
        System.out.println(result);
}

class newThread implements Callable<Integer> {
    @Override
    public Integer call() {
        System.out.println("hello callable");
        return (int) (Math.random() + 1);
    }
}
```

