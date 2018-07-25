'use strict';

//let jobs = require('../../../config/jobs-mockdb');

module.exports = app => {
    //Importando Job
    let Job = require('../../../model/Job');

    //Referenciando a collection no firebase
    
    const jobsCollection = app.config.firebaseConfig.collection('jobs');


    /* GET ALL*/
    //SELECT ALL REGISTERS ENDPOINT - [CONNECTED TO FIREBASE]
    app.get('/jobs', async (req, res) => {
        try {
            console.log('Endpoint [GET /jobs] called');
            const docs = await jobsCollection.get();
            let jobs = [];

            docs.forEach(doc => {
                jobs.push(Job.extractJob(doc));
            });
            return res.send(jobs);
        } catch (error) {
            console.log(error);
            return res.status(500).send({"error": `Um erro ocorreu: ${error}`});
        }
    })

    /* GET BY ID */
    //SELECTION BY ID ENDPOINT - [CONNECTED TO FIREBASE]
    app.get('/jobs/:id', async (req, res) => {
        try {
            console.log('Endpoint [GET /jobs/:id] called');
            jobsCollection.doc(req.params.id).get()
                .then(doc => {
                    if (!doc.exists) {
                        console.log(`No such document ${req.params.id}`);
                        return res.status(500).send({'error' : `O documento  '${req.params.id}' não existe`});
                    } else {
                        return res.send(Job.extractJob(doc));
                    }
                })
                .catch(error => {
                    console.log('Error getting document', error);
                    return res.status(500).send({'error':`Um erro ocorreu: ${error}`});
                });
        } catch (error) {
            return res.status(500).send({'error':`Um erro ocorreu: ${error}`});
        }

    })

    /* ADD JOB */
    //ADDITION ENDPOINT - [CONNECTED TO FIREBASE]
    app.post('/jobs2', async (req, res) => {
        try {
            console.log('Endpoint [POST /jobs] called');
            const receivedJob = req.body;
            const fbReturn = await jobsCollection.doc().set(
                {
                    "name":             receivedJob.name, 
                    "salary":           receivedJob.salary,
                    "area":             receivedJob.area,
                    "description":      receivedJob.description,
                    "skills":           receivedJob.skills,
                    "differentials":    receivedJob.differentials,
                    "isPcd":            receivedJob.isPcd,
                    "isActive":         receivedJob.isActive
                }
            );
            if (fbReturn) {
                let id = fbReturn.id;
                return res.send({'success':`Vaga ${id} adicionada com sucesso`, 'insertionId' : `${id}`});
            } else {
                return res.send({'error' : `A vaga ${req.params.id} não foi encontrada`});
            }
        } catch (error) {
            console.log('Erro ao inserir: \n' + error);
            return res.status(500).send({'error' : `Um erro ocorreu: ${error}`});
        }
    })

    /* UPDATE JOB BY ID */
    //UPDATE BY ID ENDPOINT - [CONNECTED TO FIREBASE]
    app.post('/jobs', async (req, res) => {
        jobsCollection.add(req.body)
        .then(
            ref => {
                return res.send({id : ref.id, status : 'success'});
            }
        )
        .catch(error => {
            return res.status(500).send({status: 'error', 'errorMsg':`${error}`})
        })
    })

    /* UPDATE JOB BY ID */
    //UPDATE BY ID ENDPOINT - [CONNECTED TO FIREBASE]
    app.put('/jobs/:id', async (req, res) => {
        try {
            console.log('Endpoint [PUT /jobs/:id] called');
            if (!req.body) {
                return res.status(403).send('Para alterar um usuário, é necessário passar algum valor');
            }
            let fbReturn = await jobsCollection.doc(req.params.id).update(req.body);
            if (fbReturn) {
                return res.send({'success' : `Vaga ${req.params.id} atualizada com sucesso`});
            } else {
                throw Error;
            }


        } catch (error) {
            return res.status(500).send({'error' : `Um erro ocorreu: ${error}`});
        }
    })


    /* DELETE JOB BY ID */
    //DELETE BY ID ENDPOINT [CONNECTED TO FIREBASE]
    app.delete('/jobs2/:id', async (req, res) => {
        try {
            console.log(`Endpoint [DELETE /jobs/:id] called for id : ${req.params.id}`);
            let deleteDoc = await jobsCollection
                .doc(req.params.id)
                .delete();

            if (deleteDoc) {
                return res.send({'success' : `Vaga ${req.params.id} foi removida com successo`})
            } else {
                throw Error;
            }

        } catch (error) {
            return res.status(500).send({'error' : `Um erro ocorreu : ${error}`});
        }
    })


    app.delete('/jobs/:id', async (req, res) => {
        try {
            console.log(`Endpoint [DELETE /jobs/:id] called for id : ${req.params.id}`);
            const deletedJob = await jobsCollection.doc(req.params.id).delete();
            if (deletedJob) {
                return res.send(`Vaga ${req.params.id} foi apagada com successo`);
            } else {
                throw Error;
            }
        } catch (error) {
            console.log(`Um erro ocorreu ${error}`);
            return res.status(500).send({'error' : `Um erro ocorreu ${error}`});      
        }
    })
}