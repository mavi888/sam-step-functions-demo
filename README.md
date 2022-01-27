# AWS SAM - AWS STEP FUNCTION DEMO

_Infrastructure as code framework used_: AWS SAM
_AWS Services used_: AWS Step Functions, AWS Lambda

## Summary of the demo

In this demo you will see:

- How to configure the infrastructure needed for a Step Function using AWS SAM
- How to configure a state machine using ASL

This demo is part of a video posted in FooBar Serverless channel. You can check the video to see the whole demo.

## Deploy this demo

We will be using AWS SAM and make sure you are running the latest version - at the time of writing, this was 1.37.0 (sam --version).

Deploy the project to the cloud:

```
sam deploy -g # Guided deployments
```

When asked about functions that may not have authorization defined, answer (y)es. The access to those functions will be open to anyone, so keep the app deployed only for the time you need this demo running.

Next times, when you update the code, you can build and deploy with:

```
sam deploy
```

To delete the app:

```
sam delete
```

## Links related to this code

- Video with more details: https://youtu.be/YvxB9WRc2o8
