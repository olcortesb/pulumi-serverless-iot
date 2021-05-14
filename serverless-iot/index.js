"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const service = require("./app/services")

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("serverless-iot",{
    bucket: 'serverless-iot-1',
    acl: "public-read",
    corsRules: [{
        allowedHeaders: ["*"],
        allowedMethods: [ "PUT", "POST"],
        allowedOrigins: ["*"],
        exposeHeaders: ["ETag"],
        maxAgeSeconds: 3000,
    }]
});


// // Index.js
// const lambdaRole = new aws.iam.Role("role-payloads-api", {
//     assumeRolePolicy: `{
//      "Version": "2012-10-17",
//      "Statement": [
//        {
//          "Action": "sts:AssumeRole",
//          "Principal": {
//            "Service": "lambda.amazonaws.com"
//          },
//          "Effect": "Allow"
//        }
//      ]
//    }
//    `,
//    })

// // Index.js
// const lambda = new aws.lambda.CallbackFunction("payloads-api-save-lambda", {
//     name: `payloads-api-save-lambda`,
//     role: lambdaRole,
//     callback: service.savedata,
//     environment: {
//         variables: {
//             S3_BUCKET: bucket.id // Look how bucket refers to the bucket we just created - nice!
//         }
//     },
// })





// // Policy for allowing Lambda to interact with S3
// const lambdaS3Policy = new aws.iam.Policy("post-to-s3-policy", {
//     description: "IAM policy for Lambda to interact with S3",
//     path: "/",
//     policy: bucket.arn.apply(bucketArn => `{
//     "Version": "2012-10-17",
//     "Statement": [
//       {
//         "Action": "s3:PutObject", 
//         "Resource": "${bucketArn}/*",
//         "Effect": "Allow"
//       }
//     ]}`)
//   })

// // Attach the policies to the Lambda role
// new aws.iam.RolePolicyAttachment("post-to-s3-policy-attachment", {
//     policyArn: lambdaS3Policy.arn,
//     role: lambdaRole.name
//   })   

// Create AWS resource  (ApiGateway)
const endpoint = new awsx.apigateway.API("serverlessiot" , {
    routes: [{
            path: "/data",
            method: "POST",
            eventHandler: service.savedata
    }]
});

// Export the name of the bucket
exports.bucketName = bucket.id;
exports.url = endpoint.url;