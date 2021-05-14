"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const service = require("./app/services")
const helper = require("./app/helper");

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

// Create AWS resource  (ApiGateway)
const endpoint = new awsx.apigateway.API("serverlessiot", {
    routes: [{
        path: "/data",
        method: "POST",
        eventHandler: service.savedata
    }]
});

// Create AWS resource (ApiGateway edge)
const enpointEdge = new awsx.apigateway.API("serverlessiotedge",{
    routes: [{
        path: "/edge",
        method: "POST",
        eventHandler: helper.processdata 
    }]
})

// Export the name of the bucket
exports.bucketName = bucket.id;
exports.url = endpoint.url;