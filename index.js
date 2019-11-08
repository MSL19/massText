const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '8978f5f9',
  apiSecret: '5aX3gdeK86cWupMw',
});

const from = '15715776083';
const to = '17204537235';
const text = 'Hello from Nexmo';

//nexmo.message.sendSms(from, to, text);

const readXlsxFile = require('read-excel-file/node');
 
// File path.
readXlsxFile('./numbers.xlsx').then((rows) => {
  // `rows` is an array of rows
  for(var i =0; i<rows.length; i++){
    console.log(rows[i][1]);
    nexmo.message.sendSms(from, '1'+rows[i][1], "Hey "+rows[i][0]+" sorry...testing a mass texting app for the frat");

  }
  // each row being an array of cells.
})