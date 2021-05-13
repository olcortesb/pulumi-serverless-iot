"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const service = require("./app/services")

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("serverless-iot-1");


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