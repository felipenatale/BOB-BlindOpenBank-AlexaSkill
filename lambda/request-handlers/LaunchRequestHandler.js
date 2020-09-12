const Alexa = require('ask-sdk-core');
const msg = require('../app-messages');

module.exports = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
       
        return handlerInput.responseBuilder
            .speak(msg.welcomeMsg + msg.getBalance)
            .reprompt(msg.getBalance)
            .getResponse();
            
    }
};