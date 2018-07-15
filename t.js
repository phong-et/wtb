let d = new Date()
let dateStrings = `
d = new Date()
  toDateString()=============>${d.toDateString()}	Converts the date portion of a Date object into a readable string
  toGMTString()==============>${d.toGMTString()}	Deprecated. Use the toUTCString() method instead
  toISOString()==============>${d.toISOString()}	Returns the date as a string, using the ISO standard
  toJSON()===================>${d.toJSON()}	Returns the date as a string, formatted as a JSON date
  toLocaleDateString()=======>${d.toLocaleDateString()}	Returns the date portion of a Date object as a string, using locale conventions
  toLocaleTimeString()=======>${d.toLocaleTimeString()}	Returns the time portion of a Date object as a string, using locale conventions
  toLocaleString()===========>${d.toLocaleString("en-US")}	Converts a Date object to a string, using locale conventions
  toString()=================>${d.toString()}	Converts a Date object to a string
  toTimeString()=============>${d.toTimeString()}	Converts the time portion of a Date object to a string
  toUTCString()==============>${d.toUTCString()}	Converts a Date object to a string, according to universal time
`
let log =console.log
//console.log(dateStrings)

var availablePlay = {
  _2: false, _8: true, _14: true, _20: true, _26: true, _32: true, _38: true, _44: true, _50: true, _56: true,
  _3: true, _9: true, _15: true, _21: true, _27: true, _33: true, _39: true, _45: true, _51: true, _57: true,
  _4: true, _10: true, _16: true, _22: true, _28: true, _34: true, _40: true, _46: true, _52: true, _58: true,
}

//log(availablePlay["_1"])
if(availablePlay["_2"]){
  log('dcad')
}