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
console.log(dateStrings)