'use strict';

//let jobs = require('../../../config/jobs-mockdb');




module.exports = app => {
    let Job = require('../../../model/Job');
    //Referenciando a collection no firebase
    const jobsCollection = app.config.firebaseConfig.collection('jobs');

    //SELECT ALL REGISTERS ENDPOINT - [CONNECTED TO FIREBASE]
    app.get('/jobs', async (req, res) => {
        try {
            const docs = await jobsCollection.get();
            let jobs = [];

            docs.forEach(doc => {
                jobs.push(Job.extractJob(doc));
            });
            return res.send(jobs);
        } catch (error) {
            console.log(error);
            return res.status(500).send(`Um erro ocorreu: ${error}`);
        }
    })

    //SELECTION BY ID ENDPOINT - [CONNECTED TO FIREBASE]
    app.get('/jobs/:id', async (req, res) => {
        const jobFromDb = jobsCollection.doc(req.params.id);

        var getDoc = jobFromDb.get()
            .then(doc => {
                if (!doc.exists) {
                    console.log(`No such document ${req.params.id}`);
                    return res.status(500).send(`O documento  '${req.params.id}' não existe`);
                } else {
                    return res.send(Job.extractJob(doc));
                }
            })
            .catch(error => {
                console.log('Error getting document', error);
                return res.status(500).send(`Um erro ocorreu: ${error}`);
            });

    })

    //ADDITION ENDPOINT - [CONNECTED TO FIREBASE]
    app.post('/jobs', async (req, res) => {
        try {
            const fbReturn = await jobsCollection.doc().set(req.body);
            if (fbReturn) {
                return res.send('Adicionado com sucesso');
            } else {
                throw Error;
            }
        } catch (error) {
            console.log('Erro ao inserir: \n' + error);
            return res.status(500).send(`Um erro ocorreu: ${error}`);
        }
    })

    //UPDATE BY ID ENDPOINT - [CONNECTED TO FIREBASE]
    app.put('/jobs/:id', async (req, res) => {
        try {

            if (!req.body) {
                return res.status(403).send('Para alterar um usuário, é necessário passar algum valor');
            }
            let fbReturn = await jobsCollection.doc(req.params.id).set(req.body);
            if (fbReturn) {
                return res.send('Atualizado com sucesso');
            } else {
                throw Error;
            }


        } catch (error) {
            return res.status(500).send(`Um erro ocorreu ${error}`);
        }
    })


    // {
    //     firebase.database().ref('users/' + userId).set({
    //         username: name,
    //         email: email,
    //         profile_picture : imageUrl
    //       });
    // }

    //DELETE BY ID ENDPOINT [CONNECTED TO FIREBASE]
    app.delete('/jobs/:id', async (req, res) => {
        try {
            let deleteDoc = await app.config.firebaseConfig
                .collection('jobs')
                .doc(req.params.id)
                .delete();

            if (deleteDoc) {
                return res.send("Deletado com sucesso")
            } else {
                throw Error;
            }

        } catch (error) {
            return res.status(500).send(`Um erro ocorreu : ${error}`);
        }
    })
}