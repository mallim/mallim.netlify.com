---
title: "Spring Tips: How to deal with all the @Autowired nightmares?"
excerpt: "Legacy codes which are littered with @Autowired which by default is required. What to do with it?"
date: 2020-06-19 21:44:00
author: mallim
tags:
  - java
  - spring
  - autowired
  - nightmare
---

## Usage Example

```java
@ContextConfiguration(initializers={DisableAutowireRequireInitializer.class})
public class TestCase {
    // Some tests
}
```

## The Code

```java
public class DisableAutowireRequireInitializer implements ApplicationContextInitializer<ConfigurableApplicationContext> {

@Override
public void initialize(ConfigurableApplicationContext applicationContext) {

    // Register the AutowiredAnnotationBeanPostProcessor while initalizing
    // the context so we get there before any @Autowire resolution happens
    // We set the "requiredParameterValue" so that @Autowire fields are not 
    // required to be resolved. Very useful for a test context
    GenericApplicationContext ctx = (GenericApplicationContext) applicationContext;
    ctx.registerBeanDefinition(AnnotationConfigUtils.AUTOWIRED_ANNOTATION_PROCESSOR_BEAN_NAME,
            BeanDefinitionBuilder
                .rootBeanDefinition(AutowiredAnnotationBeanPostProcessor.class)
                .addPropertyValue("requiredParameterValue", false)
                .getBeanDefinition());

    }

}
```

## Reference 

https://stackoverflow.com/a/31033598/970200