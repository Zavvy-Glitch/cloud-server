# cloud-server

[Initial Deploys to AWS over GUI](http://cloudserver-env.eba-wmcfeamm.us-west-2.elasticbeanstalk.com/)

[Initial Deploys to AWS over CLI](http://cloud-server-cli-env.eba-wmcfeamm.us-west-2.elasticbeanstalk.com/)

## EB Process --------------------------------------- (in process)

## Lambda Process ---------------------------------------- (in process)
  ### How to use Lambda with S3
  ### Trial and Error
[s3 bucket with lambda function](https://imgloader.s3.us-west-2.amazonaws.com/image.json)
![lambda](https://user-images.githubusercontent.com/84699682/163071527-fec5f8f9-12ae-4a24-8754-3f38bcfeb6af.JPG)

## CAPS with SNS & SQS

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
