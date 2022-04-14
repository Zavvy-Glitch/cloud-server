const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  id: String,
  name: String,
  age: String,
})

const peopleModel = dynamoose.model('people', peopleSchema);

exports.handler = async (event) => {
  console.log(event.pathParameters, event.queryStringParameters);
  
  const id = event.pathParameters.id;

  const updatedPerson = {
    name: event.queryStringParameters.name,
    age: event.queryStringParameters.age
  }

  const response = { statusCode: null, body: null }
  try {
    let updatedRecord = await peopleModel.update(id, updatedPerson)
    response.statusCode = 200,
    response.body = JSON.stringify(`Record updated ${updatedRecord}`)
  } catch (e) {
    response.statusCode = 500;
    response.body = JSON.stringify(new Error('Cannot Read from People'));
    }
    return response;
};
