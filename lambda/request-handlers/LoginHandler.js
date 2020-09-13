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
            if(apiResponse.status === 200){
            
                //Nickname
                const nickname = apiResponse.response[0].account_info.Data.Account[0].Nickname;
                
                //Update session
                modifyAttr(handlerInput, 'logado', true);
                modifyAttr(handlerInput, 'nome', nickname);
                
                //Name
                //const name = apiResponse.response[0].account_info.Data.Account[0].Account.Name;
                
                return handlerInput.responseBuilder
                    .speak('Olá ' + nickname + '! ' + msg.correctPassword + ' ' + msg.howCanIHelp)
                    .reprompt(msg.howCanIHelp)
                    .getResponse();
            
            //Wrong password  
            } else {
                
                return handlerInput.responseBuilder
                    .speak(msg.wrongPassword)
                    .reprompt('Vamos tentar novamente! ' + msg.msgPassword)
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