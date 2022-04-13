const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async (event) => {
    
    event.Records[0].s3.bucket.name;
    
    console.log(event.Records[0]);
    
    let Bucket = event.Records[0].s3.bucket.name;
    let fileName = event.Records[0].s3.object.key;
    let fileSize = event.Records[0].s3.object.size;
    let Key = 'image.json';
    
    try {
        
        let object = await s3.getObject({ Bucket, Key }).promise();
        let json = JSON.parse(object.Body.toString());
    
        json.push({
            name: fileName,
            size: fileSize,
            type: 'image'
        });
        
        let paramBody = JSON.stringify(json);
        
        const newJson = await s3.putObject({ 
            Bucket, 
            Key, 
            Body: paramBody, 
            ContentType: 'application/json'
        }).promise();
    
        const response = {
            statusCode: 200,
            body: newJson,
        };
        
    return response;
    
    } catch (e) {
        if(e.message === 'The specified key does not exist.') {
            let newManifest = [];
            newManifest.push ({
               name: fileName,
               size: fileSize,
               type: 'image'
            });
            let paramManifest = JSON.stringify(newManifest);
            
            const newMan = await s3.putObject({ 
                Bucket, 
                Key, 
                Body: paramManifest, 
                ContentType: 'application/json'
            }).promise();
            
            console.log(newMan);
            
        } else {
            console.log(e);
        }
    }
    
};