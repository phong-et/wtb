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
var token = '__cfduid=dd9ba26fce26de6804f42a1c44c7635711530694744; .ASPXFORMSAUTH=87CE44F023788FB5EF2EF6C7F2FED102721E933704883E114114974BA554640FCA47111761B411062373470522AF83513F6CFBC669246C9BCA0EBCCE116A8EE36466FE606B41F73CA0634C59B9FEEB95449D20C4E22E38EEB03E32FDD34A9BDD6C62B4AEFEBBA41287338F81E98B48FE75A196A9BAC3A9A8CCA07E2C56CD54B83E2E5BC11E2335F7DE5CE032170735B07242E85848D5B81D81DF22FF6A690A165FE62B222DC0F5AFB421F1A78B95010CBF1DD754F5C136E3EF5564D8EBCB2910868509417F9068A543BF2F881A7EC05ED9A84C256FD81D988B184977C61B4CC1BC794E4505C2E93946458204F3691BC884D4908A7597DBC9786EBC558DE2CBE18AE14322E2D2373600E2C8DD6DB09C94CFCE5B58012E74E63DAC9C96F6EE2DD1D002742FB8EC2A3106640967D4FA903782B0F81E9DAD5854C9A6C7B4577E18203BBFA26C7712DC1DBB653AC1D71CCB8B94D075AAACD064589CF490909777418B07357ED3676AF1DB4B14F9D40A6F7D18F66C7F1FEFD432DE253E744B7F4BE95B34B39B6CE763554458E974AE4298019C4AB7B15508B8046105BF1CB3349E7995EC11B192D1F93EA594EA8257662D4A5EC7D4A6E1F5BF5EE2B7A87CFDB2585A3608CAB195C0E6BD2D16BE1E196636CB91'
var minBalance = 100
var balanceBet = 5
// get ball list 
function callBet(){
  wtb.getBalance(token).then(balance => {
    log('Balance:%s',balance)
    if (balance > minBalance) {
      //log(balance)
      wtb.getBall(token, {
        brokerId: wtb.borker.forex,
        symbolId: wtb.forex.AUDUSD
      }).then(balls => {      
        let isGreenBall = balls[balls.length - 1].Result == 1 ? true : false
        log('isGreenBall:%s',isGreenBall)
        wtb.bet(token, {
          brokerId: wtb.borker.forex, // forex 1, coin 2
          symbolId: wtb.forex.EURUSD, // curentcy type
          BetChoice: isGreenBall ? wtb.choice.SELL : wtb.choice.BUY, // buy 1, sell 2
          BetFrom: 'w',
          Stake: balanceBet, // $
        }).then(result => {
          log(result)
        }, error => {
          log(error)
        })
        setTimeout(() => {
          callBet();
        }, 60000);
      })
    }
    else {
      log(`Balance is comming min value : ${balance}`)
    }
  })
}
callBet()

