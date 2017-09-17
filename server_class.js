'use strict';

let http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url'),
    moment = require('moment');

let server_class = http.createServer(function (req, res) {
  res.setHeader('myname', 'Stas_Sivinskiy');
 let page = req.url.substr(1);
 if (page.indexOf('?') != -1) {page = page.substr(0, page.indexOf('?'));}
 
  if (page in pages) {
    pages[page](res, req);
  }
  else {
    res.setHeader("Content-Type", "text/html; charset=UTF-8");
    res.end('Страница не существует!');
  }
});

let pages = {
  time: function (res, req) {
    const formattedDate = moment().format('DD-MM-YY HH:mm:ss');
    res.end(formattedDate);
  },
  
  about: function (res, req) {
    res.setHeader("Content-Type", "text/html; charset=UTF-8");
    res.end('Станислав Сивинский');
  },
  
  length: function (res, req) {
    if (req.url.indexOf('?') == -1) {res.end(`0`);} else {
   let page = req.url.substr(req.url.indexOf('?')+1, req.url.length);
  res.end(`${page.length}`)} 
  }
}


server_class.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  let addr = server_class.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});

module.exports = server_class;
