const Alexa = require('ask-sdk-core');
const msg = require('../app-messages');
const bobApi = require('../utils/bobApi');

module.exports = {
    canHandle(handlerInput) {
        
        //From MorningCalls intent
        return Alexa.getIntentName(handlerInput.requestEnvelope) === 'MorningCalls';
        
    },
    async handle(handlerInput) {
        
        //Ask API
        let apiResponse = await bobApi(handlerInput, 'morning');
        
        //Get api response
        let audioURL = apiResponse.audioURL;

        return handlerInput.responseBuilder
            .speak(msg.openingMorningCalls)
            .addAudioPlayerPlayDirective('REPLACE_ALL', audioURL, Math.random(), 0, null)
            .getResponse();
            
    }
};