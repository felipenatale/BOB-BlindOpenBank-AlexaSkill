const Alexa = require('ask-sdk-core');
const msg = require('../app-messages');

module.exports = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        
        return handlerInput.responseBuilder
            .speak(msg.generalHelp)
            .reprompt(msg.generalHelp)
            .getResponse();
            
    }
}