---
title: "Session Fixation"
description: "possible options in fixing this"
date: 2019-06-18 22:17:00
author: mallim
tags:
  - java
  - session-fixation
---

## Servlet 3.0 and lower

- Copy the required data from the old session
- Invalidate the old session - httpServletRequest.getSession(false).invalidate();
- Create a new session, which is assigned a different JSESSIONID - getSession()
- Save the copied data from the old session in the new session.

Source code at here : https://stackoverflow.com/a/44065501/970200

## Servlet 3.1 and higher

```java
httpServletRequest.changeSessionId();
```

## Spring Security 

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.sessionManagement().sessionFixation().newSession();
    }

    …
}
```

## References

https://twitter.com/mallim/status/1140988322866556928

https://twitter.com/mallim/status/1140989167075127296