const Alexa = require('ask-sdk-core');
const msg = require('../app-messages');
const bobApi = require('../utils/bobApi');
const { getAttr, modifyAttr } = require('../utils/sessionHandler.js');

module.exports = {
    canHandle(handlerInput) {
        
        //Handle only if not logged in
        return getAttr(handlerInput,'logado') !== true;

    },
    async handle(handlerInput) {
        
        //User said the four digits passowd
        if(Alexa.getIntentName(handlerInput.requestEnvelope) === 'SenhaUsuarioIntent' && Alexa.getSlotValue(handlerInput.requestEnvelope, 'senha')){
            
            const loginObj = {
                'password': Alexa.getSlotValue(handlerInput.requestEnvelope, 'senha')
            }
            
            //Login API
            const apiResponse = await bobApi(handlerInput, 'login', loginObj);
            
            //Correct password
            if(apiResponse.status === 404){
            
                modifyAttr(handlerInput, 'logado', true);
                
                return handlerInput.responseBuilder
                    .speak(msg.correctPassword + ' ' + msg.howCanIHelp)
                    .reprompt(msg.howCanIHelp)
                    .getResponse();
            
            //Wrong password  
            } else {
                
                return handlerInput.responseBuilder
                    .speak(msg.wrongPassword)
                    .getResponse();
                
            }
            
        }

        //User tried some other intent withou login
        return handlerInput.responseBuilder
            .speak(msg.authFirst + ' ' + msg.msgPassword)
            .reprompt(msg.msgPassword)
            .getResponse();
            
    }
}