'use strict';

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' })

const message = process.argv[2]

const sns = new AWS.SNS();

//Needs a topic
const topic = 'arn:aws:sns:us-west-2:195095073964:message' // arn from AWS

const payload = {
  Message: message, //properties are case sensitive
  TopicArn: topic,
};

sns.publish(payload, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});