//const AWS = require('aws-sdk');
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3")

async function savedata(event) {
    console.log(event.body);

    // decode the body of the event
    //const payloadBuffer = new Buffer(event.body, 'base64')
    //const payload = payloadBuffer.toString('ascii')

    const REGION = "us-west-2";

    const s3 = new S3Client({ region: REGION });

    var name = `${new Date().getTime()}.json`;

    console.log(name);

    const putParams = {
        Bucket: 'serverless-iot-1',
        Key: name,
        Body: 'hola'
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