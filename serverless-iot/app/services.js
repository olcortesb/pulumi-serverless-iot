

async function savedata(event){
    console.log(event.body);
    return {
        statusCode: 200,
        body: "OK"
    }
}

module.exports = {savedata}