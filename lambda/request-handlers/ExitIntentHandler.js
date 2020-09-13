const Alexa = require('ask-sdk-core');
const msg = require('../app-messages');

module.exports = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            (
                   Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.PauseIntent'
            );
    },
    handle(handlerInput) {
        
        return handlerInput.responseBuilder
            .addAudioPlayerStopDirective()
            .speak(msg.thanksForUsing)
            .getResponse();
            
    }
}