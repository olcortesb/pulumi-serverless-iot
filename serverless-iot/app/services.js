var AWS = require('aws-sdk');
var s3 = new AWS.S3();

async function savedata(event){
    console.log(event.body);

    const payloa = event.body.toString('asccii');

    const putParam = {
        Bucket: 'serverless-iot-1-8b49e8e',
        key: `${new Date().getTime()}.json`,
        body: payloa
    }

    await new Promise((resolve,reject)=>{
        s3.putObject(putParam, function(err,data){
            if(err){
                reject(err);
            } else  {
                resolve(data);
            }
        })
    })

    return {
        statusCode: 200,
        body: "OK"
    }
}

module.exports = {savedata}