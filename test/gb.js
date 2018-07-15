
var wtb = require('../wtb')
var log = console.log

wtb.getToken().then(token => {
  // log(token)
  // Test - Get - Ball
  wtb.getBall(token, {
    brokerId: wtb.broker.forex,
    symbolId: wtb.forex.AUDUSD
  }).then((body,headers) => {
    log(body);
    log(headers)
  }, (err,headers) => {
    log(err)
    log(headers)
  })

})
