const Alexa = require('ask-sdk-core');
const msg = require('../app-messages');
const sayMoneyNumber = require('../utils/sayMoneyNumber');
const bobApi = require('../utils/bobApi');

module.exports = {
    canHandle(handlerInput) {
        
        //From ConsultaExtrato intent or ConsultaExtratoDias intent
        return Alexa.getIntentName(handlerInput.requestEnvelope) === 'ConsultaExtrato' || Alexa.getIntentName(handlerInput.requestEnvelope) === 'ConsultaExtratoDias';

    },
    async handle(handlerInput) {
        
        let apiResponse, transactions, speakOutput = '';
        
        //Today transactions
        if(Alexa.getIntentName(handlerInput.requestEnvelope) === 'ConsultaExtrato'){
            apiResponse = await bobApi(handlerInput, 'today-transactions');
            transactions = apiResponse.response.data.transaction;
            speakOutput = msg.yourTransactions + ': ';
            
        //Multiple-days transactions
        } else {
            const daysAgo = Alexa.getSlotValue(handlerInput.requestEnvelope, 'daysAgo');
            apiResponse = await bobApi(handlerInput, 'transactions', {daysAgo});
            transactions = apiResponse.response.data.transaction;
            speakOutput = msg.yourTransactionsOf + ' ' + daysAgo + ' dia' + (daysAgo===1?'':'s') + ' atrás. ';
        }

        //Verify no transations
        if(transactions.length === 0){
            speakOutput += msg.thereIsNoTransactions;
        
        //List transaction
        } else {
            for(let i=0;i<transactions.length;i++){
                let tr = transactions[i];
                speakOutput += (tr.creditDebitIndicator.toLowerCase()==='credit' ? msg.credit : msg.debit)
                            + ' de '
                            + sayMoneyNumber(tr.amount.amount,false)
                            + ' em "' + tr.transactionInformation + '". ';
            }
        }
        
        //Transaction end text
        speakOutput += msg.transacrionsEnd;
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(msg.whatElseHelp)
            .getResponse();

    }
};