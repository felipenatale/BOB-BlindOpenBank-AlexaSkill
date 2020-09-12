const Alexa = require('ask-sdk-core');

//Launch module
const LaunchRequestHandler = require('./request-handlers/LaunchRequestHandler');

//Custom BOB Bank modules
const BalanceIntentHandler = require('./request-handlers/BalanceIntentHandler');

//Default modules
const HelpHandler = require('./request-handlers/HelpHandler');
const CancelAndStopIntentHandler = require('./request-handlers/CancelAndStopIntentHandler');
const FallbackIntentHandler = require('./request-handlers/FallbackIntentHandler');
const SessionEndedRequestHandler = require('./request-handlers/SessionEndedRequestHandler');
const IntentReflectorHandler = require('./request-handlers/IntentReflectorHandler');
const ErrorHandler = require('./request-handlers/ErrorHandler');

//Add modules on lambda
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        BalanceIntentHandler,
        HelpHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(ErrorHandler)
    .withCustomUserAgent('BOB-BANK/ALEXA-SKILL/v0.1')
    .lambda();