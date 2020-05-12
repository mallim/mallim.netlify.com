---
title: "Google Cloud Laundry List"
excerpt: "Notes from Building Scalable Java Microservices with Spring Boot and Spring Cloud"
date: 2020-05-07 07:33:00
author: mallim
tags:
  - coursera
  - google cloud
  - spring
---

Notes from the [Building Scalable Java Microservices with Spring Boot and Spring Cloud](https://www.coursera.org/learn/google-cloud-java-spring) in [Coursera](https://www.coursera.org)

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

## JAVAMS06 Integrating Cloud Pub/Sub with Spring

### Add the Spring Integration core

```xml
<dependency>
  <groupId>org.springframework.integration</groupId>
  <artifactId>spring-integration-core</artifactId>
</dependency>
```

### Create an outbound message gateway

Add OutboundGateway.java in guestbook-frontend

```java
package com.example.frontend;

import org.springframework.integration.annotation.MessagingGateway;

@MessagingGateway(defaultRequestChannel = "messagesOutputChannel")
public interface OutboundGateway {
        void publishMessage(String message);
}
```

### Publish the message

```java
@Autowired
private OutboundGateway outboundGateway;

...

 outboundGateway.publishMessage(name + ": " + message);
```

### Bind the output channel to the Cloud Pub/Sub topic

```java
@Bean
@ServiceActivator(inputChannel = "messagesOutputChannel")
public MessageHandler messageSender(PubSubTemplate pubsubTemplate) {
  return new PubSubMessageHandler(pubsubTemplate, "messages");
}
```

## JAVAMS08 Using Cloud Platform APIs

### Enable Vision API

```shell
gcloud services enable vision.googleapis.com
```

### Add the Vision client library

```xml
<dependency>
  <groupId>com.google.cloud</groupId>
  <artifactId>google-cloud-vision</artifactId>
</dependency>
```

### Add a GCP credential scope for Spring

application.properties

```shell
spring.cloud.gcp.credentials.scopes=https://www.googleapis.com/auth/cloud-platform
```

### Create a Vision API client bean

```java
import java.io.IOException;
import com.google.cloud.vision.v1.*;
import com.google.api.gax.core.CredentialsProvider;

// This configures the Vision API settings with a
// credential using the the scope we specified in
// the application.properties.
@Bean
public ImageAnnotatorSettings imageAnnotatorSettings(
  CredentialsProvider credentialsProvider)
                throws IOException {
  return ImageAnnotatorSettings.newBuilder()
      .setCredentialsProvider(credentialsProvider).build();
}

@Bean
public ImageAnnotatorClient imageAnnotatorClient(
                ImageAnnotatorSettings settings)
                throws IOException {
  return ImageAnnotatorClient.create(settings);
}
```

### Analyze the image

```java
import com.google.cloud.vision.v1.*;

    @Autowired
    private ImageAnnotatorClient annotatorClient;

    private void analyzeImage(String uri) {
        // After the image was written to GCS,
        // analyze it with the GCS URI.It's also
        // possible to analyze an image embedded in
        // the request as a Base64 encoded payload.
        List<AnnotateImageRequest> requests = new ArrayList<>();
        ImageSource imgSrc = ImageSource.newBuilder()
             .setGcsImageUri(uri).build();
        Image img = Image.newBuilder().setSource(imgSrc).build();
        Feature feature = Feature.newBuilder()
             .setType(Feature.Type.LABEL_DETECTION).build();
        AnnotateImageRequest request = AnnotateImageRequest
             .newBuilder()
             .addFeatures(feature)
             .setImage(img)
             .build();
        requests.add(request);
        BatchAnnotateImagesResponse responses =
              annotatorClient.batchAnnotateImages(requests);
           // We send in one image, expecting just
           // one response in batch
        AnnotateImageResponse response =responses.getResponses(0);
        System.out.println(response);
    }
```

### Setup service account

```shell
export PROJECT_ID=$(gcloud config list --format 'value(core.project)')
gcloud iam service-accounts create guestbook

gcloud projects add-iam-policy-binding ${PROJECT_ID} \
  --member serviceAccount:guestbook@${PROJECT_ID}.iam.gserviceaccount.com \
  --role roles/editor

gcloud iam service-accounts keys create \
    ~/service-account.json \
    --iam-account guestbook@${PROJECT_ID}.iam.gserviceaccount.com
```

## JAVAMS09 Deploying to App Engine

### Initialize App Engine

```shell
gcloud app create --region=us-central
```

### Make the guestbook frontend App Engine friendly

```xml
<plugin>
  <groupId>com.google.cloud.tools</groupId>
  <artifactId>appengine-maven-plugin</artifactId>
  <version>1.3.1</version>
  <configuration>
    <version>1</version>
  </configuration>
</plugin>
```

appengine-web.xml

```xml
<appengine-web-app xmlns="http://appengine.google.com/ns/1.0">
  <service>default</service>
  <version>1</version>
  <threadsafe>true</threadsafe>
  <runtime>java8</runtime>
  <instance-class>B4_1G</instance-class>
  <sessions-enabled>true</sessions-enabled>
  <manual-scaling>
    <instances>2</instances>
  </manual-scaling>
  <system-properties>
    <property name="spring.profiles.active" value="cloud" />
  </system-properties>
</appengine-web-app>
```

### Configure the frontend application to use the backend URL

```shell
gcloud beta runtime-config configs variables set messages.endpoint \
  "https://guestbook-service-dot-${PROJECT_ID}.appspot.com/guestbookMessages" \
  --config-name frontend_cloud
```

## Deploy the frontend application to App Engine

```shell
./mvnw appengine:deploy -DskipTests

gcloud app browse
```

## JAVAMS12 Deploying to Kubernetes Engine

### Create a Kubernetes Engine cluster

Enable Kubernetes Engine API

```shell
gcloud services enable container.googleapis.com
```

Create a Kubernetes Engine cluster that has Cloud Logging and Monitoring enabled.

```shell
gcloud container clusters create guestbook-cluster \
    --zone=us-central1-a \
    --num-nodes=2 \
    --machine-type=n1-standard-2 \
    --enable-autorepair \
    --enable-cloud-monitoring \
    --enable-cloud-logging
```

### Containerize the applications

Enable Container Registry API.

```shell
gcloud services enable containerregistry.googleapis.com
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

Check the Kubernetes server version to verify that the Kubernetes Engine cluster

```shell
kubectl version
```

Create the secret using the service account credential file.

```shell
kubectl create secret generic guestbook-service-account \
  --from-file=$HOME/service-account.json
```

Verify that the service account is stored.

```shell
kubectl describe secret guestbook-service-account
```

Deploy the updated Kubernetes deployments.

```shell
kubectl apply -f ~/kubernetes/
```

Check the status of the frontend application deployment.

```shell
kubectl get svc guestbook-frontend
```

Check the status of all of the services running on your Kubernetes Engine cluster.

```shell
kubectl get svc
```

## JAVAMS13 Working with Kubernetes Monitoring

### Enable Cloud Monitoring and view the Cloud Kubernetes Monitoring dashboard

## Fix for a runtime issue

```xml
<dependency>
  <groupId>javax.xml.bind</groupId>
  <artifactId>jaxb-api</artifactId>
  <version>2.3.1</version>
</dependency>
<dependency>
  <groupId>javassist</groupId>
  <artifactId>javassist</artifactId>
  <version>3.12.1.GA</version>
</dependency>
```

qwiklabs-gcp-04-d4caf43d907d
