const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  age: String,
})

const peopleModel = dynamoose.model('people', peopleSchema);

exports.handler = async (event) => {
  console.log(event.pathParameters, event.queryStringParameters);
  
  const response = { statusCode: null, body: null }
  //which reference table
  // create a schema
  try {
    let peopleRecord = await peopleModel.scan().exec()
    response.statusCode = 200,
    response.body = JSON.stringify(peopleRecord)
  } catch (e) {
    response.statusCode = 500;
    response.body = JSON.stringify(new Error('Cannot Read from People'));
    }
    return response;
};
