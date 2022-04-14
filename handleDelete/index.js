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

  const response = { statusCode: null, body: null }
  try {
    let deletedRecord = await peopleModel.delete(id)
    response.statusCode = 200,
    response.body = JSON.stringify('Record Deleted',deletedRecord)
  } catch (e) {
    response.statusCode = 500;
    response.body = JSON.stringify(new Error('Cannot Delete from People'));
    }
    return response;
};
