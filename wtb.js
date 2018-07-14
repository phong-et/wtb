/**
 * Created by Phillipet on 7/08/2018.
 * wtb : wealthtrade bot
 */
module.exports = {
  /**
   *  ======================= Library and global variable ==============
   */
  cfg: require('./wtb.cfg'),
  cheerio: require('cheerio'),
  utilNode: require('util'),
  fs: require('fs'),
  request: require('request'),
  appRoot: require('app-root-path'),
  // socket: null,
  // socketNotify: null,
  // webSocket: require('ws'),
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.98 Safari/537.36',
    'Content-type': 'text/html'
  },
  getToken: function () {
    var me = this
    return new Promise((resolve, reject) => {
      me.fs.readFile(me.appRoot + '/wtb.token', 'utf8', function (err, data) {
        if (err) {
          reject(err)
        }
        else {
          resolve(data)
        }
      })
    })
  },
  // use for saving cookies to file - will reset foreach save file success
  arrayCookie: [],
  /** ========================= FUNCTION ===========================*/

  getDateTime: function (mode) {
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var miliSec = date.getMilliseconds();
    miliSec = (miliSec < 10 ? "0" : "") + miliSec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    var value = '';
    if (mode == undefined)
      value = year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec + ":" + miliSec;
    else if (mode == 'log') {
      value = '_' + year + month + day + '.log';
    }
    return value;
  },
  /**
   * src http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
   * @param date1 is earlier than date2
   * @param date2
   * @param interval
   * @returns {*}
   */
  dateDiff: function (date1, date2, interval) {
    var second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24, week = day * 7;
    date1 = new Date(date1);
    date2 = new Date(date2);
    var timediff = date2 - date1;
    if (isNaN(timediff)) return NaN;
    switch (interval) {
      case "years":
        return date2.getFullYear() - date1.getFullYear();
      case "months":
        return (
          (date2.getFullYear() * 12 + date2.getMonth())
          -
          (date1.getFullYear() * 12 + date1.getMonth())
        );
      case "weeks":
        return Math.floor(timediff / week);
      case "days":
        return Math.floor(timediff / day);
      case "hours":
        return Math.floor(timediff / hour);
      case "minutes":
        return Math.floor(timediff / minute);
      case "seconds":
        return Math.floor(timediff / second);
      default:
        return undefined;
    }
  },
  getRandomIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  saveFile: function (fileName, fileContent) {
    var me = this;
    var folder = me.config.sites.bet365.pagesPath;
    if (!me.fs.existsSync(folder)) {
      me.fs.mkdirSync(folder);
    }
    me.fs.writeFile(folder + fileName, fileContent, function (err) {
      if (err) return me.logErr(err);
      me.log('Write file ' + fileName + ' > success');
      me.arrayCookie = [];
    });
  },
  readFile: function (path, callback) {
    var me = this;
    me.fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
        me.logErr(err);
        data = '';
      }
      callback(data);
    });
  },
  log: console.log,
  /**
   * Request to home page get form and cookies data
   * Example :
   * ==> form data key name input form page
   * {  txtUserName: '...',
        txtPassword: '...',
    }
   * ==> cookies response from request to home page
   * 'set-cookie':
   [   'aps03=cg=0&cst=0&ct=204&lng=1; expires=Sat, 20-Mar-2027 00:00:00 GMT; path=/',
   'pstk=95D6160D53E12F7C8BA674BBF1ACCF05000003; domain=bet365.com; path=/',
   'rmbs=3; expires=Tue, 19-Sep-2017 23:00:00 GMT; path=/'
   ],
   * @param callback({form,jar})
   */
  loadForm: function () {
    var me = this;
    return new Promise((resolve, reject) => {
      var log = console.log;
      var wtbCfg = me.cfg.sites.wealthtrade;
      var url = wtbCfg.urlLogin;
      var request = me.request;
      var options = {
        url: url,
        headers: me.headers
      };
      log('Load form login :%s', url);
      request(options, (err, res) => {
        //log(this.uri.href);
        if (!err && res.statusCode == 200) {
          log(res.headers);
          log('code:%s', res.statusCode);
          /** Cookies example
           'set-cookie':[
           'rmbs=2; expires=Tue, 18-Jul-2017 06:43:00 GMT; path=/',
           'ASP.NET_SessionId=lncqq045xwgu4r55cj4efeec; path=/; HttpOnly',
           'pstk=5FB268B5654C2C0FA764C9E4DFBF0E40000003; domain=.bet365.com; path=/',
           'lng=en-GB; expires=Thu, 18-Jan-2018 07:43:00 GMT; path=/',
           'country=204; expires=Thu, 18-Jan-2018 07:43:00 GMT; path=/'
           ]
           */
          var jar = request.jar();
          res.headers['set-cookie'].forEach(cookies => {
            cookies.split(';').forEach(cookie => {
              jar.setCookie(request.cookie(cookie.trim()), url);
              // if (cookie.substr(0, 4) == 'pstk')
              //   pStk = cookie.substr(5, cookie.length);
            })
          });
          //log(jar)
          var form = {
            AccountId: wtbCfg.accountId,
            Password: wtbCfg.password,
            server: wtbCfg.server.trial
          };
          //log(form);
          //me.saveFile('bet365_HomePage.html', body);
          resolve({ form, jar });
        }
        else {
          log('Error at loadForm()');
          reject(`Error at loadForm() : ${err}`);
        }
      });
    })
  },
  /**
   * Login by form and cookies
   * @param form
   * @param jar
   * Example result
   * ==> { bodyLoginPage: 'txtKYCPID=0,txtPSTK=08961372CEE7B5E4AD6E466B54E38C3E000004',
           bodyIplrPage:  'True|1|0|2|MYR|08961372CEE7B5E4AD6E466B54E38C3E000004',
           sessionId:     '08961372CEE7B5E4AD6E466B54E38C3E000004'
         }
   */
  login: function (form, jar) {
    var me = this
    return new Promise((resolve, reject) => {
      url = me.cfg.sites.wealthtrade.urlLogin,
        request = me.request,
        headers = me.headers;
      log = me.log
      log('Login to %s', url);
      request.post({ url: url, jar: jar, form: form, headers: headers }, (err, res) => {
        if (!err && res.statusCode) {
          log(res.headers);
          log('code:%s', res.statusCode);
          //txtKYCPID=0,txtPSTK=BF049580F6334D8BB5AAE7268DEAF29C000004
          var urlRedirect = me.cfg.sites.wealthtrade.url
          request.get({ url: urlRedirect, jar: jar, headers: headers }, (err, res, body) => {
            if (!err && res.statusCode) {
              log(res.headers);
              log('code:%s', res.statusCode);
              resolve(body);
            }
            else {
              reject(`err at urlRedirect:${urlRedirect}, err:${err}`)
            }
          })
          //me.saveFile('bet365_LoginPage.html', body);
        }
        else {
          reject('Login failed at ' + url);
        }
      });
    })
  },
  createJAR: function (token) {
    let me = this, request = me.request, log = me.log
    var url = me.cfg.sites.wealthtrade.url
    var jar = request.jar();
    var cookies = token.split('; ');
    var __cfduid = cookies[0].split('=')[1]
    //var sessionId = cookies[1].split('=')[1];
    var ASPXFORMSAUTH = cookies[1].split('=')[1];
    //log(__cfduid)
    //log(sessionId)
    //log(ASPXFORMSAUTH)
    jar.setCookie(request.cookie('__cfduid' + __cfduid), url);
    //jar.setCookie(request.cookie('ASP.NET_SessionId=' + sessionId), url);
    jar.setCookie(request.cookie('.ASPXFORMSAUTH=' + ASPXFORMSAUTH), url);
    return jar
  },
  // __cfduid=dd9ba26fce26de6804f42a1c44c7635711530694744; ASP.NET_SessionId=ohitaw3d0rfvkgt3zttlqzwd; .ASPXFORMSAUTH=F6FDF872F9B5B763E7F0394928C3B067FA85738D6613A1A0E7BCDEFE1F157DA89DD04315980344E92E3A43AF73DFF7E1E25D31834BDD18908A9948BBE59D43D4A236A4F642BDAB7C728BA7D306D250D9585F03685AD9807C397704B8D75DCE9E54AF82B61F058CADE6157FD52830CEDA50600A5408AB870597F19BDAAB761100BCC04EA2CA67773A22BF1340520AA17D2061D946EFB43757B2AD214E85B8943AD3D1BEDC6043F3BF381F631DD1E9C2B68156E5FC6325C8B685B441C4DE427A94EFA9B4269748FB8EA419BAF1696F4BF932EFFF88DF18C6E731BC46AA1933DD52E94325112C58AE1A2AA3ABF2F0499BC1298FF402C0D357625E35AC123F7854FD6EB6E60757F634E433C6F12434BC70E8AE682E13CD6D95BF89CBA84D2E72AE0CFB19D7D2EFF6139E4E498521BBB9387BCAB67A7FD1EE6B583DA27AC6A80D6D54212FC17B2FD200BAF0D82F1784728EF9B7DD630B649FF7A48EB33D458E0147B5EAFFFF980A478C6DFC5955FC12D104BD51590C63596E26BDE22773ABF461A029FA51F3350CDD6FC2D9F795FFD18B37C3AB9317F84F05E66F3D163445CEF70A7B383235DE7F3765FFFD0F687EE3CDB82C9F4F0FE3448D582EF5CAEBC9DC862493BF322073C20CDA7FC392572C5B91EC9A
  loginByToken: function (token) {
    let me = this, request = me.request, headers = me.headers, log = me.log
    return new Promise((resolve, reject) => {
      request.get({ url: me.cfg.sites.wealthtrade.url, jar: me.createJAR(token), headers: headers }, (err, res, body) => {
        if (!err && res.statusCode) {
          log(res.headers);
          log('code:%s', res.statusCode);
          resolve(body);
        }
        else {
          reject(`err at loginByToken(), err: ${err}`)
        }
      })
    })
  },
  getNewToken: function (oldToken) {
    let me = this, request = me.request, headers = me.headers, log = me.log
    return new Promise((resolve, reject) => {
      request.get({ url: me.cfg.sites.wealthtrade.url, jar: me.createJAR(oldToken), headers: headers }, (err, res, body) => {
        if (!err && res.statusCode) {
          log(res.headers);
          log('code:%s', res.statusCode);
          resolve(body);
        }
        else {
          reject(`err at loginByToken(), err: ${err}`)
        }
      })
    })
  },
  //{"ErrorCode":0,"Message":null,"Status":true,"Data":523.0000}
  getBalance: function (token) {
    let me = this, request = me.request, headers = me.headers, log = me.log
    return new Promise((resolve, reject) => {
      var url = me.cfg.sites.wealthtrade.urlBalance;
      log('Get Balance :%s', url)
      request.post({ url: url, jar: me.createJAR(token), headers: headers }, (err, res, body) => {
        if (!err && res.statusCode) {
          //log(res.headers);
          //log('code:%s', res.statusCode);
          // {"ErrorCode":0,"Message":null,"Status":true,"Data":495.0000}
          let balance = me.parse(body)
          if (balance.ErrorCode == 0) {
            resolve(balance.Data);
          }
          else {
            reject(`err at balance.ErrorCode != 0`)
          }
        }
        else {
          reject(`err at getBalance(), err: ${err}`)
        }
      })
    })
  },
  choice: { BUY: 1, SELL: 2 },
  broker: { coin: 2, forex: 1 },
  coin: {
    Bitcoin: 1,
    Ethereum: 2,
    Bitcoin_Cash: 3,
    Ripple: 4,
    Litecoin: 5,
    IOTA: 6,
    NEM: 7,
    Dash: 8,
    EOS: 9,
    Stellar: 10,
    Cardano: 11,
    NEO: 12
  },
  getKey: function (obj, val) {
    return Object.keys(obj).find(key => obj[key] === val);
  },
  forex: { // symbol
    EURUSD: 1,
    AUDUSD: 2,
    GBPUSD: 3,
    USDJPY: 4,
    EURGBP: 5,
    EURJPY: 6,
    USDCAD: 7,
    USDCHF: 8,
    DIAMOND: 9,
    GOLD: 10,
    SILVER: 11,
    OIL: 12
  },
  // succes : {"ErrorCode":0,"Message":null,"Status":false,"Data":{"Balance":518.00,"Turnover":[{"BrokerID":1,"SymbolID":9,"TotalBuy":5.00,"TotalSell":0.00,"Balance":0,"AutoStatus":0}]}}
  // error  : {"ErrorCode":4,"Message":"Invalid order time!","Status":false,"Data":null}
  bet: function (token, data) {
    var me = this
    // var data = {
    //   brokerId: me.borker.forex, // forex 1, coin 2
    //   symbolId: me.forex.DIAMOND, // curentcy type
    //   BetChoice: me.choice.BUY, // buy 1, sell 2
    //   BetFrom: 'w',
    //   Stake: 5, // $
    // }

    return new Promise((resolve, reject) => {
      url = me.cfg.sites.wealthtrade.urlBet,
        request = me.request,
        headers = me.headers;
      log = me.log
      //log('Bet %s', url);
      var infoData = {
        brokerId: data.brokerId == 1 ? 'FOREX' : 'COIN',
        symbolId: me.getKey(data.brokerId == 1 ? me.forex : me.coin, data.symbolId),
        BetChoice: data.BetChoice == 1 ? 'BUY' : 'SELL',
        BetFrom: 'w',
        Stake: data.Stake
      }
      //this.log(data)
      log(JSON.stringify(infoData))
      request.post({
        url: url,
        jar: me.createJAR(token),
        form: data,
        headers: headers
      }, (err, res, body) => {
        if (!err && res.statusCode) {
          //log(res.headers);
          // log('code:%s', res.statusCode);
          let result = me.parse(body)
          //this.log(result)
          if (result.ErrorCode === 0) {
            resolve(result)
          }
          else {
            reject(`error at result.ErrorCode : ${result.Message}`);
          }
        }
        else {
          reject(`Err at bet() : ${err}`);
        }
      });
    })
  },
  ball: [{
    "CandleTime": "\/Date(1531234830000)\/",
    "Result": 2 // red
  }, {
    "CandleTime": "\/Date(1531234890000)\/",
    "Result": 1 // green
  }, {
    "CandleTime": "\/Date(1531234950000)\/",
    "Result": 2
  }, {
    "CandleTime": "\/Date(1531235010000)\/",
    "Result": 2
  }, {
    "CandleTime": "\/Date(1531235070000)\/",
    "Result": 2
  }],
  getBall: function (token, data) {
    let me = this, request = me.request, headers = me.headers, log = me.log
    // let data = {
    //   brokerId: this.borker.forex, 
    //   symbolId: this.forex.AUDUSD
    // }
    //log(token); 
    return new Promise((resolve, reject) => {
      request.get({
        url: me.cfg.sites.wealthtrade.urlBall,
        form: data,
        jar: me.createJAR(token),
        headers: headers
      }, (err, res, body) => {
        if (!err && res.statusCode) {
          //log(res.headers);
          //log('code:%s', res.statusCode);
          try {
            //log(body)
            resolve(me.parse(body));
          }
          catch (err) {
            reject(`err at getBall()-<>resolve(me.parse(body)): ${err}`)
          }
        }
        else {
          reject(`err at getBall(), err: ${err}`)
        }
      })
    })
  },
  // win : {"ErrorCode":0,"Message":null,"Status":true,"Data":{"TotalStake":10.0000,"TotalWinloss":10.0000,"TotalRefunded":0.0000,"NewBalance":533.0000,"PendingAmount":0}}
  //lose : {"ErrorCode":0,"Message":null,"Status":true,"Data":{"TotalStake":10.0000,"TotalWinloss":-10.0000,"TotalRefunded":0.0000,"NewBalance":523.0000,"PendingAmount":0}}
  getSettledInfo: function (token) {
    let me = this, request = me.request, headers = me.headers, log = me.log
    return new Promise((resolve, reject) => {
      var url = me.cfg.sites.wealthtrade.urlSettle;
      log('Get SettledInfo :%s', url)
      request.post({ url: url, jar: me.createJAR(token), headers: headers }, (err, res, body) => {
        if (!err && res.statusCode) {
          //log(res.headers);
          //log('code:%s', res.statusCode);
          // {"ErrorCode":0,"Message":null,"Status":true,"Data":495.0000}
          let SettledInfo = me.parse(body)
          if (balance.ErrorCode == 0) {
            resolve(SettledInfo);
          }
          else {
            reject(`err at balance.ErrorCode != 0`)
          }
        }
        else {
          reject(`err at getSettledInfo(), err: ${err}`)
        }
      })
    })
  },
  // 
  parse: function (str) {
    return JSON.parse(str)
  }
}
