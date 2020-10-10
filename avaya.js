var cpaas = require('@avaya/cpaas');
var enums = cpaas.enums;

var connector = new cpaas.SmsConnector({
    accountSid: 'AC777c3e32bfd50ed32de042438c457fe1',
    authToken: '755954fab98f41b7bf0c3f4a4c2f301e'
});

//send sms message
connector.sendSmsMessage({
    to: '+573234831954',
    from: '+14509151424',
    body: 'BIENVENIDO A ROUT APP! Gracias por registrarte en nuestra plataforma',
    statusCallback: 'http://mycallback.url.com',
    statusCallbackMethod: enums.HttpMethod.GET,
    allowMultiple: true
}).then(function (data) {
    console.log(data);

});