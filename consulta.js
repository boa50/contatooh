var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

var _idProcurado = new ObjectID('5708c32fa20e3982a54189d6');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh',
  function(erro, db){
    if(erro)
      throw err;
    db.collection('contatos').findOne({_id : _idProcurado},
      function(erro, contato){
        if(erro)
          throw err;
        console.log(contato);
      })
  })
