var wtb = require('../wtb')
var log = console.log
var betBalance = 10
let startTime, endTime, duration,i=0,j=0
var broker = [
  {
    id: 1,
    name: 'FOREX',
    values: [
      1,// EURUSD
      2,// AUDUSD
      3,// GBPUSD
      4,// USDJPY
      5,// EURGBP
      6,// EURJPY
      7,// USDCAD
      8,// USDCHF
      9,// DIAMOND
      10,// GOLD
      11,// SILVER
      12 // OIL
    ]
  }, {
    id: 2,
    name: 'COIN',
    values: [
      1,// Bitcoin
      2,// Ethereum
      3,// Bitcoin Cash
      4,// Ripple
      5,// Litecoin
      6,// IOTA
      7,// NEM
      8,// Dash
      9,// EOS
      10,// Stellar
      11,// Cardano
      12 // NEO
    ]
  }
]
// only check indexball avaiable bet or not
var availablePlay = {
  _1: true, _7: true, _13: true, _19: true, _25: true, _31: true, _37: true, _43: true, _49: true, _55: true,
  _2: true, _8: true, _14: true, _20: true, _26: true, _32: true, _38: true, _44: true, _50: true, _56: true,
  _3: true, _9: true, _15: true, _21: true, _27: true, _33: true, _39: true, _45: true, _51: true, _57: true,
  // _4: true, _10: true, _16: true, _22: true, _28: true, _34: 2, _40: true, _46: true, _52: true, _58: true,
  // _5: true, _11: true, _17: true, _23: true, _29: true, _35: true, _41: true, _47: true, _53: true, _59: true,
  // _6: true, _12: true, _18: true, _24: true, _30: true, _36: true, _42: true, _48: true, _54: true, _60: true
}
// 
var historyBet = {
  _1: true, _7: true, _13: true, _19: true, _25: true, _31: true, _37: true, _43: true, _49: true, _55: true,
  _2: true, _8: true, _14: true, _20: true, _26: true, _32: true, _38: true, _44: true, _50: true, _56: true,
  _3: true, _9: true, _15: true, _21: true, _27: true, _33: 1, _39: true, _45: true, _51: true, _57: true,
  _4: true, _10: true, _16: true, _22: true, _28: true, _34: 2, _40: true, _46: true, _52: true, _58: true
  // _5: true, _11: true, _17: true, _23: true, _29: true, _35: true, _41: true, _47: true, _53: true, _59: true,
  // _6: true, _12: true, _18: true, _24: true, _30: true, _36: true, _42: true, _48: true, _54: true, _60: true
}
// Phien ban tam hoan thien tinh nang bet 24 cap check history and lock not availabe bet zone
function callBet4(token, brokerId, symbolId, betBalance) {
  startTime = new Date()
  wtb.getBall(token, {
    brokerId: brokerId,
    symbolId: symbolId
  }).then(({ body }) => {
    let balls = body
    let indexBall = balls.length;
    let result = balls[(balls.length - 1)].Result
    let isGreenBall = result === 2 ? false : true // (green or yellow)
    log('%s=>%s Ball[%s].Result = %s is:%s', brokerId == 1 ? 'FOREX' : 'COIN', wtb.getKey(wtb[brokerId == 1 ? 'forex' : 'coin'], symbolId), indexBall, result, isGreenBall ? 'Green' : 'Red')
    if (historyBet['_' + indexBall]) {
      historyBet['_' + indexBall] = result
    }
    if (availablePlay['_' + indexBall]) {
      // history bet = true or lose
      if (historyBet['_' + (indexBall - 1)] || historyBet['_' + (indexBall - 1)] != result) {
        wtb.bet(token, {
          brokerId: brokerId,
          symbolId: symbolId,
          BetChoice: isGreenBall ? wtb.choice.SELL : wtb.choice.BUY, // buy 1, sell 2
          BetFrom: 'w',
          Stake: betBalance, // $
        })
          .then(result => {
            //endTime = new Date()
            //duration = wtb.dateDiff(startTime, endTime, 'seconds')
            //log(`startTime = ${startTime.toLocaleTimeString()}`)
            //log(`endTime = ${endTime.toLocaleTimeString()}`)
            //log(`duration: ${duration}`)
            //log('Result bet:')
            //log(result)
            //let timeout = 30000 - (parseInt(duration) * 1000)
            log('i=%s j=%s | broker.length=:%s && broker[%s].values.length=%s', i, j, broker.length, i, broker[i].values.length)
            //log('timeout:%s', timeout)
            if (i < broker.length && j < broker[i].values.length - 1) {
              j++
              callBet4(token, broker[i].id, broker[i].values[j], betBalance)
            }
            else {
              if (i < broker.length - 1) {
                j = 0
                i++
                log('i=%s j=%s', i, j)
                log('broker.length=:%s && broker[%s].values.length=%s', broker.length, i, broker[i].values.length)
                callBet4(token, broker[i].id, broker[i].values[j], betBalance)
              }
              else {
                log('done')
              }
            }
          })
      }
      else {
        log('You win !!! ')
        log('historyBet["_%s"] = %s & Ball[%s].Result = %s', indexBall - 1, historyBet['_' + (indexBall - 1)], indexBall, result)
      }
    }
    else {
      log('IndexBall out of available position play:availablePlay[_%s]=%s', indexBall, availablePlay['_' + indexBall])
      log(`
      1 7	13	19	25	31	37	43	49	55 // available
      2 8	14	20	26	32	38	44	50	56 // available
      3 9	15	21	27	33	39	45	51	57 // available
      4 10	16	22	28	34	40	46	52	58 
      5 11	17	23	29	35	41	47	53	59 
      6 12	18	24	30	36	42	48	54	60 
      `) 
    }
  })
}
wtb.getToken().then(token => {
  callBet4(token, broker[0].id, broker[0].values[0], betBalance);
})