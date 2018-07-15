var wtb = require('./wtb')
var log = console.log
// login by account
// wtb.loadForm().then(data => {
//   //log(data.form)
//   //log(data.jar)
//   wtb.login(data.form,data.jar).then(body =>{
//     log(body)
//   },err =>{
//     log(err)
//   })
// },(err)=>{
//   log(err)
// });

// login by token
// wtb.loginByToken('__cfduid=dd9ba26fce26de6804f42a1c44c7635711530694744; ASP.NET_SessionId=ohitaw3d0rfvkgt3zttlqzwd; .ASPXFORMSAUTH=F6FDF872F9B5B763E7F0394928C3B067FA85738D6613A1A0E7BCDEFE1F157DA89DD04315980344E92E3A43AF73DFF7E1E25D31834BDD18908A9948BBE59D43D4A236A4F642BDAB7C728BA7D306D250D9585F03685AD9807C397704B8D75DCE9E54AF82B61F058CADE6157FD52830CEDA50600A5408AB870597F19BDAAB761100BCC04EA2CA67773A22BF1340520AA17D2061D946EFB43757B2AD214E85B8943AD3D1BEDC6043F3BF381F631DD1E9C2B68156E5FC6325C8B685B441C4DE427A94EFA9B4269748FB8EA419BAF1696F4BF932EFFF88DF18C6E731BC46AA1933DD52E94325112C58AE1A2AA3ABF2F0499BC1298FF402C0D357625E35AC123F7854FD6EB6E60757F634E433C6F12434BC70E8AE682E13CD6D95BF89CBA84D2E72AE0CFB19D7D2EFF6139E4E498521BBB9387BCAB67A7FD1EE6B583DA27AC6A80D6D54212FC17B2FD200BAF0D82F1784728EF9B7DD630B649FF7A48EB33D458E0147B5EAFFFF980A478C6DFC5955FC12D104BD51590C63596E26BDE22773ABF461A029FA51F3350CDD6FC2D9F795FFD18B37C3AB9317F84F05E66F3D163445CEF70A7B383235DE7F3765FFFD0F687EE3CDB82C9F4F0FE3448D582EF5CAEBC9DC862493BF322073C20CDA7FC392572C5B91EC9A').then(body => {
//   log(body)
// })

// get balance
// wtb.getBalance('__cfduid=dd9ba26fce26de6804f42a1c44c7635711530694744; ASP.NET_SessionId=ohitaw3d0rfvkgt3zttlqzwd; .ASPXFORMSAUTH=F6FDF872F9B5B763E7F0394928C3B067FA85738D6613A1A0E7BCDEFE1F157DA89DD04315980344E92E3A43AF73DFF7E1E25D31834BDD18908A9948BBE59D43D4A236A4F642BDAB7C728BA7D306D250D9585F03685AD9807C397704B8D75DCE9E54AF82B61F058CADE6157FD52830CEDA50600A5408AB870597F19BDAAB761100BCC04EA2CA67773A22BF1340520AA17D2061D946EFB43757B2AD214E85B8943AD3D1BEDC6043F3BF381F631DD1E9C2B68156E5FC6325C8B685B441C4DE427A94EFA9B4269748FB8EA419BAF1696F4BF932EFFF88DF18C6E731BC46AA1933DD52E94325112C58AE1A2AA3ABF2F0499BC1298FF402C0D357625E35AC123F7854FD6EB6E60757F634E433C6F12434BC70E8AE682E13CD6D95BF89CBA84D2E72AE0CFB19D7D2EFF6139E4E498521BBB9387BCAB67A7FD1EE6B583DA27AC6A80D6D54212FC17B2FD200BAF0D82F1784728EF9B7DD630B649FF7A48EB33D458E0147B5EAFFFF980A478C6DFC5955FC12D104BD51590C63596E26BDE22773ABF461A029FA51F3350CDD6FC2D9F795FFD18B37C3AB9317F84F05E66F3D163445CEF70A7B383235DE7F3765FFFD0F687EE3CDB82C9F4F0FE3448D582EF5CAEBC9DC862493BF322073C20CDA7FC392572C5B91EC9A')
// .then(balance => {
//   log(balance)
// })

// wtb.getBall('__cfduid=dd9ba26fce26de6804f42a1c44c7635711530694744; .ASPXFORMSAUTH=18E1233DC3D8F9F491D8E2DD8BCE6D64309D38CA30FB2E2E8622C2E6CAE233269BA8E773136B39A7BFDB8E675D152C43D55BCD5BEB7B72B567571978131F670DBEC3C2C975DD4392253DF7649154B5BCC1C997C72DE5C05E2E5DCB0C321E4C8DA4274B3B7B6AFD1C24038DEC1AF1E370B8ABFFED920760787EC244F0262FA5D15661F364119CBFA34CF3B58BEBCB943C6444E1FD1F95BA2B747B0E8A28314600BC07D645550864238A1E7C0F26C673C37F249A94B46F349AA3688B340EB5463E44A01C996E0558F76F3DFF3825D891ABB82960A2E4B95F88FA96705198CFEC8669DD5362F48F22904190C78CDCF0E9570367886C2CA620BF0E7A01A553E32B238C9795D1E09AB391DE65465CB0D3346B873F644596ED6FACF2E280CF67AF2719F6BE91AC2719F52CFAEB5094673760FB5749F4883C6361580890DF3C5ED7F4D7526CACA2DD621CA0F48B88CD605AC928A14DB73C35E07B6A77A7773C658C186D5F6B54BF5617825B500AC9A90F4FF840C23AA416E13933EF5E654B033E9133C8DEF47EB743CAD9E079F2D9E9737076A05AA1A07E03461ED7639A9F35B49A2FC3D1D00E1CEE62DDFD4AC508976DF156D35AFF62FBB1255986B771860FC1690F91F86A629F14F5FAEF93F178844DD24C79'
// , {
//   brokerId: wtb.borker.forex,
//   symbolId: wtb.forex.AUDUSD
// }).then(body => {
//   //log(body);
//   log(JSON.parse(body)[0])
// }, err => {
//   log(err)
// })

// wtb.bet('__cfduid=dd9ba26fce26de6804f42a1c44c7635711530694744; .ASPXFORMSAUTH=18E1233DC3D8F9F491D8E2DD8BCE6D64309D38CA30FB2E2E8622C2E6CAE233269BA8E773136B39A7BFDB8E675D152C43D55BCD5BEB7B72B567571978131F670DBEC3C2C975DD4392253DF7649154B5BCC1C997C72DE5C05E2E5DCB0C321E4C8DA4274B3B7B6AFD1C24038DEC1AF1E370B8ABFFED920760787EC244F0262FA5D15661F364119CBFA34CF3B58BEBCB943C6444E1FD1F95BA2B747B0E8A28314600BC07D645550864238A1E7C0F26C673C37F249A94B46F349AA3688B340EB5463E44A01C996E0558F76F3DFF3825D891ABB82960A2E4B95F88FA96705198CFEC8669DD5362F48F22904190C78CDCF0E9570367886C2CA620BF0E7A01A553E32B238C9795D1E09AB391DE65465CB0D3346B873F644596ED6FACF2E280CF67AF2719F6BE91AC2719F52CFAEB5094673760FB5749F4883C6361580890DF3C5ED7F4D7526CACA2DD621CA0F48B88CD605AC928A14DB73C35E07B6A77A7773C658C186D5F6B54BF5617825B500AC9A90F4FF840C23AA416E13933EF5E654B033E9133C8DEF47EB743CAD9E079F2D9E9737076A05AA1A07E03461ED7639A9F35B49A2FC3D1D00E1CEE62DDFD4AC508976DF156D35AFF62FBB1255986B771860FC1690F91F86A629F14F5FAEF93F178844DD24C79',
//   {
//     brokerId: wtb.borker.forex, // forex 1, coin 2
//     symbolId: wtb.forex.DIAMOND, // curentcy type
//     BetChoice: wtb.choice.BUY, // buy 1, sell 2
//     BetFrom: 'w',
//     Stake: 5, // $
//   }
// ).then(body => {
//   log(body), err => {
//     log(err)
//   }
// })

// setup algorithm 
var tokens = [
  '__cfduid=dd9ba26fce26de6804f42a1c44c7635711530694744; .ASPXFORMSAUTH=935776C170C529527E0D34EC990F5F6F2635674CB956763945C133E6D3E335CBDF050EE16A200FB9AF21CA09EF1B76D71831C1B17EA213748CD0FFFC29E9816779D88760FBC2332E28F8C5EA7351607482D3796B3C808D36FCD41F0FCF0A657ECA9FE3BAEF4716456B7D7D0FC6446267F7AE45DD846EA30A71A2A6AD410BFEBAACA7FB920D9D1321889956AEDC9C3BBA73474509CE24527B9049BFFE7E06E65A9AD4BA981C6E3B960BA98A476948BA2E70C6619766721FF096CBE4D3817B11EE4FD877DE86BC93897579C5B8E2CC49D3BFD26971F2B1475A7870DF3BAB7F2FE305D4D0B4C4113499937D3DFBE4530066B7F75AF044D0F2566B43FFFD6B06B45436C4FA6F9A0D18376C2F42EAF4D1F25378A7D50D279567ACFF5627F7D05AE36844C3007E6DFA5B79EFDC64BB10F000950C2A47EDBA1BB67AE995F1A5A9100A02659F12D06AAAEB588E3FEFDA53D56CE7D2CAD3274D217484605B3179F7A16FF129AF75115D43BDA8D2D904F6BE4F6660A97B652D5BA30DD267A8AB408FB00189746210FC64F260AA24E3CC4E619F58E637EF3AE7E0FD38D3F48D77CADA48456EED7FA292F9646FD9B331B560D1169451054B4919C7043A534A8E94510714B2A988A22461F712D37541D2BF38A34D9133',
]
var token = tokens[0]
var minBalance = 100
var betBalance = 5
let startTime, endTime, duration
// get ball list 
function callBet(token, broker, symbol, betBalance) {
  return new Promise((resolve, reject) => {
    startTime = new Date()
    wtb.getBalance(token).then(balance => {
      log('Current Balance:%s', balance)
      if (balance > minBalance) {
        wtb.getBall(token, {
          brokerId: broker,
          symbolId: symbol
        }).then(balls => {
          let indexBall = balls.length;
          let result = balls[(balls.length - 1)].Result
          let isGreenBall = result === 2 ? false : true // (green or yellow)
          log('LatestBall[%s].Result=%s is:%s', indexBall, result, isGreenBall ? 'Green' : 'Red')
          wtb.bet(token, {
            brokerId: broker,
            symbolId: symbol,
            BetChoice: isGreenBall ? wtb.choice.SELL : wtb.choice.BUY, // buy 1, sell 2
            BetFrom: 'w',
            Stake: betBalance, // $
          }).then(result => {
            endTime = new Date()
            duration = wtb.dateDiff(startTime, endTime, 'seconds')
            log(`startTime = ${startTime.toLocaleTimeString()}`)
            log(`endTime = ${endTime.toLocaleTimeString()}`)
            log(`duration: ${duration}`)
            log('Result bet:')
            log(result)
            let timeout = 30000 - (parseInt(duration) * 1000)
            log('timeout:%s', timeout)
            resolve()
            // setTimeout(() => {
            //   //callBet();
            // }, timeout);
          }, error => {
            log(error)
            reject(error)
          })
        })
      }
      else {
        log(`Balance is comming min value : ${balance}`)
        reject(`Balance is comming min value : ${balance}`)
      }
    })
  })
}
var broker = [{ coin: 2 }, { forex: 1 }]
var symbol = {
  forex: [
    { EURUSD: 1 },
    { AUDUSD: 2 },
    { GBPUSD: 3 },
    { USDJPY: 4 },
    { EURGBP: 5 },
    { EURJPY: 6 },
    { USDCAD: 7 },
    { USDCHF: 8 },
    { DIAMOND: 9 },
    { GOLD: 10 },
    { SILVER: 11 },
    { OIL: 12 },
  ],
  coin: [
    { itcoin: 1 },
    { Ethereum: 2 },
    { Bitcoin_Cash: 3 },
    { Ripple: 4 },
    { Litecoin: 5 },
    { IOTA: 6 },
    { NEM: 7 },
    { Dash: 8 },
    { EOS: 9 },
    { Stellar: 10 },
    { Cardano: 11 },
    { NEO: 12 }
  ]
}
var i = 0, j = 0
function callBet2(token, broker, symbol, betBalance) {
  startTime = new Date()
  wtb.getBall(token, {
    brokerId: broker,
    symbolId: symbol
  }).then(balls => {
    let indexBall = balls.length;
    let result = balls[(balls.length - 1)].Result
    let isGreenBall = result === 2 ? false : true // (green or yellow)
    log('LatestBall[%s].Result=%s is:%s', indexBall, result, isGreenBall ? 'Green' : 'Red')
    wtb.bet(token, {
      brokerId: broker,
      symbolId: symbol,
      BetChoice: isGreenBall ? wtb.choice.SELL : wtb.choice.BUY, // buy 1, sell 2
      BetFrom: 'w',
      Stake: betBalance, // $
    }).then(result => {
      endTime = new Date()
      duration = wtb.dateDiff(startTime, endTime, 'seconds')
      log(`startTime = ${startTime.toLocaleTimeString()}`)
      log(`endTime = ${endTime.toLocaleTimeString()}`)
      log(`duration: ${duration}`)
      log('Result bet:')
      log(result)
      let timeout = 30000 - (parseInt(duration) * 1000)
      log('timeout:%s', timeout)
      if (i < broker.length && j < symbol.coin.length) {
        j++
        callBet2(token, broker[i].coin, symbol.coin[j], betBalance)
      }
      else {
        if (i < broker.length) {
          j = 0;
          i++
          callBet2(token, broker[i].forex, symbol.forex[j], betBalance)
        }
        else {
          log('done')
        }
      }
    })
  })
}
//callBet2(token, broker[0].coin, symbol.coin[0][Object.keys(symbol.coin[0])[0]], betBalance)

// var broker = [
//   {
//     id: 1,
//     name: 'FOREX',
//     values: [
//       1,// EURUSD
//       2,// AUDUSD
//       3,// GBPUSD
//       4,// USDJPY
//       5,// EURGBP
//       6,// EURJPY
//       7,// USDCAD
//       8,// USDCHF
//       9,// DIAMOND
//       10,// GOLD
//       11,// SILVER
//       12 // OIL
//     ]
//   }, {
//     id: 2,
//     name: 'COIN',
//     values: [
//       1,// Bitcoin
//       2,// Ethereum
//       3,// Bitcoin Cash
//       4,// Ripple
//       5,// Litecoin
//       6,// IOTA
//       7,// NEM
//       8,// Dash
//       9,// EOS
//       10,// Stellar
//       11,// Cardano
//       12 // NEO
//     ]
//   }
// ]
function callBet3(token, brokerId, symbolId, betBalance) {
  startTime = new Date()
  wtb.getBall(token, {
    brokerId: brokerId,
    symbolId: symbolId
  }).then(balls => {
    let indexBall = balls.length;
    let result = balls[(balls.length - 1)].Result
    let isGreenBall = result === 2 ? false : true // (green or yellow)
    log('LatestBall[%s].Result=%s is:%s', indexBall, result, isGreenBall ? 'Green' : 'Red')
    wtb.bet(token, {
      brokerId: brokerId,
      symbolId: symbolId,
      BetChoice: isGreenBall ? wtb.choice.SELL : wtb.choice.BUY, // buy 1, sell 2
      BetFrom: 'w',
      Stake: betBalance, // $
    }).then(result => {
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
        callBet3(token, broker[i].id, broker[i].values[j], betBalance)
      }
      else {
        if (i < broker.length - 1) {
          j = 0
          i++
          log('i=%s j=%s', i, j)
          log('broker.length=:%s && broker[%s].values.length=%s', broker.length, i, broker[i].values.length)
          callBet3(token, broker[i].id, broker[i].values[j], betBalance)
        }
        else {
          log('done')
        }
      }
    })
  })
}
// wtb.getToken().then(token => {
//   callBet3(token, broker[0].id, broker[0].values[0], betBalance);
// })

// Complete Algorith
// var availablePlay = [
//   2, 8, 14, 20, 26, 32, 38, 44, 50, 56,
//   3, 9, 15, 21, 27, 33, 39, 45, 51, 57,
//   4, 10, 16, 22, 28, 34, 40, 46, 52, 58
// ]

// only check indexball avaiable bet or not
var availablePlay = {
  _1: true, _7: true, _13: true, _19: true, _25: true, _31: true, _37: true, _43: true, _49: true, _55: true,
  _2: true, _8: true, _14: true, _20: true, _26: true, _32: true, _38: true, _44: true, _50: true, _56: true,
  _3: true, _9: true, _15: true, _21: true, _27: true, _33: true, _39: true, _45: true, _51: true, _57: true,
  _4: true, _10: true, _16: true, _22: true, _28: true, _34: 2, _40: true, _46: true, _52: true, _58: true,
  _5: true, _11: true, _17: true, _23: true, _29: true, _35: true, _41: true, _47: true, _53: true, _59: true,
  _6: true, _12: true, _18: true, _24: true, _30: true, _36: true, _42: true, _48: true, _54: true, _60: true
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
// wtb.getToken().then(token => {
//   callBet4(token, broker[0].id, broker[0].values[0], betBalance);
// })
// loop each currency pair
var count = [

]
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
            
            //log('timeout:%s', timeout)

            // ==== wait bet result ====
            // TODO
            // Calc timeout exactly
            // GetBall
            
              wtb.getServerTime(token).then(({time})=>{
                let second = new Date(time).getSeconds();
                let timeout = (60 - second)*1000
                log('timeout=%s | second=%s',timeout,second);
                setTimeout(function(){
                  callBet5(token, brokerId, symbolId, betBalance)
                },timeout)
              })
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
  callBet5(token, broker[0].id, broker[0].values[0], betBalance);
})

























// callBet(token, wtb.broker.forex, wtb.forex.AUDUSD, betBalance).then(() => {
//   callBet(token, wtb.broker.forex, wtb.forex.DIAMOND, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.forex, wtb.forex.EURGBP, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.forex, wtb.forex.EURJPY, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.forex, wtb.forex.EURUSD, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.forex, wtb.forex.GBPUSD, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.forex, wtb.forex.GOLD, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.forex, wtb.forex.OIL, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.forex, wtb.forex.SILVER, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.forex, wtb.forex.USDCAD, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.forex, wtb.forex.USDCHF, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.forex, wtb.forex.USDJPY, betBalance)
// }, error => { log(error) })
// .then(() => {
//   callBet(token, wtb.broker.coin, wtb.coin.Bitcoin, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.coin, wtb.coin.Bitcoin_Cash, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.coin, wtb.coin.Cardano, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.coin, wtb.coin.Dash, betBalance)
// }, error => { log(error) })
// .then(() => {
//   callBet(token, wtb.broker.coin, wtb.coin.EOS, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.coin, wtb.coin.Ethereum, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.coin, wtb.coin.IOTA, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.coin, wtb.coin.Litecoin, betBalance)
// }, error => { log(error) })
// .then(() => {
//   callBet(token, wtb.broker.coin, wtb.coin.NEM, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.coin, wtb.coin.NEO, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.coin, wtb.coin.Ripple, betBalance)
// }, error => { log(error) }).then(() => {
//   callBet(token, wtb.broker.coin, wtb.coin.Stellar, betBalance)
// }, error => { log(error) })

// for (var symbol in wtb.forex) {
//   for (var broker in wtb.broker) {
//     callBet(token, broker, symbol, betBalance)
//   }
// }
