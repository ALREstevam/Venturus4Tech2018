# Aula 10
## JWT - json Web Token


* **Header**: tipo do token
* **Payload**: informações da entidade (colocar a senha não é uma boa prática
* **Signature**: concentração dos hashes

Apenas quem tem a chave pode validar o token
Não comite, mantenha em um local seguro

`npm install -S -E jsonwebtoken`

> **Dica** `-E` instala a versão específica (a mais atual e não será atualizada) -> sem o `^` na verão


## Local Storage
Salva dados nos browsers modernos como um cookie
Não guarde senhas nele!

## SessionStorage
Funciona como uma sessão no browser do cliente
Não guarde senhas nele!



