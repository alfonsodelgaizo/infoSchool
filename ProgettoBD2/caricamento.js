var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const fs = require('fs');

var progetti = [];



fs.readFile('autorizzati.json', (err, data) => {  
    if (err) throw err;
    let parsato = JSON.parse(data);
    
    //var j;

    for(let i=50000;i<52000;i++){

    //let i=j;
    
    //var p = new progettiAutorizzati('','','','','','','','','','','','','','','','','',''); 

  

                    MongoClient.connect(url,function(err, db) {
                      if (err) throw err;

                      var annoAvv= parsato['@graph'][i]['miur:ANNOAVVISO'];
                      var codAvviso= parsato['@graph'][i]['miur:CODICEAVVISO'];    
                      var codAzione = parsato['@graph'][i]['miur:CODICEAZIONE'];
                      var codCanIst=parsato['@graph'][i]['miur:CODICECANDIDATURAISTITUTO'];
                      var codCup=parsato['@graph'][i]['miur:CODICECUP'];
                      var codIstAtt=parsato['@graph'][i]['miur:CODICEISTITUTOATTUALIZZATO'];
                      var codIstOr=parsato['@graph'][i]['miur:CODICEISTITUTOORIGINARIO'];
                      var codProg=parsato['@graph'][i]['miur:CODICEPROGETTO'];
                      var codProgramma=parsato['@graph'][i]['miur:CODICEPROGETTO'];
                      var codSotto=parsato['@graph'][i]['miur:CODICESOTTOAZIONE'];
                      var dataProt=parsato['@graph'][i]['miur:DATAPROTOCOLLO'];
                      var denomProg=parsato['@graph'][i]['miur:DENOMINAZIONEPROGRAMMA'];
                      var desAz=parsato['@graph'][i]['miur:DESCRIZIONEAZIONE'];
                      var desProgetto=parsato['@graph'][i]['miur:DESCRIZIONEPROGETTO'];
                      var desSotto=parsato['@graph'][i]['miur:DESCRIZIONESOTTOAZIONE'];
                      var numProt=parsato['@graph'][i]['miur:NUMEROPROTOCOLLO'];
                      var tipFo=parsato['@graph'][i]['miur:TIPOFONDO'];
                      var titProg=parsato['@graph'][i]['miur:TITOLOPROGETTO'];
                  
                      var progetto = { annoAvviso:annoAvv, codiceAvviso: codAvviso, codiceAzione: codAzione, codiceCandidaturaIstituto:codCanIst, codiceCup:codCup, 
                                       codiceIstitutoAttualizzato:codIstAtt,codiceIstitutoOriginario:codIstOr,codiceProgetto:codProg,codiceProgramma:codProgramma,codiceSottoAzione:codSotto,
                                       dataProtocollo:dataProt,denominazioneProgramma:denomProg,descrizioneAzione:desAz,descrizioneProgetto:desProgetto,descrizioneSottoAzione:desSotto,
                                      numeroProtocollo:numProt,tipoFondo:tipFo,titoloProgetto:titProg};
                                      //console.log('ALDFONS'+i);
                                      
                        //var oggetto= { titoloProgetto:progetto.titoloProgetto};
                        var dbo = db.db("infoSchool");
                             dbo.collection("progettiApprovati").insertOne(progetto, function(err, res) {
                             console.log(i);
                             console.log(progetto);

                               });
                                });
   
    }
    
   
});








