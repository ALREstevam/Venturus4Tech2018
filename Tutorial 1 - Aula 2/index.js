const http = require('http');

// portas comuns
// 8843 8845 -> https
// 8080 -> http
const port = 3000;
//Arrow function => economizar sintaxe
//const server = http.createServer((req, res) => console.log)

//Criando o servidor
const server = http.createServer((req, res) => {
    res.write('Hello World');//Impresso na página
    res.end();
}).listen(port, () => {//Fazendo o servidor escutar a pora escolhida
    console.log(`Server listening on port ${port}`);//Impresso no terminal
});




