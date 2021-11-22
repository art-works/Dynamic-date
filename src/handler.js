const serverless = require("serverless-http");
const express = require("express");
const app = express();
const moment = require('moment-timezone');
const xml = require("xml");

app.get("/:area/:timeZone", (req, res, next) => {
  // return res.status(200).json({
  //   message: req.params.yoloo,
  //   code : req.params.name
  // });

  var locale = req.params.area + "/" + req.params.timeZone;
  console.log(locale);
  var local_date = (moment().tz(locale).format('dddd, MMMM Do YYYY'));
  var local_date2 = (moment().tz(locale).format('DD-MM-YYYY'));
  var weekDay =  moment().tz(locale).format('dddd');
  var month = moment().tz(locale).format('MMMM');
  var day =  moment().tz(locale).format('DD');
  var year = moment().tz(locale).format('YYYY');
  var time = moment().tz(locale).format('h:mm:ss a');
  
  console.log("Week day = "+weekDay + "\nMonth = "+month + "\nDay = "+day+ "\nYear = "+ year+ "\nTime = " + time);
  
  var xml = require('xml');
  console.log(local_date);

  res.set('Content-Type', 'text/xml');
  
  var xmlBody = [];
  xmlBody.push({"weekDay" : weekDay});
  xmlBody.push({"month" : month});
  xmlBody.push({"day" : day});
  xmlBody.push({"year" : year});
  xmlBody.push({"time" : time});
  xmlBody.push({"format1" : local_date});
  xmlBody.push({"format2" : local_date2});
  
  var response = {"localDate" : xmlBody}
  
  res.send(xml(response));
  

});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});





    
  
  





module.exports.handler = serverless(app);
