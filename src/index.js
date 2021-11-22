const express = require('express');
const app = express();
const moment = require('moment-timezone');
const serverless = require('serverless-http');





app.get('/:area/:timeZone', (req, res) => {



    
// var locale = req.params.area + "/" + req.params.timeZone;
// console.log(locale);
// var local_date = (moment().tz(locale).format('dddd MMMM Do YYYY, h:mm:ss a'));
// var weekDay =  moment().tz(locale).format('dddd');
// var month = moment().tz(locale).format('MMMM');
// var day =  moment().tz(locale).format('do');
// var year = moment().tz(locale).format('YYYY');
// var time = moment().tz(locale).format('h:mm:ss a');

// console.log("Week day = "+weekDay + "\nMonth = "+month + "\nDay = "+day+ "\nYear = "+ year+ "\nTime = " + time);

// var xml = require('xml');

// res.set('Content-Type', 'text/xml');

// var xmlBody = [];
// xmlBody.push({"weekDay" : weekDay});
// xmlBody.push({"month" : month});
// xmlBody.push({"day" : day});
// xmlBody.push({"year" : year});
// xmlBody.push({"time" : time});

// var response = {"localDate" : xmlBody}

// res.send(xml(response));
res.send(moment.tz.names().json);

})


// PORT
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port ${port}`))

