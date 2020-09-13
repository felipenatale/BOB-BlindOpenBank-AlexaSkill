const Alexa = require('ask-sdk-core');
const https = require('http');
const { createAttr, getAttr, clearAttr } = require('../utils/sessionHandler.js');

module.exports = function(handlerInput, endPoint, jsonBody){
    
    //Simulate various devices and users on the endPoint
    if(!getAttr(handlerInput, 'UserId') && !getAttr(handlerInput, 'DeviceId')){
        let mockUsers = [123,456,789];
        let userNumber = Math.floor(Math.random() * 3);
        
        createAttr(handlerInput, 'UserId', mockUsers[userNumber]);
        createAttr(handlerInput, 'DeviceId', mockUsers[userNumber]);
    }
    
    const jsonBodyString = JSON.stringify(jsonBody);
    
    var options = {
        host: '###.amazonaws.com', //base url
        port: 5001, //port
        path: '', //API path
        method: 'GET', //method
        headers: {
            'Content-Type': 'application/json',
            'UserId': getAttr(handlerInput, 'UserId'), //Alexa.getUserId(handlerInput.requestEnvelope),
            'DeviceId': getAttr(handlerInput, 'DeviceId'), //Alexa.getDeviceId(handlerInput.requestEnvelope),
            'SessionId': handlerInput.requestEnvelope.session.sessionId
        }
    };
    
    //Mapping routes
    if(endPoint === 'balance'){
        options.path += '/balance';
        
    } else if(endPoint === 'login'){
        options.path += '/login';
        options.method = 'POST';
    
    } else if(endPoint === 'today-transactions'){
        options.path += '/transactions';
    
    } else if(endPoint === 'transactions'){
        options.path += '/transactions/' + jsonBody.daysAgo;
        
    } else if(endPoint === 'morning'){
        options.path += '/morning-calls';

    }
    
    //Body length
    if(options.method === 'POST' || options.method === 'PUT'){
        options.headers['Content-Length'] = Buffer.byteLength(jsonBodyString);
    }
    
    return new Promise(((resolve, reject) => {
        
        const request = https.request(options, (response) => {
            
            response.setEncoding('utf8');
            
            let returnData = '';
            
            response.on('data', (chunk) => {
                returnData += chunk;
            });
            
            response.on('end', () => {
                resolve(JSON.parse(returnData));
            });
            
            response.on('error', (error) => {
                reject(error);
            });
            
        });
        
        //Send body if POST or PUT
        if(options.method === 'POST' || options.method === 'PUT')
            request.write(jsonBodyString);
        
        request.end();
        
    }));
    
}