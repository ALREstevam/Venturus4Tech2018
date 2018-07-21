'use strict';

//let jobs = require('../../../config/jobs-mockdb');




module.exports = app => {
    let Job = require('../../../model/Job');
    //Referenciando a collection no firebase
    const jobsCollection = app.config.firebaseConfig.collection('jobs'); 


    //SELECT ALL REGISTERS ENDPOINT
    app.get('/jobs', async (req, res) => {
        try{
            const docs = await jobsCollection.get();
            let jobs = [];

            docs.forEach(doc => {
                jobs.push(Job.extractJob(doc));
            });
            return res.send(jobs);
        }catch(error){
            console.log(error);
            return res.status(500).send(`Um erro ocorreu: ${error}`);
        }
    })

    //SELECTION BY ID ENDPOINT
    app.get('/jobs/:id', async (req, res) => {
        return res.send(jobs.find(el => el.id === req.params.id));
    })

    //ADDITION ENDPOINT
    app.post('/jobs', async (req, res) => {
        try {
            const fbReturn = await jobsCollection.doc().set(req.body);
            if(fbReturn){
                return res.send('Adicionado com sucesso');
            }else{
                throw Error;
            }
        } catch (error) {
            console.log('Erro ao inserir: \n' + error);
            return res.status(500).send(`Um erro ocorreu: ${error}`);
        }
    })

    //UPDATE BY ID ENDPOINT
    app.put('/jobs/:id', async (req, res) => {
        try {
            if (!req.body) {
                return res.status(403).send('Para alterar um usuário, é necessário passar algum valor');
            }
            let index = await jobs.findIndex(job => job.id === req.params.id);
            if (index >= 0) {
                Object.keys(req.body).forEach(job => {
                    jobs[index][job] = req.body[job]
                })
                return res.send(`Vaga com o id ${req.params.id} foi alterada com sucesso`);
            }
            return res.send("nao foi encontrado vaga com esse id");
        } catch (error) {
            return res.status(500).send(`Um erro ocorreu ${error}`);
        }
    })


    //DELETE BY ID ENDPOINT
    app.delete('/jobs/:id', (req, res) => {
        try {
            let length = jobs.length;
            jobs.splice(jobs.findIndex(el => el.id === req.params.id), 1);
            if (jobs.length < length) return res.send(`A vaga com o id ${req.params.id} foi deletada com successo`);
            else return res.status(500).send(`Não foi possível deletar a vaga ${req.params.id}`);
        } catch (error) {
            return res.status(500).send(error);
        }
    })
}