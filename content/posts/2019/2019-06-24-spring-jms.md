---
title: "Java Snippets - Spring JMS"
excerpt: "Looking around spring-jms and here are some interesting snippets"
date: 2019-06-24T20:54:00.000Z
author: mallim
tags:
  - java
  - spring
  - jms
---

Possible ways I found out to setup Spring JMS. If the default, cannot satisfy you...

## Container Factory

### DefaultJmsListenerContainerFactoryConfigurer

Good comment in the code about DefaultJmsListenerContainerFactoryConfigurer ...

```java
@Bean
public JmsListenerContainerFactory<?> myFactory(ConnectionFactory connectionFactory,
                                                DefaultJmsListenerContainerFactoryConfigurer configurer) {
    DefaultJmsListenerContainerFactory factory = new DefaultJmsListenerContainerFactory();
    // This provides all boot's default to this factory, including the message converter
    configurer.configure(factory, connectionFactory);
    // You could still override some of Boot's default if necessary.
    return factory;
}
```

https://github.com/spring-guides/gs-messaging-jms/tree/master/complete

### JmsListenerContainerFactory<?>

```java
@Bean
public JmsListenerContainerFactory<?> myFactory(
    ConnectionFactory connectionFactory,
    DefaultJmsListenerContainerFactoryConfigurer configurer) {
DefaultJmsListenerContainerFactory factory = new DefaultJmsListenerContainerFactory();

// anonymous class
factory.setErrorHandler(
    new ErrorHandler() {
        @Override
        public void handleError(Throwable t) {
        System.err.println("An error has occurred in the transaction");
        }
    });

// OR lambda function
factory.setErrorHandler(t -> System.out.println("An error has occurred in the transaction"));

configurer.configure(factory, connectionFactory);
return factory;
}
```

https://github.com/lankydan/spring-boot-jms

## Connection Factories

### PooledConnectionFactory

```java
ConnectionFactory connectionFactory() {
    ConnectionFactory connectionFactory = new PooledConnectionFactory("tcp://localhost:61616");
    return connectionFactory;
}

@Bean
public DefaultJmsListenerContainerFactory jmsListenerContainerFactory() {
    DefaultJmsListenerContainerFactory factory = new DefaultJmsListenerContainerFactory();
    factory.setConnectionFactory(connectionFactory());
    factory.setDestinationResolver(new DynamicDestinationResolver());
    factory.setMessageConverter(MessageConverters.defaultMessageConverter());
    factory.setConcurrency("3-10");
    return factory;
}
```

https://github.com/pjayes/spring-boot-jms-example

### CachingConnectionFactory

```java
  @Bean
  public CachingConnectionFactory cachingConnectionFactory() {
    CachingConnectionFactory cachingConnectionFactory =
        new CachingConnectionFactory(senderConnectionFactory());
    cachingConnectionFactory.setSessionCacheSize(10);

    return cachingConnectionFactory;
  }

@Bean
public JmsTemplate jmsTemplate() {
  return new JmsTemplate(cachingConnectionFactory());
}
```

Reference:

- https://github.com/code-not-found/spring-jms/tree/master/spring-jms-activemq-hello-world
- https://github.com/code-not-found/spring-jms/blob/master/spring-jms-jmstemplate

## The Others

### JmsListener

```yaml
destination:
  order: order.q
  status1: status1.q
  status2: status2.q
```

```java
  @Bean
  public DefaultJmsListenerContainerFactory orderDefaultJmsListenerContainerFactory() {
    DefaultJmsListenerContainerFactory factory =
        new DefaultJmsListenerContainerFactory();
    factory
        .setConnectionFactory(receiverActiveMQConnectionFactory());
    factory.setConcurrency("3-10");

    return factory;
  }

 @JmsListener(destination = "${destination.order}",
      containerFactory = "orderDefaultJmsListenerContainerFactory")
```

https://github.com/code-not-found/spring-jms/tree/master/spring-jms-listener

### javax.jms.Destination

```java
  @Bean
  public Destination orderDestination() {
    return new ActiveMQQueue(orderDestination);
  }

  @Bean
  public JmsTemplate orderJmsTemplate() {
    JmsTemplate jmsTemplate =
        new JmsTemplate(cachingConnectionFactory());
    jmsTemplate.setDefaultDestination(orderDestination());
    jmsTemplate.setReceiveTimeout(5000);

    return jmsTemplate;
  }
```

https://github.com/code-not-found/spring-jms/blob/master/spring-jms-jmstemplate

### JmsTemplate #2

```java
// Example configuration of JmsTemplate
@Bean
public JmsTemplate jmsTemplate( ConnectionFactory connectionFactory ) {
    CachingConnectionFactory ccf = new CachingConnectionFactory(connectionFactory);
    JmsTemplate jmst = new JmsTemplate(ccf);
    return jmst;
}
```

https://solace.com/samples/solace-samples-cloudfoundry-java/spring-cloud-autoconf-jms/
