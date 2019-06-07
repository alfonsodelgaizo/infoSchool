var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err, db) {


  if (err) throw err;
  var dbo = db.db("infoSchool");

  var query = { codiceIstitutoOriginario : "BOIS02400B" };


  dbo.collection("progettiApprovati").find(query).toArray(function(err, result) {
    
   
    //const config = require('./node_modules/config');
   const express = require('express'),
   app = express();

   app.get('/progetti', function (req, res) {
   res.send({result});
    });

   app.listen(8400, 'localhost', function() {
       console.log("... port  mode");
    });
  });


  dbo.collection("valutazioni").find().toArray(function(err, result) {
    
   
    //const config = require('./node_modules/config');
   const express = require('express'),
   app = express();

   app.get('/valutazioni', function (req, res) {
   res.send({result});
    });

   app.listen(8401, 'localhost', function() {
       console.log("... port  mode");
    });
  })
  
  var query = { provincia : "FIRENZE" };

  dbo.collection("scuole").find(query).toArray(function(err, result) {
    
   
    //const config = require('./node_modules/config');
   const express = require('express'),
   app = express();

   app.get('/scuole', function (req, res) {
   res.send({result});
    });

   app.listen(8402, 'localhost', function() {
       console.log("... port  mode");
    });
  });

});
