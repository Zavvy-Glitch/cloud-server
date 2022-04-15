'use strict';

const { Consumer } = require('sqs-consumer');
const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-west-2' })

const sns = new AWS.SNS();

const message = {
  orderId: 1234, 
  customer: 'MOE', 
  vendorId: 'https://sqs.us-west-2.amazonaws.com/195095073964/vendor1'
}
//Needs a topic
const topic = 'arn:aws:sns:us-west-2:195095073964:pickup.fifo' // arn from AWS

const payload = {
  MessageGroupId: 'pickup',
  Message: JSON.stringify(message),
  TopicArn: topic,
};

sns.publish(payload, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});


const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/195095073964/vendor1',
  handleMessage: async (message) => {
    console.log(message.Body)
  }

})

app.start();