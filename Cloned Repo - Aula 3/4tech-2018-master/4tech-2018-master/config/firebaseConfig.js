const admin = require('firebase-admin');

var serviceAccount = require('./firebaseKey.json');//Arquivo com a chave do firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

var db = admin.firestore();
module.exports = db;//Exportando como um módulo


