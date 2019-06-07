var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const fs = require('fs');

var progetti = [];



fs.readFile('valutazioni.json', (err, data) => {  
    if (err) throw err;
    let parsato = JSON.parse(data);
    
    //var j;

    for(let i=32000;i<34000;i++){

    //let i=j;
    
    //var p = new progettiAutorizzati('','','','','','','','','','','','','','','','','',''); 


                    MongoClient.connect(url,function(err, db) {
                      if (err) throw err;

                      var annoScol= parsato['@graph'][i]['miur:ANNOSCOLASTICO'];
                      var codCrit= parsato['@graph'][i]['miur:CODICECRITERIO'];    
                      var codIst = parsato['@graph'][i]['miur:CODICEISTITUTO'];
                      var Mot=parsato['@graph'][i]['miur:MOTIVAZIONEPUNTEGGIOSCUOLA'];
                      var Punt=parsato['@graph'][i]['miur:PUNTEGGIOSCUOLA'];
                      var Sez=parsato['@graph'][i]['miur:SEZIONE'];
                   
                  
                      var valutazione = { annoScolastico:annoScol, codiceCriterio:codCrit,codiceIstituto: codIst,motivazionePunteggioScuola :Mot
                                      , punteggioScuola:Punt , sezione:Sez };
                                      //console.log('ALDFONS'+i);
                                      
                        //var oggetto= { titoloProgetto:progetto.titoloProgetto};
                        var dbo = db.db("infoSchool");
                             dbo.collection("valutazioni").insertOne(valutazione, function(err, res) {
                             console.log(i);
                             console.log(valutazione);

                               });
                                });
   
    }
    
   
});








