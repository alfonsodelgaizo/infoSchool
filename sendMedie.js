

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

                MongoClient.connect(url, function(err, db) {

                var dbo = db.db("infoSchool");
                
                //const config = require('./node_modules/config');
                const express = require('express'),
                app = express();
  
  
                app.get('/findMedieItaliane', function (req, res) {
                    

                    dbo.collection("mediaItaliana").find().toArray(function(err, result) {

                    res.send({result});

                    });
                    // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
                });
                
                
                app.listen(8300, 'localhost', function() {
                    console.log("... port  mode 8300");
                });
                
                });

//------------------------------------------------ MEDIE CAMPANIA ----------------------------------------------------------------------

                MongoClient.connect(url, function(err, db) {

                    var dbo = db.db("infoSchool");
                    
                    //const config = require('./node_modules/config');
                    const express = require('express'),
                    app = express();
      
      
                    app.get('/findMedieCAMPANIA', function (req, res) {
                        
    
                        dbo.collection("medieCAMPANIA").find().toArray(function(err, result) {
    
                        res.send({result});
    
                        });
                        // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
                    });
                    
                    
                    app.listen(8301, 'localhost', function() {
                        console.log("... port  mode 8301");
                    });
                    
                    });



//------------------------------------------------ MEDIE BASILICATA ----------------------------------------------------------------------

MongoClient.connect(url, function(err, db) {

    var dbo = db.db("infoSchool");
    
    //const config = require('./node_modules/config');
    const express = require('express'),
    app = express();


    app.get('/findMedieBASILICATA', function (req, res) {
        

        dbo.collection("medieBASILICATA").find().toArray(function(err, result) {

        res.send({result});

        });
        // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
    });
    
    
    app.listen(8302, 'localhost', function() {
        console.log("... port  mode 8302");
    });
    
    });




//------------------------------------------------ MEDIE SICILIA ----------------------------------------------------------------------

MongoClient.connect(url, function(err, db) {

    var dbo = db.db("infoSchool");
    
    //const config = require('./node_modules/config');
    const express = require('express'),
    app = express();


    app.get('/findMedieSICILIA', function (req, res) {
        

        dbo.collection("medieSICILIA").find().toArray(function(err, result) {

        res.send({result});

        });
        // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
    });
    
    
    app.listen(8303, 'localhost', function() {
        console.log("... port  mode 8303");
    });
    
    });




    //------------------------------------------------ MEDIE SARDEGNA  ----------------------------------------------------------------------

MongoClient.connect(url, function(err, db) {

    var dbo = db.db("infoSchool");
    
    //const config = require('./node_modules/config');
    const express = require('express'),
    app = express();


    app.get('/findMedieSARDEGNA', function (req, res) {
        

        dbo.collection("medieSARDEGNA").find().toArray(function(err, result) {

        res.send({result});

        });
        // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
    });
    
    
    app.listen(8304, 'localhost', function() {
        console.log("... port  mode 8304");
    });
    
    });


        //------------------------------------------------ MEDIE PUGLIA  ----------------------------------------------------------------------

MongoClient.connect(url, function(err, db) {

    var dbo = db.db("infoSchool");
    
    //const config = require('./node_modules/config');
    const express = require('express'),
    app = express();


    app.get('/findMediePUGLIA', function (req, res) {
        

        dbo.collection("mediePUGLIA").find().toArray(function(err, result) {

        res.send({result});

        });
        // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
    });
    
    
    app.listen(8305, 'localhost', function() {
        console.log("... port  mode 8305");
    });
    
    });



            //------------------------------------------------ MEDIE CALABRIA  ----------------------------------------------------------------------

MongoClient.connect(url, function(err, db) {

    var dbo = db.db("infoSchool");
    
    //const config = require('./node_modules/config');
    const express = require('express'),
    app = express();


    app.get('/findMedieCALABRIA', function (req, res) {
        

        dbo.collection("medieCALABRIA").find().toArray(function(err, result) {

        res.send({result});

        });
        // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
    });
    
    
    app.listen(8306, 'localhost', function() {
        console.log("... port  mode 8306");
    });
    
    });









            //------------------------------------------------ MEDIE LAZIO ----------------------------------------------------------------------

            MongoClient.connect(url, function(err, db) {

                var dbo = db.db("infoSchool");
                
                //const config = require('./node_modules/config');
                const express = require('express'),
                app = express();
            
            
                app.get('/findMedieLAZIO', function (req, res) {
                    
            
                    dbo.collection("medieLAZIO").find().toArray(function(err, result) {
            
                    res.send({result});
            
                    });
                    // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
                });
                
                
                app.listen(8307, 'localhost', function() {
                    console.log("... port  mode 8307");
                });
                
                });





 //------------------------------------------------ MEDIE MOLISE ----------------------------------------------------------------------

            MongoClient.connect(url, function(err, db) {

                var dbo = db.db("infoSchool");
                
                //const config = require('./node_modules/config');
                const express = require('express'),
                app = express();
            
            
                app.get('/findMedieMOLISE', function (req, res) {
                    
            
                    dbo.collection("medieMOLISE").find().toArray(function(err, result) {
            
                    res.send({result});
            
                    });
                    // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
                });
                
                
                app.listen(8308, 'localhost', function() {
                    console.log("... port  mode 8308");
                });
                
                });


  //------------------------------------------------ MEDIE UMBRIA----------------------------------------------------------------------

            MongoClient.connect(url, function(err, db) {

                var dbo = db.db("infoSchool");
                
                //const config = require('./node_modules/config');
                const express = require('express'),
                app = express();
            
            
                app.get('/findMedieUMBRIA', function (req, res) {
                    
            
                    dbo.collection("medieUMBRIA").find().toArray(function(err, result) {
            
                    res.send({result});
            
                    });
                    // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
                });
                
                
                app.listen(8309, 'localhost', function() {
                    console.log("... port  mode 8309");
                });
                
                });





  //------------------------------------------------ MEDIE MARCHE ----------------------------------------------------------------------

  MongoClient.connect(url, function(err, db) {

    var dbo = db.db("infoSchool");
    
    //const config = require('./node_modules/config');
    const express = require('express'),
    app = express();


    app.get('/findMedieMARCHE', function (req, res) {
        

        dbo.collection("medieMARCHE").find().toArray(function(err, result) {

        res.send({result});

        });
        // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
    });
    
    
    app.listen(8310, 'localhost', function() {
        console.log("... port  mode 8310");
    });
    
    });





  //------------------------------------------------ MEDIE TOSCANA ----------------------------------------------------------------------

  MongoClient.connect(url, function(err, db) {

    var dbo = db.db("infoSchool");
    
    //const config = require('./node_modules/config');
    const express = require('express'),
    app = express();


    app.get('/findMedieTOSCANA', function (req, res) {
        

        dbo.collection("medieTOSCANA").find().toArray(function(err, result) {

        res.send({result});

        });
        // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
    });
    
    
    app.listen(8311, 'localhost', function() {
        console.log("... port  mode 8311");
    });
    
    });





  //------------------------------------------------ MEDIE LOMBARDIA ----------------------------------------------------------------------

  MongoClient.connect(url, function(err, db) {

    var dbo = db.db("infoSchool");
    
    //const config = require('./node_modules/config');
    const express = require('express'),
    app = express();


    app.get('/findMedieLOMBARDIA', function (req, res) {
        

        dbo.collection("medieLOMBARDIA").find().toArray(function(err, result) {

        res.send({result});

        });
        // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
    });
    
    
    app.listen(8312, 'localhost', function() {
        console.log("... port  mode 8312");
    });
    
    });





  //------------------------------------------------ MEDIE PIEMONTE ----------------------------------------------------------------------

  MongoClient.connect(url, function(err, db) {

    var dbo = db.db("infoSchool");
    
    //const config = require('./node_modules/config');
    const express = require('express'),
    app = express();


    app.get('/findMediePIEMONTE', function (req, res) {
        

        dbo.collection("mediePIEMONTE").find().toArray(function(err, result) {

        res.send({result});

        });
        // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
    });
    
    
    app.listen(8313, 'localhost', function() {
        console.log("... port  mode 8313");
    });
    
    });








  //------------------------------------------------ MEDIE LIGURIA ----------------------------------------------------------------------

  MongoClient.connect(url, function(err, db) {

    var dbo = db.db("infoSchool");
    
    //const config = require('./node_modules/config');
    const express = require('express'),
    app = express();


    app.get('/findMedieLIGURIA', function (req, res) {
        

        dbo.collection("medieLIGURIA").find().toArray(function(err, result) {

        res.send({result});

        });
        // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
    });
    
    
    app.listen(8314, 'localhost', function() {
        console.log("... port  mode 8314");
    });
    
    });




    //------------------------------------------------ MEDIE VENETO ----------------------------------------------------------------------

  MongoClient.connect(url, function(err, db) {

    var dbo = db.db("infoSchool");
    
    //const config = require('./node_modules/config');
    const express = require('express'),
    app = express();


    app.get('/findMedieVENETO', function (req, res) {
        

        dbo.collection("medieVENETO").find().toArray(function(err, result) {

        res.send({result});

        });
        // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
    });
    
    
    app.listen(8315, 'localhost', function() {
        console.log("... port  mode 8315");
    });
    
    });




     //------------------------------------------------ MEDIE ABRUZZO ----------------------------------------------------------------------

  MongoClient.connect(url, function(err, db) {

    var dbo = db.db("infoSchool");
    
    //const config = require('./node_modules/config');
    const express = require('express'),
    app = express();


    app.get('/findMedieABRUZZO', function (req, res) {
        

        dbo.collection("medieABRUZZO").find().toArray(function(err, result) {

        res.send({result});

        });
        // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
    });
    
    
    app.listen(8316, 'localhost', function() {
        console.log("... port  mode 8316");
    });
    
    });




//------------------------------------------------ MEDIE EMILIA ROMAGNA ----------------------------------------------------------------------

  MongoClient.connect(url, function(err, db) {

    var dbo = db.db("infoSchool");
    
    //const config = require('./node_modules/config');
    const express = require('express'),
    app = express();


    app.get('/findMedieEMILIA', function (req, res) {
        

        dbo.collection("medieEMILIA").find().toArray(function(err, result) {

        res.send({result});

        });
        // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
    });
    
    
    app.listen(8317, 'localhost', function() {
        console.log("... port  mode 8317");
    });
    
    });







//------------------------------------------------ MEDIE FRIULI ----------------------------------------------------------------------

MongoClient.connect(url, function(err, db) {

    var dbo = db.db("infoSchool");
    
    //const config = require('./node_modules/config');
    const express = require('express'),
    app = express();


    app.get('/findMedieFRIULI', function (req, res) {
        

        dbo.collection("medieFRIULI").find().toArray(function(err, result) {

        res.send({result});

        });
        // DALLLA CITTA CHIAMA UNA QUERY IN JSON E MANDO TUTTO AD UN ALTRA PAGINA PHP PER VISUALIZZARE I DATI DELLA QUERY 
    });
    
    
    app.listen(8318, 'localhost', function() {
        console.log("... port  mode 8318");
    });
    
    });














   
    

    
    



                

