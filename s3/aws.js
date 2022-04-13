const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async (event) => {
    
    event.Records[0].s3.bucket.name;
    
    let bucketName = event.Records[0].s3.bucket.name;
    let key = 'image.json';
    
    let object = await s3.getObject({ Bucket: bucketName, Key: key }).promise();
    
    let json = JSON.parse(object.Body.toString());

    
    const response = {
        statusCode: 200,
        body: json,
    };
    return response;
};