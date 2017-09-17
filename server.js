'use strict';

let http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    moment = require('moment');

let server = http.createServer(function (req, res) {
  let page = 'pages'+req.url.split('?').shift()+'.html';
  res.setHeader('myname', 'Stas_Sivinskiy');
  res.setHeader("Content-Type", "text/html; charset=UTF-8");
  
  fs.stat(page, function(err, stat) {
    if(err == null) {
        fs.readFile(page, function (err, data) {
          res.end(data);
        });
    } else if (page == 'pages/time.html') {
          const formattedDate = moment().format('DD-MM-YY HH:mm:ss');
          res.end(formattedDate);
      } else {
        res.end('Страница не существует!');
      }
});
});


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  let addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});

