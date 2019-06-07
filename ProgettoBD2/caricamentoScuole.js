var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const fs = require('fs');

var progetti = [];

//setTimeout(carica, 1500, 'funky');


//function carica(){


fs.readFile('anagraficaScuole.json', (err, data) => {  
    if (err) throw err;
    let parsato = JSON.parse(data);
    
    //var j;

    for(let i=50000;i<52000;i++){

    //let i=j;
    
    //var p = new progettiAutorizzati('','','','','','','','','','','','','','','','','',''); 
   

  

                    MongoClient.connect(url,function(err, db) {
                      if (err) throw err;

                      var area= parsato['@graph'][i]['miur:AREAGEOGRAFICA'];
                      var cap= parsato['@graph'][i]['miur:CAPSCUOLA'];    
                      var codComune = parsato['@graph'][i]['miur:CODICECOMUNESCUOLA'];
                      var codIstRif=parsato['@graph'][i]['miur:CODICEISTITUTORIFERIMENTO'];
                      var codScuola=parsato['@graph'][i]['miur:CODICESCUOLA'];
                      var denomIst=parsato['@graph'][i]['miur:DENOMINAZIONEISTITUTORIFERIMENTO'];
                      var denomScuola=parsato['@graph'][i]['miur:DENOMINAZIONESCUOLA'];
                      var desCaratt=parsato['@graph'][i]['miur:DESCRIZIONECARATTERISTICASCUOLA'];
                      var desComune=parsato['@graph'][i]['miur:DESCRIZIONECOMUNE'];
                      var desTipGrado=parsato['@graph'][i]['miur:DESCRIZIONETIPOLOGIAGRADOISTRUZIONESCUOLA'];
                      var indDir=parsato['@graph'][i]['miur:INDICAZIONESEDEDIRETTIVO'];
                      var indCom=parsato['@graph'][i]['miur:INDICAZIONESEDEOMNICOMPRENSIVO'];
                      var mail=parsato['@graph'][i]['miur:INDIRIZZOEMAILSCUOLA'];
                      var pec=parsato['@graph'][i]['miur:INDIRIZZOPECSCUOLA'];
                      var ind=parsato['@graph'][i]['miur:INDIRIZZOSCUOLA'];
                      var pr=parsato['@graph'][i]['miur:PROVINCIA'];
                      var reg=parsato['@graph'][i]['miur:REGIONE'];
                      var sede=parsato['@graph'][i]['miur:SEDESCOLASTICA'];
                      var sito=parsato['@graph'][i]['miur:SITOWEBSCUOLA'];

                  
                      var scuola = { areaGeografica:area, CAP: cap, codiceComune: codComune, codiceIstitutoRiferimento:codIstRif, codiceScuola:codScuola, 
                                       denominazioneIstituto:denomIst,denominazioneScuola:denomScuola,caratteristicaScuola:desCaratt,descrizioneComune:desComune,
                                       gradoScuola:desTipGrado,indirizzoDirettivo:indDir,indirizzoComprensivo:indCom,emailScuola:mail,pecScuola:pec,
                                       indirizzoScuola:ind,provincia:pr,regione:reg,sedeScuola:sede,sito:sito};
                                      //console.log('ALDFONS'+i);
                                      
                        //var oggetto= { titoloProgetto:progetto.titoloProgetto};
                        var dbo = db.db("infoSchool");
                             dbo.collection("scuole").insertOne(scuola, function(err, res) {
                             console.log(i);
                             console.log(scuola);

                               });
                                });
   


    }
    

    //setTimeout(carica, 5000, 'funky');

   
});




//}








