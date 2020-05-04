---
title: "Google Cloud laundry list"
excerpt: "Commands performed on the Cousera lab lesson"
date: 2020-05-02 12:54:00
author: mallim
tags:
  - coursera
  - google cloud
  - spring
---

## Table of Contents

## JAVAMS01 Bootstrapping the Application Frontend and Backend

```shell
gcloud config list account
gcloud config list project
```

Set timezone

```shell
gcloud config set compute/zone [YOUR_ZONE]
```

Clone demo application

```shell
git clone https://github.com/saturnism/spring-cloud-gcp-guestbook.git
```

Use jq to parse the JSON return text.

```shell
curl -s http://localhost:8081/guestbookMessages \
  | jq -r '._embedded.guestbookMessages[] | {name: .name, message: .message}'
```

## JAVAMS02 Configuring and Connecting to Cloud SQL

### Cloning

Create an environment variable that contains the project ID for this lab

```shell
export PROJECT_ID=$(gcloud config list --format 'value(core.project)')
```

Verification

```shell
gsutil ls gs://$PROJECT_ID
```

Copy to Cloud Shell

```shell
gsutil -m cp -r gs://$PROJECT_ID/* ~/
```

### Cloud SQL Administration

Enable Cloud SQL Administration API

```shell
gcloud services enable sqladmin.googleapis.com
```

Confirm that Cloud SQL Administration API is enabled

```shell
gcloud services list | grep sqladmin
```

List the Cloud SQL instances.

```shell
gcloud sql instances list
```

### Create a Cloud SQL instance

Provision a new Cloud SQL instance.

```shell
gcloud sql instances create guestbook --region=us-central1
```

Create a messages database in the MySQL instance.

```shell
gcloud sql databases create messages --instance guestbook
```

### Connect to Cloud SQL and create the schema

Temporarily whitelists the IP address for the connection.

```shell
gcloud sql connect guestbook
```

Find instance name for Java datasource configuration

```shell
gcloud sql instances describe guestbook --format='value(connectionName)'
```

### Java dependancies

Maven dependancies

```xml
 <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-gcp-starter-sql-mysql</artifactId>
</dependency>
```

Spring Boot profile

```shell
spring.cloud.gcp.sql.enabled=false
spring.cloud.gcp.sql.database-name=messages
spring.cloud.gcp.sql.instance-connection-name=YOUR_INSTANCE_CONNECTION_NAME
```

## JAVAMS03 Working with Runtime Configurations

### Java Changes

Spring Cloud GCP Config starter

```xml
        <dependency>
           <groupId>org.springframework.cloud</groupId>
           <artifactId>spring-cloud-gcp-starter-config</artifactId>
        </dependency>
        <dependency>
           <groupId>com.google.guava</groupId>
           <artifactId>guava</artifactId>
           <version>20.0</version>
        </dependency>
        <dependency>
           <groupId>org.springframework.boot</groupId>
           <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
```

Frontend needs **bootstrap-cloud.properties**

```shell
spring.cloud.gcp.config.enabled=true
spring.cloud.gcp.config.name=frontend
spring.cloud.gcp.config.profile=cloud
```

application.properties

```shell
management.endpoints.web.exposure.include=*
```

RefreshScope annotation

```java
import org.springframework.cloud.context.config.annotation.RefreshScope;

@RefreshScope
```

### Create a runtime configuration

Enable Cloud Runtime Configuration API.

```shell
gcloud services enable runtimeconfig.googleapis.com
```

Create a runtime configuration for the frontend application's cloud profile.

```shell
gcloud beta runtime-config configs create frontend_cloud
```

Set a new configuration value for the greeting message.

```shell
gcloud beta runtime-config configs variables set greeting \
  "Hi from Runtime Config" \
  --config-name frontend_cloud
```

Display all the variables in the runtime configuration:

```shell
gcloud beta runtime-config configs variables list --config-name=frontend_cloud
```

Display the value of a specific variable.

```shell
gcloud beta runtime-config configs variables \
  get-value greeting --config-name=frontend_cloud
```

## JAVAMS04 Working with Stackdriver Trace

### Enable Stackdriver Trace API

```shell
gcloud services enable cloudtrace.googleapis.com
```

### Spring Cloud GCP Trace starter

```xml
        <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-gcp-starter-trace</artifactId>
        </dependency>
```

### Configure properties

application-cloud.properties

```shell
spring.cloud.gcp.trace.enabled=true
spring.sleuth.sampler.probability=1
spring.sleuth.web.skipPattern=(^cleanup.*|.+favicon.*)
```

### Set up a service account

Create a service account specific to the guestbook application.

```shell
gcloud iam service-accounts create guestbook
```

Add the Editor role for your project to this service account.

```shell
export PROJECT_ID=$(gcloud config list --format 'value(core.project)')
gcloud projects add-iam-policy-binding ${PROJECT_ID} \
  --member serviceAccount:guestbook@${PROJECT_ID}.iam.gserviceaccount.com \
  --role roles/editor
```

Generate the JSON key file to be used by the application to identify itself using the service account.

```shell
gcloud iam service-accounts keys create \
    ~/service-account.json \
    --iam-account guestbook@${PROJECT_ID}.iam.gserviceaccount.com
```

## JAVAMS05 Messaging with Cloud Pub/Sub

### Enable Cloud Pub/Sub API

```shell
gcloud services enable pubsub.googleapis.com
```

### Create a Cloud Pub/Sub topic

```shell
gcloud pubsub topics create messages
```

### Add Spring Cloud GCP Pub/Sub starter

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-gcp-starter-pubsub</artifactId>
</dependency>
```

### Publish message in Java code

```java
import org.springframework.cloud.gcp.pubsub.core.*;

@Autowired
private PubSubTemplate pubSubTemplate;

pubSubTemplate.publish("messages", name + ": " + message);
```

### Create a subscription

Create a Cloud Pub/Sub subscription

```shell
gcloud pubsub subscriptions create messages-subscription-1 \
  --topic=messages
```

Pull messages from the subscription.

```shell
gcloud pubsub subscriptions pull messages-subscription-1
```

Remove message from the subscription by using the auto-acknowledgement switch

```shell
gcloud pubsub subscriptions pull messages-subscription-1 --auto-ack
```


