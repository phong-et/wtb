var wtb = require('./../wtb')
var log = console.log

var defaultBetBalance = 77
let startTime, endTime, duration

// only check indexball avaiable bet or not
var availablePlay = {
  _1: true, _7: true, _13: true, _19: true, _25: true, _31: true, _37: true, _43: true, _49: true, _55: true,
  _2: true, _8: true, _14: true, _20: true, _26: true, _32: true, _38: true, _44: true, _50: true, _56: true,
  _3: true, _9: true, _15: true, _21: true, _27: true, _33: true, _39: true, _45: true, _51: true, _57: true,
  // _4: true, _10: true, _16: true, _22: true, _28: true, _34: 2, _40: true, _46: true, _52: true, _58: true,
  // _5: true, _11: true, _17: true, _23: true, _29: true, _35: true, _41: true, _47: true, _53: true, _59: true,
  // _6: true, _12: true, _18: true, _24: true, _30: true, _36: true, _42: true, _48: true, _54: true, _60: true
}

let broker = { coin: 2, forex: 1 },
  coin = { // brokerId
    Bitcoin: 1,
    Ethereum: 2,
    Bitcoin_Cash: 3,
    Ripple: 4,
    Litecoin: 5,
    IOTA: 6,
    NEM: 7,
    Dash: 8,
    EOS: 9,
    Stellar: 10, // 1 wrong an nhieu
    Cardano: 11,
    NEO: 12
  },
  forex = { // symbolId
    EURUSD: 1,
    AUDUSD: 2,
    GBPUSD: 3,
    USDJPY: 4,
    EURGBP: 5,
    EURJPY: 6,
    USDCAD: 7,
    USDCHF: 8,
    DIAMOND: 9,
    GOLD: 10, // 1 wrong an nhieu
    SILVER: 11, // 1
    OIL: 12 // 1
  },
  betInfo = {
    _1: { // forext
      _1: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _2: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _3: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _4: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _5: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _6: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _7: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _8: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _9: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _10: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _11: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _12: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
    },
    _2: { // coin
      _1: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _2: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _3: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _4: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _5: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _6: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _7: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _8: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _9: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _10: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _11: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
      _12: { count: 0, balance: defaultBetBalance, isWin: false, betChoice: 0 },
    }
  }
function callBet5(token, brokerId, symbolId, betBalance) {
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
    let betChoice = isGreenBall ? wtb.choice.SELL : wtb.choice.BUY
    let currentBetInfo = betInfo['_' + brokerId]['_' + symbolId]
    log('betInfo[_%s][_%s] = %s & Ball[%s].Result = %s', brokerId, symbolId, currentBetInfo.betChoice, indexBall, result)
    if (currentBetInfo.betChoice === result) {
      currentBetInfo.isWin = true
    }
    currentBetInfo.betChoice = betChoice
    currentBetInfo.count++
    log({
      count: currentBetInfo.count,
      isWin: currentBetInfo.isWin,
      betChoice: currentBetInfo.betChoice === 1 ? '1:BUY(Green Ball)' : '2.SELL(Red Ball)'
    })
    if (availablePlay['_' + indexBall]) {
      // history bet = true or lose
      if (!currentBetInfo.isWin) {
        if (currentBetInfo.count < 4) {
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

              //log('timeout:%s', timeout)

              // ==== wait bet result ====
              // TODO
              // Calc timeout exactly
              // GetBall

              wtb.getServerTime(token).then(({ time }) => {
                let secondsAvailablPlay = new Date(time).getSeconds();
                let timeout = (60 - secondsAvailablPlay + 5) * 1000
                log('Timeout waiting result = 60s - %ss(secondsAvailablPlay) + 5s(extra) = %s', secondsAvailablPlay, timeout);
                setTimeout(function () {
                  // check result ball, if win stop lose continue, and update betCount
                  callBet5(token, brokerId, symbolId, defaultBetBalance)
                }, timeout)
              })
            })
        }
        else {
          log('You already have lost 3 times')
          wtb.waitToPlay('Timeout Lose ',token,{indexBall,brokerId,symbolId,defaultBetBalance},callBet5)
        }
      }
      else {
        log('===> You win !!! ')
        // reset old data bet
        betInfo['_' + brokerId]['_' + symbolId].isWin = false
        betInfo['_' + brokerId]['_' + symbolId].betChoice = 0
        betInfo['_' + brokerId]['_' + symbolId].count = 0
        wtb.waitToPlay('Timeout Winning ',token,{indexBall,brokerId,symbolId,defaultBetBalance},callBet5)
      }
    }
    else {
      log('IndexBall out of available position play:availablePlay[_%s]=%s', indexBall, availablePlay['_' + indexBall])
      // wtb.getServerTime(token).then(({ time }) => {
      //   let secondsAvailablPlay = new Date(time).getSeconds();
      //   let secondsRemainBall = (6 - (indexBall % 6)) * 60
      //   let timeout = (60 - secondsAvailablPlay + secondsRemainBall) * 1000
      //   log('==>Timeout Available Position = 60s - %ss(secondsAvailablPlay) + %ss(secondsRemainBall) = %s', secondsAvailablPlay, secondsRemainBall, timeout);
      //   setTimeout(function () {
      //     // check result ball, if win stop lose continue, and update betCount
      //     callBet5(token, brokerId, symbolId, defaultBetBalance)
      //   }, timeout)
      // })
      wtb.waitToPlay('Timeout Available Position ',token,{indexBall,brokerId,symbolId,defaultBetBalance},callBet5)
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
  callBet5(token, broker.forex, forex.EURUSD, defaultBetBalance);
  callBet5(token, broker.forex, forex.AUDUSD, defaultBetBalance);
  callBet5(token, broker.forex, forex.GBPUSD, defaultBetBalance);
  callBet5(token, broker.forex, forex.USDJPY, defaultBetBalance);
  callBet5(token, broker.forex, forex.EURGBP, defaultBetBalance);
  callBet5(token, broker.forex, forex.EURJPY, defaultBetBalance);
  callBet5(token, broker.forex, forex.USDCAD, defaultBetBalance);
  callBet5(token, broker.forex, forex.USDCHF, defaultBetBalance);
  callBet5(token, broker.forex, forex.DIAMOND, defaultBetBalance);
  callBet5(token, broker.forex, forex.GOLD, defaultBetBalance);
  callBet5(token, broker.forex, forex.SILVER, defaultBetBalance);
  callBet5(token, broker.forex, forex.OIL, defaultBetBalance);
  
  callBet5(token, broker.coin, coin.Bitcoin, defaultBetBalance);
  callBet5(token, broker.coin, coin.Bitcoin_Cash, defaultBetBalance);
  callBet5(token, broker.coin, coin.Cardano, defaultBetBalance);
  callBet5(token, broker.coin, coin.Dash, defaultBetBalance);
  callBet5(token, broker.coin, coin.EOS, defaultBetBalance);
  callBet5(token, broker.coin, coin.Ethereum, defaultBetBalance);
  callBet5(token, broker.coin, coin.IOTA, defaultBetBalance);
  callBet5(token, broker.coin, coin.Litecoin, defaultBetBalance);
  callBet5(token, broker.coin, coin.NEM, defaultBetBalance);
  callBet5(token, broker.coin, coin.NEO, defaultBetBalance);
  callBet5(token, broker.coin, coin.Ripple, defaultBetBalance);
  callBet5(token, broker.coin, coin.Stellar, defaultBetBalance);
})