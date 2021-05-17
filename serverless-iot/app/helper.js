const axios = require('axios').default;

const url = 'http://www.omdbapi.com/?apikey=9a044c5c&t=';
const urllambda = 'https://kgczmkfv0c.execute-api.us-west-2.amazonaws.com/stage/data';

async function processdata(event){
    const payloadBuffer = new Buffer.from(event.body, 'base64')    
    const payloadString = payloadBuffer.toString('ascii')

    console.log("Payload To String " + payloadString);

    const obj = JSON.parse(payloadString);

    const response = await axios.get(url + obj.message);

    const resp_lambda = await axios.post(
        urllambda, 
        { url: response.data.Poster}
        );

    return {
        statusCode: 200,
        body: response.data.Poster
    };
}

module.exports = {processdata};