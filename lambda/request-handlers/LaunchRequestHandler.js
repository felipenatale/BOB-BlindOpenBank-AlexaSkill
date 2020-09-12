const Alexa = require('ask-sdk-core');
const msg = require('../app-messages');
const { modifyAttr } = require('../utils/sessionHandler.js');

module.exports = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        
        //Login
        
        modifyAttr(handlerInput, 'lastQuestion', 'consulta-saldo-launch');

        return handlerInput.responseBuilder
            .speak(msg.welcomeMsg + msg.getBalance)
            .reprompt(msg.getBalance)
            .getResponse();
            
    }
};