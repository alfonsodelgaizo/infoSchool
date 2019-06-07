var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {

    var dbo = db.db("infoSchool");

  //const config = require('./node_modules/config');
  const express = require('express'),
  app = express();
 

  app.get('/home', function (req, res) {
    var citta = req.query.citta; // $_GET["id"]
    console.log(citta);

    var query = { provincia : citta};

    dbo.collection("scuole").find(query).toArray(function(err, result) {

    console.log(result);
     
    res.send({result});

    });
    // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
   });

   
app.listen(8500, 'localhost', function() {
    console.log("... port  mode");
 });

});



//------------------------- PON -------------------------------------------------------------------

MongoClient.connect(url, function(err, db) {

  var dbo = db.db("infoSchool");

//const config = require('./node_modules/config');
const express = require('express'),
app = express();


app.get('/pon', function (req, res) {
  var codice = req.query.codiceIstituto; // $_GET["id"]
  console.log(codice);

  var query = {codiceIstitutoOriginario : codice};

  dbo.collection("progettiApprovati").find(query).toArray(function(err, result) {

  console.log(result);
   
  res.send({result});

  });
  // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
 });

 
app.listen(8501, 'localhost', function() {
  console.log("... port  mode");
});

});

//------------------------- VALUTAZIONE ISTITUTO-------------------------------------------------------------------
MongoClient.connect(url, function(err, db) {

  var dbo = db.db("infoSchool");

//const config = require('./node_modules/config');
const express = require('express'),
app = express();


app.get('/valutazioni', function (req, res) {
  var codice = req.query.codiceIstituto; // $_GET["id"]
  console.log(codice);

  var query = {codiceIstituto : codice};

  dbo.collection("valutazioni").find(query).toArray(function(err, result) {

  console.log(result);
   
  res.send({result});

  });
  // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
 });

 
app.listen(8502, 'localhost', function() {
  console.log("... port  mode");
});

});