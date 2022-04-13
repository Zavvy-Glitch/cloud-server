'use strict';

const AWS = require('aws-sdk');
const S3 = new AWS.S3();

module.exports.uploadFn = async (event) => {
  const uploadFile = {
    name:"name",
    size:"22",
    type:".jpg"
  }
  try {
    const params = {
      Bucket: config.imgloader,
      Key:`upload-to-s3/${uploadFile.name}`,
      Body: JSON.stringify(uploadFile),
      ContentType: 'application/json; charset=utf-8'
    }
    await S3.putObject(params).promise();
    console.log("Upload Completed");
  } catch(error){
    console.log("upload error", error);
  }
};