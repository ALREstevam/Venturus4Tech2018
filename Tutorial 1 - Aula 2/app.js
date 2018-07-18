const express = require("express"); //requerindo o express
const app = express(); //criando uma instância
const port = 3000;

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


app.post('/vagas', async (req, res) =>{
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



//GET POR ID
app.get('/vagas/:id' , async (req, res) => {
   
    try{
        let searchId = req.params.id;
        let result = vagas.find(obj => obj.id == searchId);
        if(result === undefined) return res.status(500).send('No registers found');
        if(result.length > 1) return res.status(500).send('Too many registers found');
        return res.send(result);
    }
    catch(error){
        return res.status(500).send('Internal error');
    }
    



})

//PUT


//DELETE



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