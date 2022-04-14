const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  age: String,
})

const peopleModel = dynamoose.model('people', peopleSchema);

exports.handler = async (event) => {
  console.log(event.pathParameters, event.queryStringParameters);
  
  const newPerson = {
    id: event.queryStringParameters.id,
    name: event.queryStringParameters.name,
    age: event.queryStringParameters.age
  }

  const response = { statusCode: null, body: null }
  try {
    let newRecord = await peopleModel.create(newPerson)
    response.statusCode = 200,
    response.body = JSON.stringify(newRecord)
  } catch (e) {
    response.statusCode = 500;
    response.body = JSON.stringify(new Error('Cannot Read from People'));
    }
    return response;
};
