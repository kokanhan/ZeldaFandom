/*
 * Write your server code in this file.
 *
 * name: Han Jiang
 * email: jianghan@oregonstate.edu
 */
// var PORT = process.env.PORT || 3000;
// var http = require('http');//allows us to build an HTTP server or to make HTTP requests
// var fs = require('fs'); //import fs, Node’s built-in module for working with the file system
// console.log("read once index");
// var index = fs.readFileSync('./public/index.html', 'utf8');
// // readFileSync: make sure the block of code be executed before proceeding the program

// console.log("read once 404");
// var P404 = fs.readFileSync('./public/404.html', 'utf8');
// console.log("read once css");
// var CSS = fs.readFileSync('./public/style.css', 'utf8');
// console.log("read once js");
// var Js = fs.readFileSync('./public/index.js', 'utf8');
// console.log("read once chahtml");
// var chahtml = fs.readFileSync('./public/character.html', 'utf8');
// console.log("read once chajs");
// var chajs = fs.readFileSync('./public/character.js', 'utf8');
// console.log("read once chacss");
// var CSSCHA = fs.readFileSync('./public/styleCha.css', 'utf8');

// // use express to handle img
// //var BlueIcon = fs.readFileSync('./public/pics/BotW_Blue_Sheikah_Eye_Symbol48x48.ico', 'utf8');

// var server = http.createServer(function(req, res) {

//     if (req.url == '/' || req.url == '/index.html') {
//         console.log(" ==Got a request");

//         // req.method: a string indicating the HTTP method associated with the request (e.g. 'GET', 'POST', etc.)
//         console.log("  -- HTTP method:", req.method);

//         // request.url: a string indicating the URL of the requested resource, usually without the host or protocol 
//         // (e.g. '/index.html' instead of 'http://www.host.com/index.html')
//         console.log("  -- Resource:", req.url);

//         // request.headers – an object containing the headers associated with the request, e.g.:
//         // {
//         //     "Content-Type": "application/json",
//         //     "Accept-Language": "en-US"
//         // }
//         console.log("  -- Headers:", req.headers);

//         res.writeHead(200, {
//             "Content-Type": "text/html"
//         });
//         res.write(index);
//     } else if (req.url == '/style.css') {
//         res.writeHead(200, { "Content-Type": "text/css" });
//         res.write(CSS);
//     } else if (req.url == '/404.html') {

//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write(P404);
//     } else if (req.url == '/index.js') {
//         res.writeHead(200, { "Content-Type": "application/javascript" });
//         res.write(Js);
//     } else if(req.url == '/character.html') {
//         res.writeHead(200, { "Content-Type": "text/html"});
//         res.write(chahtml);
//     }
//     else if (req.url == '/styleCha.css') {
//         res.writeHead(200, { "Content-Type": "text/css" });
//         res.write(CSSCHA);
//     }
//     else if (req.url == '/character.js') {
//         res.writeHead(200, { "Content-Type": "application/javascript" });
//         res.write(chajs);
//     }
//     // use express to handle img
//     // else if (req.url == './pics/BotW_Blue_Sheikah_Eye_Symbol48x48.ico'){
//     //     res.writeHead(200, { "Content-Type": 'image/jpg' });
//     //     res.write(BlueIcon);
//     // }

//     else {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         res.write(P404); //deal with unexisted file
//     }


//     res.end();
// });

// server.listen(PORT, function() {
//     console.log("== Server listening on port", PORT);
// });




var PORT = process.env.PORT || 3000;

var express = require('express');
var app = express();

//var logger = require('./logger');


function logger(req, res, next) {
  console.log("== Request received:");
  console.log("  -- method:", req.method);
  console.log("  -- URL:", req.url);
  next();
}
app.use(logger);

app.use(express.static(__dirname + "/public"));


app.get('/about', function (req, res, next) {
  res.status(200);
  res.send("<html><body><h1>About page</h1></body></html>");
});

app.get('/', function (req, res, next) {
  // res.status(200);
  res.status(200).sendFile(__dirname + "/public/index.html");
});

app.get('/character', function (req, res, next) {
  // res.status(200);
  res.status(200).sendFile(__dirname + "/public/character.html");
});

var availableCharacters = [
  'Link',
  'Princess_Zelda',
  'Prince_Sidon',
  'King_Rhoam'
];
app.get('/character/:name', function (req, res, next) {
  console.log("== req.params:", req.params);
  var name = req.params.name;
  if (availableCharacters.indexOf(name) >= 0) {
    res.status(200).sendFile(
      __dirname + "/public/character/" + name + ".html"
    );
  } else {
    next();
  }
});

app.get('/character/:name/:photo', function (req, res, next) {
  console.log("== req.params:", req.params);
  next();
});

// app.post();

app.get('*', function (req, res, next) {
  // res.status(200);
  res.status(404).sendFile(__dirname + "/public/404.html");
});

app.listen(PORT, function () {
  console.log("== Server is listening on port 3000!!!!!");
});
