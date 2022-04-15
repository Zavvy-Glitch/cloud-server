# cloud-server

[Initial Deploys to AWS over GUI](http://cloudserver-env.eba-wmcfeamm.us-west-2.elasticbeanstalk.com/)

[Initial Deploys to AWS over CLI](http://cloud-server-cli-env.eba-wmcfeamm.us-west-2.elasticbeanstalk.com/)

## EB Process --------------------------------------- (in process)

## Lambda Process ---------------------------------------- (in process)
  ### How to use Lambda with S3
  ### Trial and Error
[s3 bucket with lambda function](https://imgloader.s3.us-west-2.amazonaws.com/image.json)
![lambda](https://user-images.githubusercontent.com/84699682/163071527-fec5f8f9-12ae-4a24-8754-3f38bcfeb6af.JPG)

## AWS GateWay / Lambda / DynamoDB
[API GateWay](https://uj60dllyc9.execute-api.us-west-2.amazonaws.com/Production/people)
  ### Features:
   - Create a single resource REST API, constructed using AWS Cloud Services

    - Database: DynamoDB
        - 1 Table

    - Routing: API Gateway
        - POST
            - /people - Given a JSON body, inserts a record into the database
            - returns an object representing one record, by its id (##)
        - GET
            - /people - returns an array of objects representing the records in the database
            - /people/id - returns an object representing one record, by its id (##)
        - PUT
            - /people/id - Given a JSON body and an ID (##), updates a record in the database
            - returns an object representing one record, by its id (##)
        - DELETE
            - /people/## - Given an id (##) removes the matching record from the database
            - returns an empty object
            
        - CRUD Operation Handlers: Lambda Functions
  
  ## CAPS with SNS & SQS
   ### Features:
   - `vendor.js` should be an SQS Subscriber
    - Connect it to the pickup topic by using it’s URL/ARN
        - Set it up to produce a new message to the “pickup” topic every few seconds, simulating an order
          - The order id and customer name can be randomized
          - Include the ARN to the vendor’s personal delivery queue
     - Connect it to their own vendor queue by using it’s URL/ARN
     - As drivers deliver, this app will continually poll the queue, retrieve them, and log details out to the console
     - You should be able to disconnect this app, and see deliveries that happened while the app was not running
  
   - `driver.js`
      - Connect to the pickup queue and get only the next package
      - Wait a random number of seconds
      - Post a message to the Vendor’s “delivered” Queue (using the supplied arn in the order/message) to alert them of the delivery
      - Repeat until the queue is empty
   ![sqs_sns](https://user-images.githubusercontent.com/84699682/163502543-ffa0cd2c-f774-4c58-8223-edf21851ba81.jpg)

   ![sns_sqsOutput](https://user-images.githubusercontent.com/84699682/163502538-45530d78-ba60-4d10-94ad-2808748be8a6.JPG)

  
