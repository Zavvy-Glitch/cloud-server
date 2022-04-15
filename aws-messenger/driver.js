'use strict';

const { Consumer } = require('sqs-consumer');
const { Producer } = require('sqs-producer')
const Chance = require('chance');

const chance = new Chance();

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/195095073964/packages.fifo',
  handleMessage: async (message) => {
    let body = JSON.parse(message.Body)
    let vendor = JSON.parse(body.Message)

    console.log(body)

    let vendorId = vendor.vendorId;
    let orderId = vendor.orderId;

    try {
      setTimeout( async () => {
        const producer = Producer.create({
          queueUrl: vendorId,
          region: 'us-west-2',
        });
        await producer.send([{
          id: chance.guid(),
          body: `Parcel delivered with Order#: ${orderId}`
        }])
      }, 3000)
    } catch (error) {
      console.log('Error sending Message', error)
    }
  },
});



app.start();