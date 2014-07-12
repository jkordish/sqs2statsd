#!/usr/bin/env node
module.paths.push(process.env.NODE_PATH);
var target;
var config = process.env.NODE_ENV || 'config.json';
var funnel = require('funnel/funnel');

console.log('Test config file set to: ' + config);
target = require('./config/' + config);

var source = funnel.cloudwatch({
  services: {
    'SQS-NumberOfMessagesSent': {
      namespace: 'AWS/SQS',
      metric: 'NumberOfMessagesSent',
      name: 'QueueName',
      value: target.sqs,
      unit: 'Count',
      type: 'Sum',
      period: '300',
      time: '10',
      node: target.id,
    },
    'SQS-NumberOfMessagesReceived': {
      namespace: 'AWS/SQS',
      metric: 'NumberOfMessagesReceived',
      name: 'QueueName',
      value: target.sqs,
      unit: 'Count',
      type: 'Sum',
      period: '300',
      time: '10',
      node: target.id,
    },
  },
  from: { // utilize the cloudwatch read only creds
    id: target.key,
    secret: target.secret,
  }
});
funnel.collect(source).display();
