//zmienne, stałe

var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000; 

//funkcje na serwerze obsługujące konkretne adresy w przeglądarce
var path = require("path");

app.get("/", function (req, res) {
    res.send('działa')
})

app.use(express.static('static'));

//nasłuch na określonym porcie

app.listen(PORT, function () { 
    console.log("start serwera na porcie " + PORT );
})