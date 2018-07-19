const express = require("express"); //requerindo o express
const app = express(); //criando uma instância
const port = 3000;

const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

let vagas = require('./config/vagas.js'); //dados que viriam do banco de dados
const Vaga = require('./model/vaga.js') //objeto que reprsenta uma vaga

const bodyParser = require('body-parser'); // parseia o header de uma requisição http

//bodyparser utilizados
//Módulo do node que trata cabeçalhos de http de forma simples
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// localhost:3000/ um endpoint
app.get('/', async (req, res) => {//express funcionando de forma assíncrona - não bloqueante
    return res.send('Hello World');
})

app.get('/vagas', async (req, res) => {
    return res.send(vagas);
})


app.post('/vaga-legacy', async (req, res) =>{
    try{
        let vagasLenght = vagas.length;
        let vaga = createVaga(req.body);
        vagas.push(vaga);

        if(vagas.length > vagasLenght) {return res.send('Added')}
        return res.status(500).send('Internal Error');
    }catch(error){
        return res.status(500).send('Internal error');
    }
})


//Adicionar registro
app.post('/vaga', 
[
    check('name').exists().matches('[\wÀ-ú\s_\.-]*'),
    check('description').exists(),
    check('skills').exists(),
    check('salary').isDecimal(),
    check('area').exists(),
    check('differentials').exists(),
    check('isPcd').isBoolean(),
    check('isActive').isBoolean(),
    check('id').isInt().custom(
        (value) => {
        if(findVagaById(vagas, value) != undefined){
            throw new Error('Id already in use');
        }
        return true;
      })
] 
,(req, res) =>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
        }

        let newVaga = createVaga(req.body)
        vagas.push(newVaga);
        return res.send('Added');
    }catch(error){
        return res.status(500).send('Internal error');
    }
})


//Alterar registro - PUT
app.put('/vaga', 
[
    check('name').exists().matches('[\wÀ-ú\s_\.-]*'),
    check('description').exists(),
    check('skills').exists(),
    check('salary').isDecimal(),
    check('area').exists(),
    check('differentials').exists(),
    check('isPcd').isBoolean(),
    check('isActive').isBoolean(),
    check('id').isInt().custom(
        (value) => {
        if(findVagaById(vagas, value) == undefined){
            throw new Error('Register does not exists');
        }
        return true;
      })
] 
,async (req, res) =>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        let indx = findVagaIndexById(vagas, req.body.id)
        vagas[indx] = createVaga(req.body);
        return res.send('Updated');
    }catch(error){
        return res.status(500).send('Internal error');
    }
})

//GET POR ID
app.get('/vagas/:id' , async (req, res) => {
    try{
        let searchId = req.params.id;
        let result = vagas.find(obj => obj.id == searchId);
        if(result === undefined) return res.status(500).send('Internal error - No registers found');
        return res.send(result);
    }
    catch(error){
        return res.status(500).send('Internal error');
    }
})

//DELETE
app.delete('/vaga/:id', async (req, res) => {
    try{
        let itemId = req.params.id;

        if(findVagaById(vagas, itemId) == undefined){
            return res.status(500).send(`No register with id ${itemId}`);
        }

        removeFromArray(vagas, itemId);
        return res.send("Removed");
    }
    catch(error){
        console.log(error);
        return res.status(500).send('Internal error');
    }
});



//Listen deve ficar depois dos endpoints
//Express fica escutando na porta
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})


const createVaga = (obj) => new Vaga(
    obj.id, 
    obj.name, 
    obj.description, 
    obj.skills, 
    obj.salary, 
    obj.area, 
    obj.differentials, 
    obj.isPcd, 
    obj.isActive
)

function findVagaById(collection, searchId){
    return collection.find(obj => obj.id == searchId);
}

function findVagaIndexById(collection, searchId){
    return collection.findIndex(obj => obj.id == searchId);
}

function removeFromArray(arr, index){
    arr.splice(index, 1); 
}