//const AWS = require('aws-sdk');
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3")
const REGION = "us-west-2";

async function savedata(event) {
    // decode the body of the event
    const payloadBuffer = new Buffer.from(event.body, 'base64')
    const payload = payloadBuffer.toString('ascii')
    
    const s3 = new S3Client({ region: REGION });

    const putParams = {
        Bucket: 'serverless-iot-1',
        Key: `${new Date().getTime()}.json`,
        Body: payload
    }

    try {
        const data = await s3.send(new PutObjectCommand(putParams));
        console.log("Successfully uploaded object: ");
    } catch (err) {
        console.log("Error from s3 save", err);
    }

    return {
        statusCode: 200,
        body: "ok"
    }
}

module.exports = { savedata }