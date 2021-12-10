# Static Proxy

将需要代理的实例作为成员变量，交给代理类处理

# JDK Dynamic Proxy

以Proxy类为核心，利用反射拿到实现类的类加载器，接口，并实现InvocationHandler()类的invoke方法。

获得到代理对象，由代理对象去实现接口中的方法，代理对象需要强制转型到接口使用

它的缺陷在于Proxy.newProxyInstance(ClassLoader,Interfaces[],InvocationHandler);这样的构造器要求了被代理的类必须实现接口

# cglib Dynamic Proxy

暂时理解不了