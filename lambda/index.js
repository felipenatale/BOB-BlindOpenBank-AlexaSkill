const Alexa = require('ask-sdk-core');

//Launch module
const LaunchRequestHandler = require('./request-handlers/LaunchRequestHandler');

//Custom BOB Bank modules
const BalanceIntentHandler = require('./request-handlers/BalanceIntentHandler');
const MorningCallsIntentHandler = require('./request-handlers/MorningCallsIntentHandler');
const TransactionIntentHandler = require('./request-handlers/TransactionIntentHandler');

//Default modules
const HelpHandler = require('./request-handlers/HelpHandler');
const ExitIntentHandler = require('./request-handlers/ExitIntentHandler');
const FallbackIntentHandler = require('./request-handlers/FallbackIntentHandler');
const SessionEndedRequestHandler = require('./request-handlers/SessionEndedRequestHandler');
const IntentReflectorHandler = require('./request-handlers/IntentReflectorHandler');
const ErrorHandler = require('./request-handlers/ErrorHandler');

//Add modules on lambda
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        BalanceIntentHandler,
        MorningCallsIntentHandler,
        TransactionIntentHandler,
        HelpHandler,
        ExitIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler
    )
    .addErrorHandlers(ErrorHandler)
    .withCustomUserAgent('BOB-BANK/ALEXA-SKILL/v0.1')
    .lambda();