# AWS CloudWatch SQS

The following nodejs app gathers SQS metrics from cloud watch

## Install

npm install

## Config

Default config is config/config.json and has the following values

    1 {
    2     "id": "ID", // the ID that gets reports. Maybe customer or queue name
    3     "key": "KEY", // AWS KEY
    4     "secret": "SECRET", // AWS Secret
    5     "sqs": "QUEUE" // SQS Queue name
    6 }

You may either change the values there or create your own config and pass it as an environmental variable of NODE_ENV

  $ export NODE_ENV=myconfig

## Running

Simple as running node sqs2statsd.js

  $ node sqs2statsd.js

Or if you want to set your own config using the previously defined way you may also execute it as such:

  $ NODE_ENV=myconfig node sqs2statsd.js
