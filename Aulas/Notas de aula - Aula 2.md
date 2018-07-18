# Node.js

* É uma plataforma, não um framework
* Escrito em C++ -> aumento de plataforma por melhor acesso ao hardware
* Usa o interpretador V8 da google 
* Utilizado para fazer REST API


## Não é
* Uma linguagem de programação
* Um framework
* Multithread

## Requisições HTTPS
Baseado no IPV4

### Verbos
*Mais comuns*
**GET**
**POST**
**PUT**
**DELETE**


# Arrow Function
Novo no js
Utilizado para economia de sintaxe

`var sum = (n1, n2) => n1 + n2;`
`const server = http.createServer((req, res) => console.log)`



# Strings com  

	`Server listening on port ${port}`
	
Troca `${port}` pelo valor da variável `port`


 # Node Package Manager (NPM)

* Gerencia pacotes do node
* Gerencia dependências

`npm init` inicia um repositório
`npm install` instala uma dependência

`npm install request`
`-g local`
`-s no package.json`


`npm i` instala os pacotes listados no package.json

	  }
	  "author": "André",
	  "license": "ISC",
	  "dependencies": {
	    "express": "^4.16.3"
	  }
	}


é uma boa prática trocar `"^4.16.3"` por `"4.16.3"`

`node index.js` executa um arquivo js na máquina => funciona como servidor

# Express

* Um framework para o node
* Ajuda na criação de REST APIs

# JSON JavaScript Object Notation
* Fácil leitura
* Facilita a comunicação
* É simples


> **DICA** F1 no vs code para procurar opções 
> **DICA** ctrl + " para abrir o terminal

## Live reload com `nodemon`

`npm i -g nodemon` 

Facilidade no desenvolvimento - quando uma alteração acontece o node vai reiniciar o servidor automaticamente

Uso o -g quando uso coisas como nodemon - facilidades que independem do projeto
Uso -s para dependências que o projeto precisa para rodar

Ao invés de usar `node app.js` uso `nodemon app.js` na hora de executar

## Comando `npm start`
Roda o comando node no arquivo especificado no js


## Rest vs Soap
Rest -> json
Soap -> xml